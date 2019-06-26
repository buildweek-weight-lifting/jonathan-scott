class Button {
    constructor(elem) {
        this.elem = elem;

        //matches the data in the html tag to the button pushed
        this.role = this.elem.dataset.btn;

        // checks to see if 'all' button is pressed. If not it returns the appropriate list of team members
        if(this.role === 'all') {
            this.members = document.querySelectorAll('.team-member');
        } else {
            this.members = document.querySelectorAll(`.team-member[data-img="${this.role}"]`);
        }
        this.members = Array.from(this.members).map(el => new Team(el));

        this.elem.addEventListener('click', () => this.select())

    }

    select() {
        //sort team images by role in website
        const buttonElems = document.querySelectorAll('.about-btn');
        buttonElems.forEach(el => el.classList.remove('active-btn'));

        const team = document.querySelectorAll('.team-member');
        team.forEach(el => el.style.display = 'none');

        this.elem.classList.add('active-btn')

        //iterates over the list of dom elements and changes the display to flex using a method from the Team class
        this.members.forEach(el => el.selectTeam())
    }
}

class Team {
    constructor(elem) {
        this.elem = elem;
    }

    selectTeam() {
        // changes newly selected list from display none to flex
        this.elem.style.display = 'flex';
    }
        
}



const buttons = document.querySelectorAll('.about-btn');
buttons.forEach(elem => new Button(elem))