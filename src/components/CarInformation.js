export default function CarInformation(props) {

    function displayInformation() {
        const infoElements = [];

        for(const key in props.car.information) {
            const val = props.car.information[key]

            infoElements.push(<li key={key}>{key}: {val}</li>)
        }

        return infoElements
    }

    return (
        <div className="card">
            <div className="card-body">
                <h2>{ props.car.make }</h2>
                
                <ul>
                    {displayInformation()}
                </ul>
            </div>
        </div>
    )
}