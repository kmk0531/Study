import {getColorSurveys, getColorSurvey, createColorSurvey} from './api.js';


// Fetch a list of color surveys with pagination (offset and limit)
const data = await getColorSurveys({offset: 20, limit: 20});
console.log(data);

// Fetch details of a specific color survey by its ID
const data2 = await getColorSurvey(10);
console.log(data2);

// Define a new color survey object to create
const surveyData = {
    mbti: 'ENFJ',
    colorCode: '#ABCD00',
    password: '0000'
};

const data3 = await createColorSurvey(surveyData);
console.log(data3);

// Handle errors when fetching surveys with invalid parameters
try{
    const data = await getColorSurveys({mbti: 'EEEE'});
    console.log(data);
} catch(e){
    console.log('오류가 발생했습니다:');
    console.log(e.message);
}