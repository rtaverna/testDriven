const { expect } = require('chai');
const wrap = require('./wrap');
const result=`Lorem ipsum dolor\nsit eu amet, elit na\nmagna sem amet nulla\nvel purus ac ligula.`
 describe('wrap',()=>{
    it('Returns empty string if the sent string was empty',()=>{
       expect(wrap("",10)).to.equal("");
    });
    it('Returns correct strinng if length is  lower or equal to the integer sent',()=>{
      expect(wrap("Lorem ipsum dolor",20)).to.equal("Lorem ipsum dolor");
    });
    it(' Returns the string, but with line breaks inserted at just the right places to make sure that no line is longer than the column number.',()=>{
      expect(wrap("Lorem ipsum dolor sit eu amet, elit na magna sem amet nulla vel purus ac ligula.", 20)).to.equal(result)
    })

 });
