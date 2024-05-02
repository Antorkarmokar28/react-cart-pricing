import PriceOption from "./PriceOption";

const PriceOptions = () => {
    const gyms = [

        {
            "id": 1,
            "name": "Basic",
            "price": 30,
            "features": ["Cardio machines"]
        },
        {
            "id": 2,
            "name": "Standard",
            "price": 50,
            "features": ["Cardio machines", "Weightlifting area"]
        },
        {
            "id": 3,
            "name": "Premium",
            "price": 70,
            "features": ["Cardio machines", "Weightlifting area", "Group classes"]
        }
    ];

    return (
        <div className="container mx-auto">
            <h2 className="text-5xl text-center my-6">Best price in the town</h2>
            <div className="grid grid-flow-col md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    gyms.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;