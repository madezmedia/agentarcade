export default function Footer() {
  return (
    <footer className="border-t border-border mt-24" data-od-id="footer">
      <div className="max-w-content mx-auto px-6 md:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} AgentArcade. All rights reserved.
        </p>
        <p className="text-sm text-muted">
          Find the right AI agent for every job.
        </p>
      </div>
    </footer>
  );
}
