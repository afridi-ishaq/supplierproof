
import {
  ArrowUpRight,
  Building2,
  ClipboardCheck,
  FileCheck2,
  FileText,
  Plus,
  Upload,
} from "lucide-react";
import { AppShell } from "@/components/layout/app-shell";

const metrics = [
  {
    label: "Total suppliers",
    value: "—",
    description: "Supplier records will appear here",
    icon: Building2,
  },
  {
    label: "Evidence documents",
    value: "—",
    description: "Uploaded evidence records",
    icon: FileText,
  },
  {
    label: "Pending reviews",
    value: "—",
    description: "Evidence awaiting review",
    icon: ClipboardCheck,
  },
  {
    label: "Verified records",
    value: "—",
    description: "Records with completed review",
    icon: FileCheck2,
  },
];

export default function Home() {
  return (
    <AppShell>
      <div className="mx-auto max-w-[1440px] space-y-8">
        <section className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-medium text-primary">
              SUPPLY CHAIN WORKSPACE
            </p>
            <h2 className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
              Welcome to SupplierProof
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
              Manage supplier relationships, organize evidence, and build
              a clearer picture of your supply chain.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              disabled
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 text-sm font-medium text-muted-foreground opacity-60"
              title="Available after the evidence upload workflow is implemented"
            >
              <Upload className="size-4" />
              Upload evidence
            </button>

            <button
              disabled
              className="inline-flex cursor-not-allowed items-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground opacity-60"
              title="Available after supplier management is implemented"
            >
              <Plus className="size-4" />
              Add supplier
            </button>
          </div>
        </section>

        <section>
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-sm font-semibold">Workspace snapshot</h3>
            <span className="text-xs text-muted-foreground">
              Awaiting initial setup
            </span>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {metrics.map((metric) => {
              const Icon = metric.icon;

              return (
                <div
                  key={metric.label}
                  className="rounded-xl border border-border bg-card p-5 shadow-sm"
                >
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium text-muted-foreground">
                      {metric.label}
                    </p>
                    <div className="flex size-9 items-center justify-center rounded-lg bg-secondary text-primary">
                      <Icon className="size-[18px]" />
                    </div>
                  </div>

                  <p className="mt-5 text-3xl font-semibold tracking-tight">
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {metric.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        <section className="grid gap-5 xl:grid-cols-[1.5fr_1fr]">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-sm font-semibold">Getting started</h3>
                <p className="mt-1 text-xs text-muted-foreground">
                  Your initial workspace setup
                </p>
              </div>
              <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                Foundation
              </span>
            </div>

            <div className="mt-6 space-y-5">
              {[
                {
                  title: "Set up your organization",
                  detail: "Create the organization and its workspace.",
                },
                {
                  title: "Register your suppliers",
                  detail: "Build a structured supplier directory.",
                },
                {
                  title: "Create your evidence library",
                  detail: "Organize documents and their versions.",
                },
                {
                  title: "Review and share evidence",
                  detail: "Establish controlled review and sharing.",
                },
              ].map((step, index) => (
                <div key={step.title} className="flex items-start gap-4">
                  <div className="flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-muted text-xs font-semibold text-muted-foreground">
                    {index + 1}
                  </div>
                  <div>
                    <p className="text-sm font-medium">{step.title}</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="flex items-center gap-2">
              <div className="flex size-9 items-center justify-center rounded-lg bg-[#e1efeb] text-[#167d78]">
                <FileCheck2 className="size-[18px]" />
              </div>
              <div>
                <h3 className="text-sm font-semibold">Evidence integrity</h3>
                <p className="text-xs text-muted-foreground">
                  A core SupplierProof principle
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-4">
              <div className="rounded-lg bg-muted/70 p-4">
                <p className="text-sm font-medium">Versioned evidence</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  Preserve each uploaded version so historical reviews and
                  evidence packs remain traceable.
                </p>
              </div>

              <div className="rounded-lg bg-muted/70 p-4">
                <p className="text-sm font-medium">Controlled access</p>
                <p className="mt-1 text-xs leading-5 text-muted-foreground">
                  Suppliers retain control over reusable evidence and
                  grant buyers access only within defined permissions.
                </p>
              </div>
            </div>

            <div className="mt-5 flex items-center gap-2 text-xs font-medium text-primary">
              Product architecture principles
              <ArrowUpRight className="size-3.5" />
            </div>
          </div>
        </section>

        <footer className="border-t border-border pt-5 text-xs text-muted-foreground">
          SupplierProof · Every supplier. Every claim. Backed by evidence.
        </footer>
      </div>
    </AppShell>
  );
}
