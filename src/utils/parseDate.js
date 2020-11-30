import moment from 'moment';

function parseDate(dateString) {

    // Parse Date (obtained in GMT)
    const date = moment(dateString, 'YYYY-MM-DD HH:mm:ss');
    const now = moment();

    if(date.isValid()) {

        const dayDiff = Math.floor(now.diff(date, 'days'));
        const hourDiff = Math.floor(now.diff(date, 'hours'));
        const minuteDiff = Math.floor(now.diff(date, 'minutes'));

        // If more than a day has passed, display long date
        // Else, display minutes, or hours
        if(dayDiff > 1) {
            return date.format('MMM Do, YYYY');
        // } else if(dayDiff === 1) {
            // return 'Yesterday';
        } else if(hourDiff > 1) {
            return hourDiff + ' hours ago';
        } else if(hourDiff === 1) {
            return '1 hour ago';
        } else {
            return minuteDiff + ' minutes ago';
        }

    } else {
        return '?';
    }

}

export default parseDate;