// console.log('prova 1');

const {createApp} = Vue;

createApp ({
    data() {
        return {
            currentContact: 0,
            show: false,
            currentMessage: 0,
            arrayMessage: [],
            msgEntrance: '',
            nameSearch: '',
            nameArray: [],
            contacts: [
                {
                name: 'Michele',
                avatar: './img/avatar_1.jpg',
                visible: true,
                messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Hai portato a spasso il cane?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Ricordati di stendere i panni',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 16:15:22',
                        message: 'Tutto fatto!',
                        status: 'received'
                        }
                    ],
                },
                {
                name: 'Fabio',
                avatar: './img/avatar_2.jpg',
                visible: true,
                messages: [
                        {
                        date: '20/03/2020 16:30:00',
                        message: 'Ciao come stai?',
                        status: 'sent'
                        },
                        {
                        date: '20/03/2020 16:30:55',
                        message: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                        },
                        {
                        date: '20/03/2020 16:35:00',
                        message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                        }
                    ],
                },
                {
                name: 'Samuele',
                avatar: './img/avatar_3.jpg',
                visible: true,
                messages: [
                        {
                        date: '28/03/2020 10:10:40',
                        message: 'La Marianna va in campagna',
                        status: 'received'
                        },
                        {
                        date: '28/03/2020 10:20:10',
                        message: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                        },
                        {
                        date: '28/03/2020 16:15:22',
                        message: 'Ah scusa!',
                        status: 'received'
                        }
                    ],
                },
                {
                name: 'Alessandro B.',
                avatar: './img/avatar_4.jpg',
                visible: true,
                messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                        }
                    ],
                },
                {
                name: 'Alessandro L.',
                avatar: './img/avatar_5.jpg',
                visible: true,
                messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Ricordati di chiamare la nonna',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Va bene, stasera la sento',
                        status: 'received'
                        }
                    ],
                },
                {
                name: 'Claudia',
                avatar: './img/avatar_6.jpg',
                visible: true,
                messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao Claudia, hai novità?',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Non ancora',
                        status: 'received'
                        },
                        {
                        date: '10/01/2020 15:51:00',
                        message: 'Nessuna nuova, buona nuova',
                        status: 'sent'
                        }
                    ],
                },
                {
                name: 'Federico',
                avatar: './img/avatar_7.jpg',
                visible: true,
                messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Fai gli auguri a Martina che è il suo compleanno!',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'Grazie per avermelo ricordato, le scrivo subito!',
                        status: 'received'
                        }
                    ],
                },
                {
                name: 'Davide',
                avatar: './img/avatar_8.jpg',
                visible: true,
                messages: [
                        {
                        date: '10/01/2020 15:30:55',
                        message: 'Ciao, andiamo a mangiare la pizza stasera?',
                        status: 'received'
                        },
                        {
                        date: '10/01/2020 15:50:00',
                        message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                        status: 'sent'
                        },
                        {
                        date: '10/01/2020 15:51:00',
                        message: 'OK!!',
                        status: 'received'
                        }
                    ],
                }
                ],
                
        }
    },
    ////////////////////////////////////////////////////////////////////////////
    methods: {
        thisContact(index) {
            // console.log('ho cliccato qui')
            this.currentContact = index;
            // console.log('ho cliccato qui', index)
        },

        addNewSentMsg() {

            const newSentMsg = {
                date: '10/01/2020 15:51:00',
                message: this.msgEntrance,
                status: 'sent',
            }
            // console.log(this.msgEntrance)

            this.contacts[this.currentContact].messages.push(newSentMsg);
            // console.log(this.contacts[this.currentContact].messages)


            this.msgEntrance = '';

            setTimeout(() => {

                const newReceivedMsg = {
                    date: '10/01/2020 15:51:00',
                    message: 'Push and commit',
                    status: 'received'
                }
    
                this.contacts[this.currentContact].messages.push(newReceivedMsg);
                console.log(this.contacts[this.currentContact].messages)

            }, 1000 );

        },

        searchName() {
            this.nameArray.push(this.nameSearch)
            
            const nameLetter = this.nameArray.slice(-1);
            const letterString = nameLetter.toString()
            console.log(letterString)

            for (let i = 0; i < this.contacts.length; i++) {

                const nameCurrent = this.contacts[i];
                // console.log(nameCurrent)

                const nameConst = nameCurrent.name.toLowerCase()
                // console.log(nameConst)

                if(nameConst.includes(letterString)) {
                    nameCurrent.visible = true
                }  else {
                    nameCurrent.visible = false
                }

            }
        },

        gethours() {



            let hoursMessage = this.messages[currentMessage].date.slice(-1)
            console.log(hoursMessage, this.contacts.messages.date)
        },

        showMenuItem(index) {
            this.currentMessage = index;

            this.show = !this.show;

        },
        

        deleteMessage(index) {
            console.log('click')

            this.currentMessage = index;
            console.log(this.currentMessage);

            this.contacts[this.currentContact].messages.splice(index,1);
            console.log(this.contacts[this.currentContact].messages.splice(index,1))


        }



        // getPropretyInArray() {

        //     const messages = [];

        //     for (let i = messages.length - 1; i >= 0; i--) {
        //         messagesIndex = messages.length[i];
        //         console.log(this.messagesIndex)
        //     }
        // },
        
    },
    ////////////////////////////////////////////////////////////////////////////
    mounted() {
        // console.log('Prova Vue');
        // console.log(this.messages)
        
    }

}).mount ('#app')