import useLabels from "./useLabels";
import {useMemo} from "react";

export default function useItemLabels({ labelNames, auto = true }) {
  const [labels, getLabels] = useLabels({ auto });

  const itemLabels = useMemo(() => {
    return labels.data ? labelNames.split(',').map(name => labels.data[name]) : [];
  }, [labels.data, labelNames]);

  return [
    {
      ...labels,
      data: itemLabels
    },
    getLabels
  ]
}