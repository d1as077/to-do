const Progress = ({value}) => {
    const getColor = (value) => {
        if (value < 10) return "bg-red-700"
        if (value < 30) return "bg-red-500"
        if (value < 60) return "bg-orange-500"
        if (value < 70) return "bg-yellow-500"
        if (value < 80) return "bg-green-400"
        return "bg-green-600"
    }

    return (
        <div className="w-full bg-[#ffffff75] border !border-gray-400 rounded-full h-4 overflow-hidden">
            <div
                style={{width: `${value}%`}}
                className={`${getColor(
                    value
                )} h-full rounded-full transition-all duration-300`}
            />
        </div>
    )
}

export default Progress
