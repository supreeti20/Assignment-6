let arrobj=[
    {
       name:'Supreeti',
       email:'supreetipattnaik@gamil.com',
       phone:'8280330423',
       no_of_times_shopped:5,
       purchase_history:[
        {
           date_of_purchase:'30/06/2022',
           item_purchased:[
            {
                product_name:'laptop',
                product_price:65000
            },
            {
                product_name:'mobile',
                product_price:30000
            },
           ] 
        },
        {
            date_of_purchase:'25/06/2022',
            item_purchased:[
                {
                    product_name:'fan',
                    product_price:8000
                },
            ]
        },
        {
            date_of_purchase:'20/06/2022',
            item_purchased:[
                {
                    product_name:'juicer',
                    product_price:7000
                },
                {
                    product_name:'ac',
                    product_price:40000
                },
            ]
        },
       ]
    },
    
    {
        name:'Ayush',
        email:'ayush@gamil.com',
        phone:'9765432189',
        no_of_times_shopped:4,
        purchase_history:[
            {
                date_of_purchase:'01/07/2022',
                item_purchased:[
                    {
                        product_name:'mixer',
                        product_price:7000
                    },
                    {
                        product_name:'fan',
                        product_price:4000
                    },
                ] 
            },
            {
                date_of_purchase:'25/06/2022',
                item_purchased:[
                    {
                        product_name:'mobile',
                        product_price:25000
                    },
                ]
            },
            {
                date_of_purchase:'15/06/2022',
                item_purchased:[
                    {
                        product_name:'ac',
                        product_price:35000
                    },
                    
                ]
            }
        ]
    },
        
    {
        name:'Sonali',
        email:'sonali@gamil.com',
        phone:'7973456781',
        no_of_times_shopped:6,
        purchase_history:[
                {
                   date_of_purchase:'05/07/2022',
                   item_purchased:[
                    {
                        product_name:'laptop',
                        product_price:20000
                    },
                    {
                        product_name:'mobile',
                        product_price:15000
                    },
                   ] 
                },
                {
                    date_of_purchase:'30/06/2022',
                    item_purchased:[
                        {
                            product_name:'ac',
                            product_price:25000
                        },
                    ]
                },
                {
                    date_of_purchase:'5/06/2022',
                    item_purchased:[
                        {
                            product_name:'mixer',
                            product_price:5000
                        },
                        {
                            product_name:'power bank',
                            product_price:2500
                        },
                    ]
                },
                {
                    date_of_purchase:'30/05/2022',
                    item_purchased:[
                        {
                            product_name:'aquaguard',
                            product_price:10000
                        },
                    ]
                }
        ]
    },
    {
        name:'Nitin',
        email:'nitin@gamil.com',
        phone:'7278985556',
        no_of_times_shopped:3,
        purchase_history:[
            {
                date_of_purchase:'10/07/2022',
                item_purchased:[
                    {
                        product_name:'mobile',
                        product_price:60000
                    },
                    {
                        product_name:'laptop',
                        product_price:850000
                    },
                ] 
            },
            {
                date_of_purchase:'05/06/2022',
                item_purchased:[
                    {
                        product_name:'tv',
                        product_price:50000
                    },
                ]
            }
            
        ]
    },
    {
        name:'Anuska',
        email:'anuska@gamil.com',
        phone:'7070982376',
        no_of_times_shopped:5,
        purchase_history:[
            {
                date_of_purchase:'25/06/2022',
                item_purchased:[
                    {
                        product_name:'fan',
                        product_price:4000
                    },
                    {
                        product_name:'mixer',
                        product_price:3000
                    },
            ] 
            },
            {
                date_of_purchase:'01/06/2022',
                item_purchased:[
                    {
                        product_name:'tv',
                        product_price:25000
                    },
                ]
            },
            {
                date_of_purchase:'25/05/2022',
                item_purchased:[
                    {
                        product_name:'ac',
                        product_price:25000
                    },
                    {
                        product_name:'mobile',
                        product_price:15000
                    },
                ]
            },
        ]
    }
]

arrobj.forEach((value,index) => {
    let{name,email,phone,purchase_history}= value;
    console.log(name,email,phone,purchase_history[0]);

})

let filteredArr =arrobj.filter(item=>(no_of_times_shopped >= 5))
console.log(filteredArr);
let sum=0;
for(let i=0 ; i<arrobj.length;i++){
    for(let j=0;j<arrobj[i].purchase_history.length;j++){
        for(let k=0;k<arrobj[i].purchase_history[j].item_purchased.length;k++){
            sum=sum+arrobj[i].purchase_history[j].item_purchased[k].product_price
        }
    }
    console.log(`${arrobj[i].name} - ${sum}`);
    sum=0;
}
