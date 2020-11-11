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
    constructor(firstName, lastName, birthday, placeOfBirth, address, city, zipCode, reasonId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthday = birthday;
        this.placeOfBirth = placeOfBirth;
        this.address = address;
        this.city = city;
        this.zipCode = zipCode;
        this.reasonId = reasonId;
    }

    fillForm() {
        this.setField('firstname', this.firstName);
        this.setField('lastname', this.lastName);
        this.setField('birthday', this.birthday);
        this.setField('placeofbirth', this.placeOfBirth);
        this.setField('address', this.address);
        this.setField('city', this.city);
        this.setField('zipcode', this.zipCode);
        this.setField('datesortie', new Date(), true);
        this.setField('heuresortie', this.getTime(10));
        this.setCheckbox(this.getReason());
    }

    getTime(add = 0) {
        let date = new Date();
        date.setMinutes(date.getMinutes() + add);

        let currentMinutes = date.getMinutes();

        if (currentMinutes < 10)
            currentMinutes = '0' + currentMinutes;

        return date.getHours()  + ':' + currentMinutes;
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
        }
    }

    setField(selector, value, date = false) {
        if(date) {
            $('#field-' + selector).valueAsDate = value;
        } else {
            $('#field-' + selector).value = value;
        }
    }

    setCheckbox(selector) {
        $('#checkbox-' + selector).checked = true;
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

const pArray = [pCamille, pEtienne];

pArray.forEach(p => {
    p.fillForm();
    $('#generate-btn').click();
    $('#cleardata').click();
});
