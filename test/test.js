QUnit.test('Testing calculating grades with several sets of inputs',function(assert){
    assert.equal(testingfunc(1,1,1),1,'passed with values with in range of grades as 1,1,1 output should be 1');
    assert.equal(testingfunc(4,4,4),4,'tested with values with in range of grades as 4,4,4 output should be 4');
    assert.equal(testingfunc(7,8),0,'passed with only two values');
    assert.equal(testingfunc(-1,3,4),0,'passed with one negative value');
    assert.equal(testingfunc(),0,'passed with no values');
});