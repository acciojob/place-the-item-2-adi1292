//your code here
.holder {
    display: flex;
    flex-direction: row;      
    justify-content: center;  
    align-items: center;     
    flex-wrap: wrap;          /* If more items are added, they move to next row */
}

.item {
    width: 100px;
    height: 100px;
    color: white;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.item:nth-child(1) {
    background: green;
}

.item:nth-child(2) {
    background: red;
}

.item:nth-child(3) {
    background: blue;
}

