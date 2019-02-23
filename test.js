function testingfunc(a,b,c){
    grade1 = parseInt(a);
     grade2 = parseInt(b);
    grade3 = parseInt(c);
     var result;
     var sum;
     if(grade1<0 || grade2<0 || grade3<0){
         result = 0;
     }
     else if(grade1>4 || grade2>4 || grade3>4){
         result = 0;
     }
     else if(grade1== null || grade2== null || grade3== null){
         return 0
     }
     else{
        sum = grade1+grade2+grade3;
        result = sum/3;
     }
     return result;
 
 }
QUnit.test('Testing calculating grades with several sets of inputs',function(assert){
    assert.equal(testingfunc(1,1,1),1,'passed with values with in range of grades as 1,1,1 output should be 1');
    assert.equal(testingfunc(4,4,4),4,'tested with values with in range of grades as 4,4,4 output should be 4');
    assert.equal(testingfunc(7,8),0,'passed with only two values output should be 0');
    assert.equal(testingfunc(-1,3,4),0,'passed with one negative value output should be 0');
    assert.equal(testingfunc(0,0,0),0,'passed with no values output should be 0');
});