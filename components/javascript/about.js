class Button {
    constructor(elem) {
        this.elem = elem;

        //matches the data in the html tag to the button pushed
        this.role = this.elem.dataset.btn;

        // checks to see if 'all' button is pressed. If not it returns the appropriate list of cards
        if(this.role === 'all') {
            this.members = document.querySelectorAll('.team-member');
        } else {
            this.members = document.querySelectorAll(`.team-member[data-img="${this.role}"]`);
        }
        this.members = Array.from(this.members).map(el => new Card(el));

        this.elem.addEventListener('click', () => this.select())

    }

    select() {
        //sort team images by role in website
        const buttonElems = document.querySelectorAll('.about-btn');
        buttonElems.forEach(el => el.classList.remove('active-btn'));

        const team = document.querySelectorAll('.team-member');
        team.forEach(el => el.classList.add('hidden-team'));
        team.forEach(el => el.classList.remove('team-member'));
        
        // setTimeout(()=> {team.forEach(el => el.classList.add('hide'))}, 2000)
        // this.elem.classList.remove('hide')
        this.elem.classList.add('active-btn')
        

        //iterates over the list of dom elements and removes the 'hidden-team' class using a method from the Team class
        this.members.forEach(el => el.selectTeam());
        // if (this.elem.classList.includes('hidden-team')) {
        //     this.elem.style.display = 'none';
        // }
    }
}

class Card {
    constructor(elem) {
        this.elem = elem;
        this.img = this.elem.querySelector('img')
        this.name = this.img.alt;
        this.teamInfo = elem.querySelector('.team-info')

        this.elem.addEventListener('mouseover', () => this.hoverName())
        this.elem.addEventListener('mouseout', () => this.hoverOff())
    }

    selectTeam() {
        // removes 'hidden-team' from the newly selected list
        this.elem.classList.remove('hidden-team');
        this.elem.classList.add('team-member');
    }

    hoverName() {
        this.teamInfo.style.display = 'flex';
       this.teamInfo.textContent = `${this.name}`;
    }
    
    hoverOff() {
        this.teamInfo.style.display = 'none';
    }
        
}



const buttons = document.querySelectorAll('.about-btn');
buttons.forEach(elem => new Button(elem))