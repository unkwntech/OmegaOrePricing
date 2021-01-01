const RefiningYield = 0.817;
const Buyback = 0.8;

function GetMineralPrices()
{
    MineralArray = Object.values(Minerals);

    url = "https://api.evemarketer.com/ec/marketstat/json?";
    for(var i = 0; i < MineralArray.length; i++)
    {
        url += "&typeid=" + MineralArray[i].TypeID;
    }

    $.getJSON(url, {}, function(data)
    {
        for(var i = 0; i < data.length; i++)
        {
            for(var j = 0; j < MineralArray.length; j++)
            {
                if(MineralArray[j].TypeID == data[i].buy.forQuery.types[0])
                {
                    MineralArray[j].Price = data[i].buy.fivePercent;
                }
            }
        }
        UpdateMineralsTable();
        GetOrePrices();
    });
}

function GetOrePrices()
{
    var OrePrice = 0;
    for(var i = 0; i < Ore.length; i++)
    {
        OrePrice = 0;
        for(var j = 0; j < Ore[i].Refined.length; j++)
        {
            OrePrice += parseInt(Ore[i].Refined[j].Type.Price * Ore[i].Refined[j].QTY * RefiningYield * Buyback);
        }

        row = $("<tr></tr>");
        row.append($("<td></td>").append(Ore[i].Name));
        row.append($("<td></td>").append(OrePrice));
        $("#ores").append(row);

        for(var k = 0; k < Ore[i].Varients.length; k++)
        {
            OrePrice = 0;
            for(var j = 0; j < Ore[i].Refined.length; j++)
            {
                OrePrice += parseInt((Ore[i].Refined[j].Type.Price * Ore[i].Varients[k].Bonus) * Ore[i].Refined[j].QTY * RefiningYield * Buyback);
            }

            row = $("<tr></tr>");
            row.append($("<td></td>").append(Ore[i].Varients[k].Name));
            row.append($("<td></td>").append(OrePrice));
            $("#ores").append(row);
        }
        $("#ores").append($("<tr><td></td><td></td></tr>"));
        $("#ores").append($("<tr><td></td><td></td></tr>"));
        $("#ores").append($("<tr><td></td><td></td></tr>"));
    }
}

function UpdateMineralsTable()
{
    MineralArray = Object.values(Minerals);
    for(var i = 0; i < MineralArray.length; i++)
    {
        row = $("<tr></tr>");
        row.append($("<td></td>").append(MineralArray[i].Name));
        row.append($("<td></td>").append(MineralArray[i].Price));
        $("#minerals").append(row);
        
    }
}