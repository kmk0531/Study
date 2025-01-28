export async function getColorSurveys(params = {}){
    const url = new URL("https://learn.codeit.kr/api/color-surveys");
    //append query parameters to the url
    Object.keys(params).forEach((key) =>
        url.searchParams.append(key, params[key])
    );
    //Send a GET request to the API
    const res = await fetch(url);

    if (!res.ok){ //checks vaild HTTP status code (200 ~299)
        throw new Error('데이터를 불러오는데 실패했습니다.');
    }
    //Parse the JSON response
    const data = await res.json();
    return data; //return the parsed data
}

// Function to get details of a specific color survey by its ID
export async function getColorSurvey(id){
    const res = await fetch(`https://learn.codeit.kr/api/color-surveys/${id}`);
    if (!res.ok){
        throw new Error('데이터를 불러오는데 실패했습니다.');
    }
    const data = await res.json();
    return data;
}

export async function createColorSurvey(surveyData){
    const res = await fetch("https://learn.codeit.kr/api/color-surveys", {
        method: 'POST',
        body: JSON.stringify(surveyData),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (!res.ok){
        throw new Error('데이터를 불러오는데 실패했습니다.');
    }

    const data = await res.json();
    return data;
}