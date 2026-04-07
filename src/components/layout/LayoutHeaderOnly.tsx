"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

import { MaintenanceBanner } from "@/components/MaintenanceBanner";
import { NetworkNotAvailableBanner } from "@/components/NetworkNotAvailableBanner";
import { LayoutHeaderLanding } from "@/components/layout/LayoutHeaderLanding";
import { FloatNotification } from "@/components/FloatNotification";

import { initTracking } from "@/metrics/tracking";
import { useStore } from "@/store/useStore";

export const LayoutHeaderOnly = ({ children }: { children: ReactNode }) => {
  const { floatNotifications, removeFloatNotification } = useStore();
  const [floatNotificationOffsetTop, setFloatNotificationOffsetTop] =
    useState(0);
  const headerRef = useRef<HTMLDivElement>(null);

  // Init tracking
  useEffect(() => {
    initTracking();
  }, []);

  // FloatNotification dynamic position based on header height (with or without banner)
  useEffect(() => {
    const headerEl = headerRef.current;

    if (!headerEl) return;

    const updateHeaderHeight = () => {
      setFloatNotificationOffsetTop(Math.floor(headerEl.offsetHeight));
    };

    updateHeaderHeight();

    const resizeObserver = new ResizeObserver(updateHeaderHeight);
    resizeObserver.observe(headerEl);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  // Handle auto closing float notifications
  useEffect(() => {
    if (floatNotifications.length === 0) {
      return;
    }

    // No need to check if there are no auto closing notifications
    const hasAutoCloseNotifications = floatNotifications.some(
      (notification) => notification.closeAt,
    );

    if (!hasAutoCloseNotifications) {
      return;
    }

    // Check every 100ms for expired notifications
    const interval = setInterval(() => {
      const now = Date.now();
      floatNotifications.forEach((notification) => {
        if (notification.closeAt && now >= notification.closeAt) {
          removeFloatNotification(notification.id);
        }
      });
    }, 100);

    return () => clearInterval(interval);
  }, [floatNotifications, removeFloatNotification]);

  return (
    <div className="LabLayout LabLayout--headerOnly">
      <div className="LabLayout__header" ref={headerRef}>
        <NetworkNotAvailableBanner />
        <MaintenanceBanner />
        <LayoutHeaderLanding />
      </div>

      <div className="LabLayout__headerOnly__content">
        <FloatNotification
          notifications={floatNotifications}
          onClose={removeFloatNotification}
          offsetTopInPx={floatNotificationOffsetTop}
        />
        {children}
      </div>
    </div>
  );
};
