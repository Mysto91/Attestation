const reason = {
    TRAVAIL: 0,
    ACHATS: 1,
    SANTE: 2,
    FAMILLE: 3,
    HANDICAP: 4,
    SPORT_ANIMAUX: 5,
    CONVOCATION: 6,
    MISSIONS: 7,
    ENFANTS: 8
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

        return date.getHours() + ':' + currentMinutes;
    }

    getReason() {
        const reasonArray = [
            'travail',
            'achats',
            'sante',
            'famille',
            'handicap',
            'sport_animaux',
            'convocation',
            'missions',
            'enfants',
        ];

        return reasonArray[this.reasonId];
    }

    setField(selector, value, date = false) {
        if (date) {
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
