const reason = {
    TRAVAIL: 1,
    ACHATS: 2,
    SANTE: 3,
    FAMILLE: 4,
    HANDICAP: 5,
    SPORT_ANIMAUX: 6,
    CONVOCATION: 7,
    MISSIONS: 8,
    ENFANTS: 9
};

const myReason = reason.ACHATS;

class Person {
    constructor(firstname, lastname, birthday, placeofbirth, address, city, zipcode, reasonId) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthday = birthday;
        this.placeofbirth = placeofbirth;
        this.address = address;
        this.city = city;
        this.zipcode = zipcode;
        this.reasonId = reasonId;
    }

    fillForm() {
        $('#field-firstname').value = this.firstname;
        $('#field-lastname').value = this.lastname;
        $('#field-birthday').value = this.birthday;
        $('#field-placeofbirth').value = this.placeofbirth;
        $('#field-address').value = this.address;
        $('#field-city').value = this.city;
        $('#field-zipcode').value = this.zipcode;

        let currentDate = new Date();
        currentDate.setMinutes(currentDate.getMinutes() + 10);

        let currentMinutes = currentDate.getMinutes();

        if (currentMinutes < 10) {
            currentMinutes = '0' + currentMinutes;
        }

        let currentTime = currentDate.getHours() + ':' + currentMinutes;

        $('#field-datesortie').valueAsDate = currentDate;
        $('#field-heuresortie').value = currentTime;
        $('#checkbox-' + this.getReason()).checked = true;
    }

    getReason() {
        switch (this.reasonId) {
            case 1:
                return 'travail';
                break;
            case 2:
                return 'achats';
                break;
            case 3:
                return 'sante';
                break;
            case 4:
                return 'famille';
                break;
            case 5:
                return 'handicap';
                break;
            case 6:
                return 'sport_animaux';
                break;
            case 7:
                return 'convocation';
                break;
            case 8:
                return 'missions';
                break;
            case 9:
                return 'enfants';
                break;
            default:
                break;
        }
    }
}

const pEtienne = new Person(
    'Etienne',
    'TRAN',
    '21/12/1995',
    'Villeneuve Saint Georges',
    '95 A Avenue de la République',
    'Montgeron',
    '91230',
    myReason
);

const pCamille = new Person(
    'Camille',
    'GOMES',
    '01/11/1997',
    'Dourdan',
    '95 A Avenue de la République',
    'Montgeron',
    '91230',
    myReason
);

let pArray = [pCamille, pEtienne];

pArray.forEach(element => {
    element.fillForm();
    $('#generate-btn').click();
    $('#cleardata').click();
});
