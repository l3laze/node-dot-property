/* eslint-env mocha */
'use strict'

const dp = require('../index.js')

const should = require('chai').should()

const baseData = {
  'Something': {
    'Something': {
      'Darkside': {
        'isMagic': true
      },
      'SomethingElse': {
        'SomeSong': 'I forgot the words to'
      }
    },
    'Is.Wrong.With.The.Space.Bar': true
  }
}

let testData

describe('dotProperty', function () {
  beforeEach(function () {
    testData = Object.assign('', baseData)
  })

  afterEach(function () {
    testData = undefined
  })

  describe('#get(obj, path)', function () {
    it('should get a property value for a valid path', function getValid () {
      let val = dp.get(testData, 'Something.Something.Darkside.isMagic')
      val.should.equal(true)
    })

    it('should handle properties with a dot in them', function getValidDotProp () {
      let val = dp.get(testData, 'Something.Is.Wrong.With.The.Space.Bar')
      val.should.equal(true)
    })

    it('should return undefined for an invalid path or prop argument', function getInvalid () {
      let val = dp.get(testData, 'Something.Something.DarkSide.isMagic')
      should.equal(val, undefined)
    })
  })

  describe('#set(obj, path, val)', function () {
    it('should set a property value for a valid path', function setValid () {
      testData = dp.set(testData, 'Something.Something.Darkside.isMagic', false)
      testData.Something.Something.Darkside.isMagic.should.equal(false)
    })

    it('should handle existing properties with a dot in them', function setValidDotProp () {
      testData = dp.set(testData, 'Something.Is.Wrong.With.The.Space.Bar', false)
      testData.Something[ 'Is.Wrong.With.The.Space.Bar' ].should.equal(false)
    })

    it('should create a nonexistent path', function setCreates () {
      testData = dp.set(testData, 'Something.Something.This.Is.A.Long.One', true)
      dp.has(testData, 'Something.Something.This.Is.A.Long.One').should.equal(true)
    })
  })

  describe('#has(obj, path)', function () {
    it('should return true for a valid path', function hasValid () {
      dp.has(testData, 'Something.Something.Darkside.isMagic').should.equal(true)
    })

    it('should handle properties with a dot in them', function hasValidDotProp () {
      dp.has(testData, 'Something.Is.Wrong.With.The.Space.Bar').should.equal(true)
    })

    it('should return false for an invalid path or prop argument', function hasInvalid () {
      dp.has(testData, 'Something.Something.DarkSide.isMagic').should.equal(false)
    })
  })

  describe('#remove(obj, path)', function () {
    it('should remove a valid path', function hasValid () {
      testData = dp.remove(testData, 'Something.Something.Darkside.isMagic')
      dp.has(testData, 'Something.Something.Darkside.isMagic').should.equal(false)
    })

    it('should handle properties with a dot in them', function hasValidDotProp () {
      testData = dp.remove(testData, 'Something.Is.Wrong.With.The.Space.Bar')
      dp.has(testData, 'Something.Is.Wrong.With.The.Space.Bar').should.equal(false)
    })

    it('should do nothing for an invalid path or prop argument', function hasInvalid () {
      let orig = Object.assign(testData)
      testData = dp.remove(testData, 'Something.Something.DarkSide.isMagic')
      JSON.stringify(testData).should.equal(JSON.stringify(orig))
    })
  })
})
