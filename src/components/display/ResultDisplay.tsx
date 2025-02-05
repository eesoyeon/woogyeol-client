import useThemeStore from '@/store/useThemeStore';
import { useAccordionStore } from '@store/useAccordionStore';

const ResultDisplay = () => {
  const { getSections } = useAccordionStore();
  const { font } = useThemeStore();

  return (
    <div className={`result-layout font-${font}`}>
      {getSections().map((section, index) => {
        if (index == 2 || index == 3) {
          return;
        }
        return <div key={index}>{section}</div>;
      })}
      {getSections()[2]}
      {getSections()[3]}
    </div>
  );
};

export default ResultDisplay;
