import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <div className="flex h-screen items-center justify-center gap-4 flex-col">
      <Button variant="primary">primary123</Button>
      <Button variant="destructive">destructive</Button>
      <Button variant="outline">outline</Button>
      <Button variant="secondary">secondary</Button>
      <Button variant="ghost">ghost</Button>
      <Button variant="muted">muted</Button>
      <Button variant="teritary">teritary</Button>
      <Button variant="primary" size="sm">
        small
      </Button>
      <Button variant="primary" size="lg">
        large
      </Button>
      <Input />
    </div>
  );
}
