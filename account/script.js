"use strict"

// Data NordVPN Account

// Bamer 5K
// Baputih 5K
// Ladaku 1pcs
// Daun Bawang sama Seledri 3K
// Bihun
// Cabe Rawit 10K
// Bawang Goreng ?

const data = [
    {
        id: 1,
        email: "andrewdong8@gmail.com",
        password: "ANDREWFTW"

    },
    {
        id: 2,
        email: "Dozierarms@icloud.com",
        password: "Bulldog9457"

    },
    {
        id: 3,
        email: "eckagay@gmail.com",
        password: "Teofdol99"

    },
    {
        id: 4,
        email: "jorangejuice1523@gmail.com",
        password: "LucaRomp05"

    },
    {
        id: 5,
        email: "camerondotson0424@gmail.com",
        password: "Bfki1102"

    },
    {
        id: 6,
        email: "bsreichenbach@gmail.com",
        password: "Babygirl3"

    },
    {
        id: 7,
        email: "luivee01@gmail.com",
        password: "21852185Gnc"

    },
    {
        id: 8,
        email: "viottishit@gmail.com",
        password: "Farthole"

    },
    {
        id: 9,
        email: "josh.bennett2586@gmail.com",
        password: "Savannah09"

    },
    {
        id: 10,
        email: "jvires2005@yahoo.com",
        password: "Polaris82"

    },
    {
        id: 11,
        email: "joergonzalez.jg@gmail.com",
        password: "Raymond1998"

    },
    {
        id: 12,
        email: "hadi.askari1981@gmail.com",
        password: "Rezvan1363"

    },
    {
        id: 13,
        email: "spiffyslippers@yahoo.com",
        password: "Cakemix12!"

    },
    {
        id: 14,
        email: "jra0412@icloud.com",
        password: "Jenna041205!"

    },
    {
        id: 15,
        email: "ksmith_15@icloud.com",
        password: "Boisestate11"

    },
    {
        id: 16,
        email: "javier-23of@hotmail.com",
        password: "Javier12"

    },
    {
        id: 17,
        email: "dellz2420@yahoo.com",
        password: "Hasel2428$"

    },
    {
        id: 18,
        email: "emilia.dixon19@gmail.com",
        password: "Melmel21!"

    },
    {
        id: 19,
        email: "emilia.dixon19@gmail.com",
        password: "Melmel21!"

    },
    {
        id: 20,
        email: "norahgriggs@gmail.com",
        password: "Nono2005"

    },
    {
        id: 21,
        email: "garethfugl@yahoo.co.uk",
        password: "Oliverfugl1"

    },
    {
        id: 22,
        email: "luhar.ignad@gmail.com",
        password: "R@@huldc1"
    },
    {
        id: 23,
        email: "Puck1980mgp@gmail.com",
        password: "bailey27"
    },
    {
        id: 24,
        email: "thecreatorrwf@gmail.com",
        password: "2qwk2cMe"
    },
    {
        id: 25,
        email: "eawemu@gmail.com",
        password: "#Bryce0515"
    },
    {
        id: 26,
        email: "lusirisfenrir@yahoo.com",
        password: "Toenouti@1"
    },
    {
        id: 27,
        email: "madianne22@outlook.com",
        password: "Roxybuster09"
    },
    {
        id: 28,
        email: "athanasios92@hotmail.com",
        password: "ak101559"
    },
    {
        id: 29,
        email: "benjamindreiswig@gmail.com",
        password: "Baseball3"
    },
    {
        id: 30,
        email: "b_legget@yahoo.com",
        password: "intel160"
    },
    {
        id: 31,
        email: "bloomtarheel@yahoo.com",
        password: "Chloe730"
    },
    {
        id: 32,
        email: "brockn144@gmail.com",
        password: "albertpujols"
    },
    {
        id: 33,
        email: "chrisq444@gmail.com",
        password: "squidge44"
    },
    {
        id: 34,
        email: "clivewhaley176@msn.com",
        password: "jack2401"
    },
    {
        id: 35,
        email: "dsudante@gmail.com",
        password: "Comacchio1"
    },
    {
        id: 36,
        email: "edwardsm86@gmail.com",
        password: "premed86"
    },
    {
        id: 37,
        email: "elinaxoxx@gmail.com",
        password: "bubbles888"
    },
    {
        id: 38,
        email: "ewiehe@gmail.com",
        password: "Booboo20"
    },
    {
        id: 39,
        email: "georgema140@gmail.com",
        password: "25212c92B"
    },
    {
        id: 40,
        email: "gagresta1@live.com",
        password: "Guiseppe2715"
    },
    {
        id: 41,
        email: "gurshawn@gmail.com",
        password: "waheguru"
    }
]

const tbody = document.querySelector('tbody');
const sectionTable = document.querySelector('.table');
const inputSearch = document.querySelector('#search');
let searchInput = '';
let dataTable = '';

data.forEach( ({id, email, password}) => {
    dataTable += `<tr class="data">
                    <td>${id}</td>
                    <td>${email}</td>
                    <td>${password}</td>
                    <td>
                        <input type="checkbox" value="${id}" class="checkbox">
                        <div class="line"></div>
                        <div class="box"></div>
                    </td>
                  </tr>`;
    
    tbody.innerHTML = dataTable;
});    


// Code for Live Search
const liveSearch = function() {
    // trAll.forEach( (e, index) => {
    //     tbody.removeChild(trAll[index]);
    // });
    dataTable = '';

    data
        // Filter datanya
        .filter( ({email}) => {
            return email.includes(searchInput);
        })
        // Looping Data JSON nya
        .forEach( ({id, email, password}, index) => {
            console.log(index+1);
            // Masukkan datanya ke dalam Template Literal
            dataTable += `<tr>
                            <td>${id}</td>
                            <td>${email}</td>
                            <td>${password}</td>
                            <td>
                                <input type="checkbox" value="${id}" class="checkbox">
                                <div class="line"></div>
                                <div class="box"></div>
                            </td>
                        </tr>`;

            

            // Tampilkan ke halaman
            tbody.innerHTML = dataTable;
            const px = document.querySelectorAll('.checkbox');
            console.log(px);

            // Ambil semua .checkboxnya
            // checkbox = '';
            // console.log(checkbox);
            

            // Jika localStorage.getItem(id) sama dengan yang di looping
            // saat ini 
            // Jika ada localStorage.getItem(id) ada pada saat index saat ini
            // if(localStorage.getItem(id) == 'checked'){
            //     checkbox[index].setAttribute('checked', '');
            // }

            // // Looping semua checkboxnya
            // attributes.forEach( (attribute, index) => {
            //     // Jika localStorage pada saat index tertentu sama dengan
            //     // 'checked'
            //     if(localStorage.getItem(index+1) == 'checked'){
            //         // maka .checkboxnya tambahkan atribut checked
            //         attribute.setAttribute('checked', '');
            //     }
            //     console.log(attribute);
            // });
        });

        // Setelah diprint ke HTML semua
        // Kita jalankan pengecekan Always Checked

        // Ambil tagnya
        const attributes = document.querySelectorAll('.checkbox');
        // Looping tagnya
        attributes.forEach( (isi, index) => {
            // Ambil value attributnya
            const attributeValue = isi.getAttribute('value');
            // Jika localStorage punya key yang sama dengan attributeValue
            if(localStorage.getItem(attributeValue)){
                // Maka tambahkan attribute checked
                attributes[index].setAttribute('checked', '');
            }
        });
}


const trData = document.querySelectorAll('.data');
// Ambil seluruh tagnya
let checkbox = document.querySelectorAll('.checkbox');
// Looping semua tagnya
checkbox.forEach( (isi, index) => {
    // Jika localStoragenya sama dengan value pada attribute
    if(localStorage.getItem(index+1)){
        // Maka tambahkan atribute checked
        isi.setAttribute('checked', '');
        trData[index].classList.add('dark-text');
    }
});

// Input search 
inputSearch.addEventListener('input', function(event){
    searchInput = event.target.value;
    // Run List
    liveSearch();
    // console.log(searchInput);
});

// localStorage Study Case
// setItem -> localStorage
// looping data <tr> nya
// let tags = []; // array contains input tag
checkbox.forEach( (data, index1) => {
    // jika ada yang dichecklist
    data.addEventListener('click', function(e){
        let checked = e.target; // ambil tagnya
        let valueChecked = e.target.attributes[1].nodeValue; // tampung value dari checkbox
        console.log(valueChecked);
        console.log(checked);

        // Jika tagnya belum ada attribute checked, maka
        if(checked.getAttribute('checked') != ""){
            // Tambahkan attribute checked
            checked.setAttribute('checked', '');
            // dan buat localStorage bertambah data yang isinya value
            localStorage.setItem(valueChecked, 'checked'); // store data to localStorage
            trData[index1].classList.add('dark-text');
        } else if(checked.getAttribute('checked') == "") {
            checked.removeAttribute('checked');
            localStorage.removeItem(valueChecked);
            trData[index1].classList.remove('dark-text');
            // loop all checkbox
            // checkbox.forEach( (input, index) => {
            //     if(checkbox[index].getAttribute('checked') == ""){
            //         // localStorage.setItem(`${index}`, 'checked');
            //         checked.removeAttribute('checked');
            //     }else {
            //         localStorage.removeItem(valueChecked);
            //     }
            // })
            // if(data.getAttribute('checked') == ""){
            //     localStorage.removeItem('checked');
            // } else {
            //     localStorage.setItem('checked', 'checked');
            // }
            console.log(checked);
        }
        // console.log(data);
        // console.log(index);

        // console.log(checked);
        // console.log(tags);

        // checked.addEventListener('click', function(e){
        //     const attr = e.target;
        //     console.log(`attr: ${attr}`);
        //     if(checked.getAttribute('checked')){
        //         checked.removeAttribute('checked');
        //     }
        // });
        
        
        // localStorage.setItem("input", checked);
        
    });
});
// jika ada sebuah data yang dichecklist -> maka simpan ke localStorage
// trAll.
// tiap 1 data berisi satu item localStorage