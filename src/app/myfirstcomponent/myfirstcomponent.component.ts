import { Component, OnInit } from '@angular/core';
import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
import { StringifyOptions } from 'querystring';

@Component({
  selector: 'app-myfirstcomponent',
  templateUrl: './myfirstcomponent.component.html',
  styleUrls: ['./myfirstcomponent.component.css']
})
export class MyfirstcomponentComponent implements OnInit {

  number1: number;
  number2 : number;
  operator: string = '';
  
  total:string = '';
  sum : number;
  no1:any;
  test:string ='angular';
  constructor() { }


  

  ngOnInit() {
  }
  Add(){
    // ar1 = this.number1;
    this.sum+= this.number1;
  }

  Sub()
  {
    this.sum = this.number1 - this.number2;
  }

  Mul()
  {
    this.sum = this.number1 * this.number2;
  }

  Divide()
  {
    this.sum = this.number1 / this.number2;
  }
  showCosole(num){
    if(this.operator == ''){
      
    //debugger;
      this.total += num;
      this.number1 = parseInt(this.total);

   }
//     else if (this.operator == '+' )
//      {
//       this.total += num;
//       this.number1 = parseInt(this.total);
//     }
//     else if (this.operator == '-' )
//     {
//      this.total += num;
//      this.number1 = parseInt(this.total);
//    }
//    else if (this.operator == '*' )
//    {
//     this.total += num;
//     this.number1 = parseInt(this.total);
//   }
//   else if (this.operator == '/' )
//   {
//    this.total += num;
//    this.number1 = parseInt(this.total);
//  }
    else{
      this.total += num;
      this.number2 = parseInt(this.total);
    }
 //   this.total += num;
  //  let result= parseInt(this.no1);
    // console.log(result)
    // console.log("1");
  }

  showResult(){
    if(this.operator == '+'){
      let result = this.number1 + this.number2;
      this.total = result.toString();
    }

    else if (this.operator == '-'){

      let result = this.number1 - this.number2;
      this.total = result.toString();
    }

    else if (this.operator == '*'){

      let result = this.number1 * this.number2;
      this.total = result.toString();
    }
    else if (this.operator == '/'){

      let result = this.number1 / this.number2;
      this.total = result.toString();
    }

// debugger;
//     var operator = '+';
//     switch (operator){
//       case "A" :{
//         let result = this.number1 + this.number2;
//         this .total =result.toString();
//       }
//       operator = '-';
//       case "B" :
//       {
//          let result = this.number1 - this.number2; 
//          this.total = result.toString();
//       }

//       operator = '*';
//       case "C":{
//          let result = this.number1 * this.number2;
//          this.total = result.toString();
//       }

//       operator = '/';

//       case "D" :{

//         let result = this.number1 / this.number2;
//         this.total = result.toString();
//       }

//     }

 }


  addOperator(operator){
      this.operator = operator;
      this.total = '';
  }
}

