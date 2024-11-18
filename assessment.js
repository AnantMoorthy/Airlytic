const elements = [
    { type: "div", id: "1", child: [
        { type: "p", id: "7" },
        { type: "p", id: "8" },
    ] },
    { type: "p", id: "2" },
    { type: "span", id: "3" },
    { type: "h1", id: "4" },
    { type: "h2", id: "5" },
    { type: "div", id: "6", child: [
        { type: "div", id: "9", child: [
            { type: "p", id: "10" }
        ] }
    ] },
]; 

/** * * id - 1 * return div * * id - 4 * return h1 * * id - 10 * return p * @param {*} id * @returns */ 

const getElementFeature = (id) => { 

    const allElement = (elements) => {

        for(const element of elements){

                if (element.id === id){

                    return element.type;

                    }
                if (element.child){

                    const result = allElement(element.child);

                    if (result){

                            return result;

                    }

                }

        }

    }
return allElement(elements);
};

console.log(getElementFeature("1"));
console.log(getElementFeature("2"));
console.log(getElementFeature("7"));
