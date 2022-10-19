const { useState, useEffect } = require("react");

const useSum1 = () => {
    const [a, setA] = useState(0);
    const [b, setB] = useState(0);
    const [c, setC] = useState(0);
    const [d, setD] = useState(0);
    const [e, setE] = useState(0);

    const [sum1, setSum1] = useState(0);

    useEffect(() => {
        let result = parseInt(a) + parseInt(b)+ parseInt(c)+ parseInt(d)+ parseInt(e);
        setSum1(result);
    }, [a, b, c, d, e]);

    return [sum1, setA, setB, setC, setD, setE];
};

const useSum2 = () => {
    const [a, set1] = useState(0);
    const [b, set2] = useState(0);
    const [c, set3] = useState(0);
    const [d, set4] = useState(0);
    const [e, set5] = useState(0);

    const [sum2, setSum2] = useState(0);

    useEffect(() => {
        let result = parseInt(a) + parseInt(b)+ parseInt(c)+ parseInt(d)+ parseInt(e);
        setSum2(result);
    }, [a, b, c, d, e]);

    return [sum2, set1, set2, set3, set4, set5];
};

const useSum3 = () => {
    const [a, set6] = useState(0);
    const [b, set7] = useState(0);
    const [c, set8] = useState(0);
    const [d, set9] = useState(0);
    const [e, set10] = useState(0);

    const [sum3, setSum3] = useState(0);

    useEffect(() => {
        let result = parseInt(a) + parseInt(b)+ parseInt(c)+ parseInt(d)+ parseInt(e);
        setSum3(result);
    }, [a, b, c, d, e]);

    return [sum3, set6, set7, set8, set9, set10];
};

const useSum4 = () => {
    const [a, set11] = useState(0);
    const [b, set12] = useState(0);
    const [c, set13] = useState(0);
    const [d, set14] = useState(0);
    const [e, set15] = useState(0);

    const [sum4, setSum4] = useState(0);

    useEffect(() => {
        let result = parseInt(a) + parseInt(b)+ parseInt(c)+ parseInt(d)+ parseInt(e);
        setSum4(result);
    }, [a, b, c, d, e]);

    return [sum4, set11, set12, set13, set14, set15];
};

const useSum5 = () => {
    const [a, set16] = useState(0);
    const [b, set17] = useState(0);
    const [c, set18] = useState(0);
    const [d, set19] = useState(0);
    const [e, set20] = useState(0);

    const [sum5, setSum5] = useState(0);

    useEffect(() => {
        let result = parseInt(a) + parseInt(b)+ parseInt(c)+ parseInt(d)+ parseInt(e);
        setSum5(result);
    }, [a, b, c, d, e]);

    return [sum5, set16, set17, set18, set19, set20];
};

const useSum6 = () => {
    const [a, set21] = useState(0);
    const [b, set22] = useState(0);
    const [c, set23] = useState(0);
    const [d, set24] = useState(0);
    const [e, set25] = useState(0);

    const [sum6, setSum6] = useState(0);

    useEffect(() => {
        let result = parseInt(a) + parseInt(b)+ parseInt(c)+ parseInt(d)+ parseInt(e);
        setSum6(result);
    }, [a, b, c, d, e]);

    return [sum6, set21, set22, set23, set24, set25];
};

const useSum7 = () => {
    const [a, set26] = useState(0);
    const [b, set27] = useState(0);
    const [c, set28] = useState(0);
    const [d, set29] = useState(0);
    const [e, set30] = useState(0);

    const [sum7, setSum7] = useState(0);

    useEffect(() => {
        let result = parseInt(a) + parseInt(b)+ parseInt(c)+ parseInt(d)+ parseInt(e);
        setSum7(result);
    }, [a, b, c, d, e]);

    return [sum7, set26, set27, set28, set29, set30];
};

export {useSum1, useSum2, useSum3, useSum4, useSum5, useSum6, useSum7};