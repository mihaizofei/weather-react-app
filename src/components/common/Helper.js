class Helper {
    getConditionClassName(apiConditionName) {
        switch (apiConditionName) {
            case 'partlyCloudy':
                return 'partly-cloudy-day';
            case 'clear': 
                return 'clear-day';
            case 'thunderstorm':
                return 'thunderstorm-day';
            case 'rain':
                return 'rain-day';
            case 'wind':
                return 'wind-day';
            default:
                return '';
        }
    }
}

export default new Helper();