import Select from 'react-select';

export default function SelectMenu({handleChoice}) {

    //Set companies for dropdown
    const options = [
        { value: 'DIS', label: 'The Walt Disney Company' },
        { value: 'TSLA', label: 'Tesla' },
        { value: 'PINS', label: 'Pinterest' },
        { value: 'ORCL', label: 'Oracle Corporation' },
        { value: 'BA', label: 'Boeing Company' },
        { value: 'BABA', label: 'Alibaba Holding Group Limited' },
        { value: 'MSFT', label: 'Microsoft Corp' },
        { value: 'GOOGL', label: 'Alphabet Inc' },

    ]

    return (
        <div className="selector">
            <Select options={options}
                    placeholder="Choose the company to retrieve its closing price for the past 30 days..."
                    onChange={handleChoice}
            />
        </div>
    )
}


