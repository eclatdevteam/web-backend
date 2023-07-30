
const english = [
    {
        id: 1,
        question : "What is the definition of a simile?",
        options : [
            'A comparison between two things using "like" or "as"',
            'A figure of speech that directly compares two things',
            'A word or phrase used in a non-literal sense'
        ]
    },
    {
        id: 2,
        question : "What is the definition of personification?",
        options : [
            'The attribution of human qualities to an inanimate object or idea',
            'The use of words to create a sensory impression',
            'The repetition of a word or phrase at the beginning of successive clauses or sentences'
        ]
    },
    {
        id: 3,
        question : "What is the definition of hyperbole?",
        options : [
            'Exaggerated statements or claims not meant to be taken literally',
            'A statement or proposition that contradicts itself',
            'The use of a word or phrase to refer to something that it is not, in order to suggest a similarity'
        ]
    },
    {
        id: 4,
        question : "What is the definition of alliteration?",
        options : [
            'The repetition of the same sound or letter at the beginning of consecutive words',
            'The repetition of the same sound or letter at the end of consecutive words',
            'The use of words that sound like what they mean'
        ]
    },
    {
        id: 5,
        question : "What is the definition of a metaphor?",
        options : [
            'A figure of speech that directly compares two things',
            'A comparison between two things using "like" or "as"',
            'A word or phrase used in a non-literal sense'
        ]
    }
];

 const englishAnswers = [1, 0, 0, 0, 0];

 
const math = [
    {
        id: 1,
        question : "What is the slope of a horizontal line?",
        options : [
            '0',
            '1',
            'Undefined'
        ]
    },
    {
        id: 2,
        question : "What is the equation of a line in slope-intercept form?",
        options : [
            'y = mx + b',
            'y = x + b',
            'y = mx - b'
        ]
    },
    {
        id: 3,
        question : "What is the Pythagorean theorem?",
        options : [
            'a^2 + b^2 = c^2',
            'a^2 - b^2 = c^2',
            'a^3 + b^3 = c^3'
        ]
    },
    {
        id: 4,
        question : "What is the equation of a circle?",
        options : [
            '(x - h)^2 + (y - k)^2 = r^2',
            'y = mx + b',
            'y = ax^2 + bx + c'
        ]
    },
    {
        id: 5,
        question : "What is the slope of a vertical line?",
        options : [
            'Undefined',
            '0',
            '1'
        ]
    }
];

const mathAnswers = [0, 0, 0, 0, 2];

const chemistry= [
    {
        id: 1,
        question : "What is the chemical symbol for sodium?",
        options : [
            'Na',
            'So',
            'K'
        ]
    },
    {
        id: 2,
        question : "What is the chemical formula for water?",
        options : [
            'H2O',
            'CO2',
            'NaCl'
        ]
    },
    {
        id: 3,
        question : "What is the pH scale used to measure?",
        options : [
            'Acidity or alkalinity of a solution',
            'Temperature of a solution',
            'Concentration of a solution'
        ]
    },
    {
        id: 4,
        question : "What is an acid?",
        options : [
            'A substance that donates hydrogen ions',
            'A substance that accepts hydrogen ions',
            'A substance that does not affect the hydrogen ion concentration of a solution'
        ]
    },
    {
        id: 5,
        question : "What is the law of conservation of mass?",
        options : [
            'Matter cannot be created or destroyed, only transformed',
            'The total energy of a closed system is constant',
            'The force applied to an object is equal to its mass times its acceleration'
        ]
    }
];

const chemistryAnswers = [0, 0, 0, 0, 0];


const physics = [
    {
        id: 1,
        question : "What is Newton's first law of motion?",
        options : [
            'An object at rest stays at rest and an object in motion stays in motion with the same velocity unless acted upon by a net external force',
            'The acceleration of an object is directly proportional to the net force acting on the object and inversely proportional to its mass',
            'For every action, there is an equal and opposite reaction'
        ]
    },
    {
        id: 2,
        question : "What is the formula for force?",
        options : [
            'F = ma',
            'F = mv^2',
            'F = mgh'
        ]
    },
    {
        id: 3,
        question : "What is the difference between speed and velocity?",
        options : [
            'Speed is a scalar quantity and velocity is a vector quantity',
            'Speed is a vector quantity and velocity is a scalar quantity',
            'Speed and velocity are the same thing'
        ]
    },
    {
        id: 4,
        question : "What is kinetic energy?",
        options : [
            'Energy of motion',
            'Potential energy',
            'Mechanical energy'
        ]
    },
    {
        id: 5,
        question : "What is the law of conservation of energy?",
        options : [
            'Energy cannot be created or destroyed, only transformed or transferred',
            'The total energy of a closed system is constant',
            'The force applied to an object is equal to its mass times its acceleration'
        ]
    }
];

const physicsAnswers = [0, 0, 0, 0, 0];

 module.exports ={
    english,
    englishAnswers,
    math,
    mathAnswers,
    chemistry,
    chemistryAnswers,
    physics,
    physicsAnswers
 }