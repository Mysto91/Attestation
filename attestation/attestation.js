class Person {
    constructor(firstname, lastname, birthday, placeofbirth, address, city, zipcode) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.birthday = birthday;
        this.placeofbirth = placeofbirth;
        this.address = address;
        this.city = city;
        this.zipcode = zipcode;
    }

    fillForm() {
        $('#field-firstname').value = this.firstname;
        $('#field-lastname').value = this.lastname;
        $('#field-birthday').value = this.birthday;
        $('#field-placeofbirth').value = this.placeofbirth;
        $('#field-address').value = this.address;
        $('#field-city').value = this.city;
        $('#field-zipcode').value = this.zipcode;

        var currentDate = new Date();
        currentDate.setMinutes(currentDate.getMinutes() + 10);
    
        var currentMinutes = currentDate.getMinutes();
    
        if (currentMinutes < 10) {
            currentMinutes = '0' + currentMinutes;
        }
    
        var currentTime = currentDate.getHours() + ':' + currentMinutes;
    
        $('#field-datesortie').valueAsDate = currentDate;
        $('#field-heuresortie').value = currentTime;
        $('#checkbox-achats').checked = true;
    }
}

const pEtienne = new Person(
    'Etienne',
    'TRAN',
    '21/12/1995',
    'Villeneuve Saint Georges',
    '95 A Avenue de la République',
    'Montgeron',
    '91230'
);

const pCamille = new Person(
    'Camille',
    'GOMES',
    '01/11/1997',
    'Dourdan',
    '95 A Avenue de la République',
    'Montgeron',
    '91230'
);

var pArray = [pCamille, pEtienne];

pArray.forEach(element => {
    element.fillForm();
    $('#generate-btn').click();
    $('#cleardata').click();
});
