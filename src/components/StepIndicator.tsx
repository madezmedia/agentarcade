interface StepIndicatorProps {
  labels: string[];
  currentStep: number;
  totalSteps: number;
}

export default function StepIndicator({ labels, currentStep, totalSteps }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-between relative mb-12">
      <div className="absolute top-4 left-0 right-0 h-0.5 bg-border z-0" />
      <div
        className="absolute top-4 left-0 h-0.5 z-10 transition-all duration-500 ease-out"
        style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%`, background: "var(--color-accent)" }}
      />
      {labels.map((label, i) => {
        const stepNum = i + 1;
        const isActive = stepNum === currentStep;
        const isDone = stepNum < currentStep;
        return (
          <div key={label} className="flex flex-col items-center gap-2 relative z-20">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-all duration-300 ${
                isDone || isActive ? "text-white" : "bg-border text-muted"
              }`}
              style={{ background: isDone || isActive ? "var(--color-accent)" : undefined }}
            >
              {isDone ? (
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                  <path d="M6 10l3 3 5-6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              ) : (
                stepNum
              )}
            </div>
            <span className={`eyebrow ${isActive ? "text-fg font-semibold" : ""}`}>
              {label}
            </span>
          </div>
        );
      })}
    </div>
  );
}
