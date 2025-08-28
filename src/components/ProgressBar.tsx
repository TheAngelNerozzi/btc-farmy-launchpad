import { Progress } from "@/components/ui/progress";

interface ProgressBarProps {
  currentAmount: number;
  targetAmount: number;
  className?: string;
}

export const ProgressBar = ({ currentAmount, targetAmount, className = "" }: ProgressBarProps) => {
  const percentage = Math.min((currentAmount / targetAmount) * 100, 100);
  
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <div className={`space-y-4 ${className}`}>
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">Recaudado</span>
        <span className="text-muted-foreground">Meta</span>
      </div>
      
      <Progress value={percentage} className="h-3 bg-secondary" />
      
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold text-primary">
          {formatCurrency(currentAmount)}
        </div>
        <div className="text-right">
          <div className="text-lg font-semibold">
            {formatCurrency(targetAmount)}
          </div>
          <div className="text-sm text-muted-foreground">
            {percentage.toFixed(1)}% completado
          </div>
        </div>
      </div>
    </div>
  );
};