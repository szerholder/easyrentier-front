<template>
    <div>

        <div class="form-group">
            <label for="exampleFormControlSelect1">Wybierz kamerę:</label>
            
            <select class="form-control" id="exampleFormControlSelect1">
                <option>FLIR E4 WIFI KAMERA TERMOWIZYJNA 80X60</option>
                <option>FLIR C2 KAMERA TERMOWIZYJNA 80X60</option>
                <option>SONEL KT-320 KAMERA TERMOWIZYJNA</option>
                <option>TESTO 855 KAMERA TERMOWIZYJNA </option>
                <option>FLUKE TIS45 KAMERA TERMOWIZYJNA 160X120</option>
            </select>
        </div>


        <div class="form-group">
            <label for="exampleFormControlSelect1">Wybierz miasto:</label>
            <select class="form-control" id="exampleFormControlSelect1">
                <option>Kraków</option>
                <option>Częstochowa</option>
                <option>Warszawa</option>
                <option>Katowice</option>
                <option>Gdańsk</option>
            </select>
        </div>


        <div class="form-group">
            <label for="exampleFormControlTextarea1">Dodatkowe informacje</label>
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>


        <div class="d-flex flex-row-reverse">
            <div><button type="button" class="btn btn-primary">Złóż zlecenie</button></div>
        </div>

    </div>
</template>