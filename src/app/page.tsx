
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
      <h1>Supplier Proof dashboard</h1>
    </AppShell>
  );
}
