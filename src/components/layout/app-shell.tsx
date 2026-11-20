
"use client";

import { useState } from "react";
import {
  Activity,
  Bell,
  Building2,
  ChevronDown,
  ClipboardCheck,
  FileCheck2,
  FileText,
  LayoutDashboard,
  Menu,
  Package,
  Search,
  Settings,
  ShieldCheck,
  Users,
  X,
} from "lucide-react";

const navigation = [
  {
    label: "WORKSPACE",
    items: [
      { name: "Overview", icon: LayoutDashboard, active: true },
      { name: "Suppliers", icon: Building2 },
      { name: "Supply chain", icon: Package },
    ],
  },
  {
    label: "EVIDENCE",
    items: [
      { name: "Evidence library", icon: FileText },
      { name: "Requests", icon: ClipboardCheck },
      { name: "Reviews", icon: FileCheck2 },
    ],
  },
  {
    label: "MANAGEMENT",
    items: [
      { name: "Team members", icon: Users },
      { name: "Activity log", icon: Activity },
      { name: "Settings", icon: Settings },
    ],
  },
];

function Sidebar({
  mobile = false,
  onClose,
}: {
  mobile?: boolean;
  onClose?: () => void;
}) {
  return (
    <aside className="flex h-full w-[260px] shrink-0 flex-col bg-sidebar text-sidebar-foreground">
      <div className="flex h-[76px] items-center justify-between border-b border-sidebar-border px-6">
        <div className="flex items-center gap-3">
          <div className="flex size-9 items-center justify-center rounded-lg bg-sidebar-primary">
            <ShieldCheck className="size-5 text-white" />
          </div>
          <div>
            <p className="text-[17px] font-semibold tracking-tight text-white">
              SupplierProof
            </p>
            <p className="text-[11px] text-slate-400">
              Supply chain intelligence
            </p>
          </div>
        </div>

        {mobile && (
          <button
            onClick={onClose}
            aria-label="Close navigation"
            className="rounded-md p-2 text-slate-300 hover:bg-sidebar-accent"
          >
            <X className="size-5" />
          </button>
        )}
      </div>

      <div className="border-b border-sidebar-border px-4 py-4">
        <button className="flex w-full items-center gap-3 rounded-lg border border-sidebar-border bg-sidebar-accent/70 p-3 text-left transition hover:bg-sidebar-accent">
          <div className="flex size-9 items-center justify-center rounded-md bg-[#31515b]">
            <Building2 className="size-4 text-teal-200" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-white">
              Your organization
            </p>
            <p className="text-xs text-slate-400">Workspace</p>
          </div>
          <ChevronDown className="size-4 text-slate-400" />
        </button>
      </div>

      <nav className="flex-1 space-y-7 overflow-y-auto px-3 py-6">
        {navigation.map((group) => (
          <div key={group.label}>
            <p className="mb-2 px-3 text-[10px] font-semibold tracking-[0.13em] text-slate-500">
              {group.label}
            </p>

            <div className="space-y-1">
              {group.items.map((item) => {
                const Icon = item.icon;

                return (
                  <button
                    key={item.name}
                    disabled={!item.active}
                    onClick={item.active ? onClose : undefined}
                    className={`flex w-full items-center gap-3 rounded-md px-3 py-2.5 text-left text-[13px] transition ${
                      item.active
                        ? "bg-sidebar-primary font-medium text-white"
                        : "cursor-not-allowed text-slate-400"
                    }`}
                    title={
                      item.active
                        ? item.name
                        : "This section will be implemented in a later milestone"
                    }
                  >
                    <Icon className="size-[17px]" />
                    <span>{item.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="border-t border-sidebar-border p-4">
        <div className="flex items-center gap-3 rounded-lg p-2">
          <div className="flex size-9 items-center justify-center rounded-full bg-[#31515b] text-xs font-semibold text-white">
            SP
          </div>
          <div className="min-w-0 flex-1">
            <p className="truncate text-sm font-medium text-white">
              Workspace admin
            </p>
            <p className="truncate text-xs text-slate-400">Administrator</p>
          </div>
          <Settings className="size-4 text-slate-400" />
        </div>
      </div>
    </aside>
  );
}

export function AppShell({ children }: { children: React.ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <div className="flex min-h-screen">
        <div className="hidden md:block">
          <Sidebar />
        </div>

        {mobileOpen && (
          <div className="fixed inset-0 z-50 md:hidden">
            <button
              className="absolute inset-0 bg-black/50"
              aria-label="Close navigation overlay"
              onClick={() => setMobileOpen(false)}
            />
            <div className="relative h-full w-[260px]">
              <Sidebar mobile onClose={() => setMobileOpen(false)} />
            </div>
          </div>
        )}

        <div className="flex min-w-0 flex-1 flex-col">
          <header className="sticky top-0 z-30 flex h-[76px] items-center justify-between border-b border-border bg-card px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open navigation"
                className="rounded-md p-2 text-muted-foreground hover:bg-muted md:hidden"
              >
                <Menu className="size-5" />
              </button>

              <div>
                <p className="text-xs text-muted-foreground">
                  Workspace / Overview
                </p>
                <h1 className="text-sm font-semibold text-foreground">
                  Overview
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-4">
              <button
                aria-label="Search"
                className="rounded-md p-2 text-muted-foreground hover:bg-muted"
              >
                <Search className="size-[18px]" />
              </button>

              <button
                aria-label="Notifications"
                className="relative rounded-md p-2 text-muted-foreground hover:bg-muted"
              >
                <Bell className="size-[18px]" />
                <span className="absolute right-1.5 top-1.5 size-2 rounded-full bg-teal-600 ring-2 ring-card" />
              </button>

              <div className="hidden h-7 w-px bg-border sm:block" />

              <div className="flex items-center gap-2">
                <div className="flex size-8 items-center justify-center rounded-full bg-secondary text-xs font-semibold text-secondary-foreground">
                  SP
                </div>
                <span className="hidden text-sm font-medium sm:block">
                  Admin
                </span>
                <ChevronDown className="hidden size-4 text-muted-foreground sm:block" />
              </div>
            </div>
          </header>

          <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
        </div>
      </div>
    </div>
  );
}
