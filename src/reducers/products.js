var initialState = [{
    id : 1,
    name : 'Iphone 7 Plus',
    image : 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72',
    description : 'Sản phẩm do apple sản xuất',
    price : 500,
    inventory : 10,
    rating : 4
},
{
    id : 2,
    name : 'Samsung Galaxy s7',
    image : 'data:image/jpeg;base64,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',
    description : 'Sản phẩm do samsung sản xuất',
    price : 400,
    inventory : 15,
    rating : 3
},
{
    id : 3,
    name : 'Oppo F1s',
    image : 'https://images-na.ssl-images-amazon.com/images/I/71t02iwgwqL._SL1440_.jpg',
    description : 'Sản phẩm do Oppo sản xuất',
    price : 550,
    inventory : 5,
    rating : 5
},
];

const products = (state=initialState, action) =>{
    switch(action.type)
    {
        default: return [...state];
    }
}
export default products;