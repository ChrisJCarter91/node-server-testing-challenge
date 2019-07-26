const db = require('../data/dbConfig.js');

const Students = require('./students-model.js');

describe('students model', () => {
    beforeEach(async () => {
        await db('students').truncate();//resets the database - cleans it up 
    });
    // it('db environement set to testing', () => {
    //     expect(process.env.DB_ENV).toBe('testing');
    // })

    describe('instert()', () => {
        it('should insert the student into the db', async () => {
            await Students.insert({ name: 'Chris' }) //using the api
            const students = await db('students')//directly looking into the db
            expect(students).toHaveLength(1)

        })

        it('should insert the student into the db', async () => {
            await Students.insert({ name: 'jeff' }); //using the api
            await Students.insert({ name: 'maks' }); //using the api
            const students = await db('students') // directly looking into the db
            expect(students).toHaveLength(2);
        })
    })

    describe('update()', () => {
        it('should update a student in the db', () => {
            return Students.update(1, { name: 'test' })
                .then(student => {
                    expect(student).toBe(0);
                })
        })
    })

    describe('getAll()', () => {
        it('should get all students in the db', async () => {
            return Students.getAll()
                .then(students => {
                    console.log(students)
                    expect(students).toHaveLength(0)
                });
        })
    })

    describe('findById()', () => {
        it('should get a student by id', () => {
            return Students.findById(1)
                .then(student => {
                    expect(student).toHaveLength(0)
                })
        })
    })

    describe('delete()', () => {
        it('should delete a student by id', () => {
            return Students.remove(1)
                .then(student => {
                    expect(student).toBe(0);
                })
        })
    })

});