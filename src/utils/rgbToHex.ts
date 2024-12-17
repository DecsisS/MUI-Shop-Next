export const convertorRGBToHex = (rgb: string) => {
    function componentToHex(c: number) {
        const hex = c.toString(16);
        return hex.length == 1 ? "0" + hex : hex;
    }

    function rgbToHex ([r, g, b] : number[]) {
        return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    const rgbArray = rgb.slice(4, -1).split(',');
    const numberRgbArray = rgbArray.reduce((acc: number[], item: string) => {
        acc.push(Number(item));
        return acc;
    }, [])

    return rgbToHex(numberRgbArray);
}