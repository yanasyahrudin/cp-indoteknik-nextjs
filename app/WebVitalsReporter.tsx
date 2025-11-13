'use client'
import { useReportWebVitals } from 'next/web-vitals';
type WebVitalsMetric = {
  name: 'FCP' | 'LCP' | 'CLS' | 'FID' | 'TTFB';
  value: number;
};
const handleWebVitals = (metric: WebVitalsMetric) => {
  switch (metric.name) {
    case 'FCP': {
      console.log('First Contentful Paint:', metric.value);
      break;
    }
    case 'LCP': {
      console.log('Largest Contentful Paint:', metric.value);
      break;
    }
    case 'CLS': {
      console.log('Cumulative Layout Shift:', metric.value);
      break;
    }
    case 'FID': {
        console.log('First Input Delay:', metric.value);
        break;
    }
    case 'TTFB': {
        console.log('Time to First Byte:', metric.value);
        break;
    }
  }
}

export default function WebVitalsReporter() {
  useReportWebVitals(handleWebVitals);
  return null;
}