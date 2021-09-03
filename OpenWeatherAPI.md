# Övning 8.1 - OpenWeather API

I den här uppgiften ska ni hämta uppgifter från ett API och sedan presentera resultatet i en React-app.

## Del 1: De första funktionerna

1. Gör om App.js till en klass genom att rensa allt och klistra in följande kod. Vi gör detta för att vi kommer använda metoder som inte finns tillgängliga per default i funktionella komponenter. Notera att vi har `weatherData` i state. Den här egenskapen är tillgänglig i hela komponenten och kommer att användas för att lagra datan vi från API:et. Notera även att när state uppdateras så re-renderas hela komponenten.

```
import React, { Component } from "react";

export default class App extends Component {
  state = {weatherData: undefined};
  render() {
    return <></>;
  }
}
```

2. Skapa funktionen `componentDidMount() {}`. Det här är en inbyggd funktion i React som körs när komponenten renderats. Detta skiljer sig från konstruktorn som kan köras direkt när koden läses. Logga något roligt för att dubbelkolla att den fungerar!
3. Skapa funktionen `getWeather = async () => {};`. Nyckelorder `async` indikerar att det här en asynkron funktion.
4. Lägg nu in så att `getWeather` körs när komponenten renderas.

## Del 2 - Hämta från API

1. Registera dig på openweathermap.org för att hämta ut din API-nyckel.
2. Studera https://openweathermap.org/current för att se hur din URL ska se ut. Det skulle exempelvis kunna se ut såhär: `api.openweathermap.org/data/2.5/weather?q=gothenburg&appid=123123123123`
3. Skapa två variabler för att lagra staden och API-nyckeln du ska skicka in i requesten.
4. Gör ett call till API:en genom `await fetch()`. Spara detta i `const api_call`. Glöm inte att lägga till ett `https://` innan.
5. Gör om svaret till ett json-objekt via `api_call.json()`. Fundera på varför du måste ha await även här. Kan man dra några slutsatser om .json()-metoden?
6. Du bör skydda din kod med ett try-catch block. Lägg in all asynkron kod i ett sådant block, och logga eventuella fel till konsolen. Notera dock att vanliga fel fångas av API:et. (Den returnar ett objekt {"cod": 404, message: "city not found"} om du skriver in fel stad ex. )
7. JSON-objektet har en egenskap `cod` som visar vilken svarskod vi fick ifrån vår request till servern. En vanlig felkod är 404 som visas om det du requestar inte hittas på servern. Koden 200 betyder att allt gick som planerat. Lägg till en if-sats som kontrollerar om requesten var ok. (`response.cod === 200`) Om requesten inte är ok skriver du: `` alert(`${response.cod}: ${response.message}`); `` Om requesten däremot är ok (kod 200) returnerar du objektet.
8. Testa att lägga `this.getWeather()` i en variabel i `componentDidMount()`. Hur ser den ut?
9. Precis som att `fetch()` och `.json()` var asynkrona är även `this.getWeather()` det. Vi kommer därför behöva göra även `componentDidMount()` asynkron för att kunna hantera svaret från `this.getWeather()`. Gör detta.
10. När vi kan tolka resultatet från `this.getWeather()` kan vi uppdatera state genom this.setState(). Funktionen borde se ut såhär nu:

```
async componentDidMount() {
    const weatherData = await this.getWeather();
    this.setState({
      weatherData: weatherData,
    });
  }
```

11. Vi har nu fått en bra separation-of-concerns med en funktion som hämtar datan, en annan som uppdaterar state:n och render() som kommer rendera våra display-komponenter.
12. Testa att logga `this.state.weatherData` i render(). Den loggas två gånger för att vi tvingar en re-render när vi uppdaterar staten. I den här övningen kommer vi inte lösa det här problemet.

## Del 3 - Skapa en egen komponent

Den här delen är förhoppningsvis inte lika komplicerad och kommer inte ha samma vägledning. Se https://reactjs.org/docs/components-and-props.html om du behöver fräscha upp minnet.

1. Undersök `weatherData` och välj ut några egenskaper som du hade tyckt varit intressanta att visa. Skapa en komponent som visar dessa. Börja med att hårdkoda värden. Styla komponenten med CSS. `import ./myComponent.css` ex.
2. Se nu till att värdena i display-komponenten får sina värden från App.js.

## Bonus - Searchbar

Se om du kan implementera en Searchbar så att du själv kan requesta data. Se https://reactjs.org/docs/forms.html och https://medium.com/@jasminegump/passing-data-between-a-parent-and-child-in-react-deea2ec8e654.

## Bonus 2 - En ikon som ändras (sol/molnigt osv) //använd inte en mega if-else stats det är dåligt
