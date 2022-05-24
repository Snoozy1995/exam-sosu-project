import Shepherd from 'shepherd.js';

export class ViewCitizenTourService{
  tour:Shepherd.Tour;
  constructor(){
    this.tour = new Shepherd.Tour({
      defaultStepOptions: {
        cancelIcon: {
          enabled: true
        },
        classes: 'tourClass',
        scrollTo: { behavior: 'smooth', block: 'center' }
      },useModalOverlay:true
    });

    this.tour.addStep({
      title: 'Guide til lærerportalen - Borger templates',
      text: `Velkommen til lærerportalen! Denne guide er beregnet til nye brugere, du kan med fordel følge med og få et overblik.`,
      buttons: [
        {
          action() { return this.next(); },
          text: 'Næste trin'
        }
      ],
    });


    this.tour.addStep({
      title: 'Borger information',
      text: `Her ser du de helt generelle informationer som borgeren har.\
      ..`,
      attachTo: { element: '#tutorialCitizenInfo', on: 'bottom' },
      buttons: [
        {
          action() { return this.back(); },
          classes: 'shepherd-button-secondary',
          text: 'Tilbage'
        },
        {
          action() { return this.next(); },
          text: 'Næste trin'
        }
      ],
    });


    this.tour.addStep({
      title: 'Andet information',
      text: `I højre side kan du blandt andet se tilhørende dokumenter samt tilføje nye ved brug af upload knappen.\
      ..`,
      attachTo: { element: '#tutorialRightSide', on: 'bottom' },
      buttons: [
        {
          action() { return this.back(); },
          classes: 'shepherd-button-secondary',
          text: 'Tilbage'
        },
        {
          action() { return this.next(); },
          text: 'Næste trin'
        }
      ],
    });

    this.tour.addStep({
      title: 'Tilføj generelle oplysninger',
      text: `Her kan du tilføje information til borgeren ud fra FS3`,
      attachTo: { element: '#tutorialGeneral', on: 'bottom' },
      buttons: [
        {
          action() { return this.back(); },
          classes: 'shepherd-button-secondary',
          text: 'Tilbage'
        },
        {
          action() { return this.next(); },
          text: 'Næste trin'
        }
      ],
    });
    this.tour.addStep({
      title: 'Helbredstilstande',
      text: `Det samme gælder helbredstilstande samt funktionstilstande nedenunder.\
      ..`,
      attachTo: { element: '#tutorialHealth', on: 'bottom' },
      buttons: [
        {
          action() { return this.back(); },
          classes: 'shepherd-button-secondary',
          text: 'Tilbage'
        },
        {
          action() { return this.next(); },
          text: 'Næste trin'
        }
      ],
    });

    this.tour.addStep({
      id:"Mestring",
      //title: 'Tilføj data',
      text: `Lad os prøve at tilføje noget data. Tryk på 'Mestring'\
      ..`,
      attachTo: { element: '.p-listbox-item', on: 'bottom' },
    });

    this.tour.addStep({
      id:"clickBtn",
      //title: 'Tilføj data',
      text: `Tryk på vælg for at gå til næste trin.\
      ..`,
      attachTo: { element: '#tutorialGeneral', on: 'bottom' },
    });


    this.tour.addStep({
      title: 'Borger information',
      text: `Efter du har trykket på vælg, vil du møde dette vindue, i nogle tilfælde vil det se anerledes ud afhængig af hvilken type information du indsætter, lad os gå gennem for denne type...\
      ..`,
      attachTo: { element: '.p-dialog', on: 'top' },
      buttons: [
        {
          action() { return this.next(); },
          text: 'Næste trin'
        }
      ],
    });
    this.tour.addStep({
      title:"Hjælpespørgsmål",
      text:"Du kan se relevante hjælpe spørgsmål her, som kunne være relevante for denne type information...",
      attachTo: { element: '#helpQuestionBtn', on: 'bottom' },
      buttons: [
        {
          action() { return this.back(); },
          classes: 'shepherd-button-secondary',
          text: 'Back'
        },
        {
          action() { return this.next(); },
          text: 'Next'
        }
      ],
    })

    this.tour.addStep({
      title:"Beskrivelse af Mestring",
      text:"Her kan du se en beskrivelse af denne type information, i dette tilfælde mestring...",
      attachTo: { element: '.p-dialog-content .p-card .p-card-body', on: 'bottom' },
      buttons: [
        {
          action() { return this.back(); },
          classes: 'shepherd-button-secondary',
          text: 'Back'
        },
        {
          action() { return this.next(); },
          text: 'Next'
        }
      ],
    })

    this.tour.addStep({
      title:"Input",
      text:"Det er her du udfylder det som du vil tilføje til journalen hvad angår mestring.",
      attachTo: { element: '.p-inputtextarea', on: 'bottom' },
      buttons: [
        {
          action() { return this.back(); },
          classes: 'shepherd-button-secondary',
          text: 'Tilbage'
        },
        {
          action() { return this.next(); },
          text: 'Afslut'
        }
      ],
    })
  }
  start(){
    this.tour.start();
  }
}
