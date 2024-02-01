interface PLanType {
    id: string
    label: string
}

const generatePlanList = (count: number): PLanType[] => {
    return Array.from({ length: count }, (_, index) => ({
        id: `${index + 1}`,
        label: `No.${index < 9 ? " 0" : ""}${index + 1}`,
    }));
};

const PLAN_LIST = generatePlanList(56);