anychart.onDocumentReady(function () {

// // create data
// var data = [
//   {index: "John", val: 10000},
//   {index: "Jake", val: 12000},
//   ["Peter", 13000],
//   ["James", 10000],
//   ["Mary", 9000]
// ];


var data = {
  "red":[151.0,116.0,222.0,422.0,927.0,1164.0,1829.0,114889.0,10318.0,1535.0,728.0,295.0,158.0,93.0,96.0,100.0,146.0,174.0,129.0,90.0,34.0,55.0,58.0,54.0,22.0,31.0,32.0,22.0,72.0,102.0,113.0,166.0,327.0,458.0,1150.0,7459.0,26049.0,50152.0,77175.0,34001.0,50680.0,54806.0,35631.0,33167.0,30438.0,31730.0,26371.0,14883.0,11954.0,9151.0,8040.0,8250.0,7543.0,7371.0,6751.0,6427.0,6343.0,6389.0,6506.0,6507.0,6380.0,5801.0,5498.0,5186.0,4761.0,4200.0,3897.0,3677.0,3351.0,3238.0,3205.0,3042.0,3053.0,3021.0,2821.0,2888.0,2761.0,2513.0,2499.0,2426.0,2350.0,2396.0,2298.0,2361.0,2296.0,2174.0,2111.0,2007.0,1966.0,1888.0,1869.0,1677.0,1679.0,1547.0,1429.0,1432.0,1310.0,1295.0,1342.0,1308.0,1282.0,1233.0,1248.0,1186.0,1201.0,1199.0,1178.0,1180.0,1104.0,1078.0,1025.0,1050.0,993.0,957.0,1033.0,1011.0,937.0,956.0,919.0,984.0,923.0,921.0,970.0,959.0,966.0,906.0,908.0,847.0,800.0,840.0,817.0,805.0,801.0,786.0,831.0,685.0,712.0,727.0,763.0,763.0,770.0,757.0,776.0,765.0,827.0,830.0,837.0,905.0,882.0,992.0,978.0,983.0,1050.0,1028.0,1082.0,1158.0,1126.0,1113.0,1059.0,1179.0,1124.0,1091.0,1079.0,947.0,1006.0,1083.0,1021.0,1016.0,1059.0,1096.0,1070.0,1019.0,1058.0,1052.0,1068.0,1019.0,1015.0,844.0,867.0,708.0,717.0,638.0,589.0,572.0,627.0,629.0,714.0,676.0,716.0,716.0,787.0,778.0,716.0,652.0,608.0,553.0,515.0,524.0,519.0,564.0,536.0,609.0,548.0,535.0,553.0,525.0,531.0,501.0,460.0,435.0,423.0,398.0,387.0,363.0,363.0,385.0,352.0,352.0,371.0,346.0,387.0,392.0,430.0,460.0,511.0,546.0,534.0,675.0,774.0,735.0,517.0,361.0,239.0,164.0,102.0,66.0,40.0,25.0,12.0,10.0,5.0,4.0,2.0,1.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],
  "green":[135.0,117.0,141.0,219.0,604.0,881.0,1600.0,114734.0,10335.0,1777.0,1238.0,580.0,272.0,148.0,129.0,95.0,137.0,194.0,135.0,101.0,29.0,43.0,62.0,53.0,31.0,35.0,20.0,24.0,41.0,77.0,82.0,107.0,167.0,258.0,465.0,899.0,6222.0,22618.0,52601.0,77363.0,33524.0,48992.0,54089.0,36817.0,33844.0,30749.0,32019.0,27219.0,15216.0,11963.0,9229.0,8081.0,8240.0,7575.0,7064.0,6614.0,6115.0,6174.0,6271.0,6337.0,6272.0,6562.0,6166.0,5584.0,5136.0,4950.0,4394.0,4032.0,3664.0,3526.0,3225.0,3191.0,3191.0,3023.0,2946.0,2897.0,2801.0,2878.0,2682.0,2529.0,2407.0,2447.0,2395.0,2399.0,2335.0,2303.0,2240.0,2158.0,2031.0,1995.0,1825.0,1817.0,1739.0,1588.0,1560.0,1513.0,1422.0,1320.0,1303.0,1262.0,1328.0,1298.0,1226.0,1208.0,1194.0,1210.0,1187.0,1210.0,1128.0,1125.0,1067.0,1105.0,1003.0,1029.0,973.0,950.0,949.0,973.0,927.0,937.0,943.0,953.0,841.0,944.0,952.0,992.0,949.0,916.0,859.0,876.0,855.0,818.0,810.0,822.0,807.0,809.0,846.0,714.0,741.0,743.0,765.0,787.0,740.0,761.0,782.0,768.0,777.0,799.0,830.0,840.0,871.0,924.0,908.0,957.0,1049.0,1083.0,1099.0,1170.0,1203.0,1169.0,1165.0,1251.0,1159.0,1167.0,1159.0,1059.0,1032.0,1078.0,1085.0,1098.0,1137.0,1059.0,1072.0,1084.0,1112.0,1117.0,1149.0,1023.0,980.0,864.0,838.0,716.0,708.0,661.0,639.0,680.0,783.0,777.0,747.0,778.0,855.0,765.0,691.0,619.0,581.0,553.0,539.0,539.0,554.0,556.0,611.0,598.0,602.0,590.0,562.0,560.0,528.0,496.0,489.0,474.0,424.0,381.0,395.0,389.0,373.0,414.0,463.0,403.0,436.0,418.0,440.0,429.0,406.0,434.0,447.0,478.0,561.0,583.0,770.0,677.0,385.0,282.0,194.0,128.0,88.0,66.0,39.0,17.0,13.0,8.0,2.0,8.0,4.0,0.0,0.0,1.0,0.0,1.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0,0.0],
  "blue":[156.0,134.0,164.0,256.0,464.0,907.0,1553.0,114284.0,9756.0,2271.0,1737.0,660.0,294.0,171.0,53.0,64.0,80.0,100.0,190.0,185.0,59.0,95.0,72.0,57.0,6.0,25.0,26.0,17.0,33.0,51.0,36.0,78.0,158.0,241.0,266.0,644.0,1891.0,5624.0,8267.0,23217.0,50145.0,78566.0,35649.0,49842.0,53657.0,35930.0,33241.0,29410.0,30537.0,26067.0,14829.0,11989.0,9181.0,8021.0,8415.0,7980.0,7873.0,7324.0,6778.0,6699.0,6922.0,6707.0,6005.0,6045.0,5702.0,5294.0,4741.0,4503.0,4106.0,3730.0,3498.0,3458.0,3281.0,3147.0,3057.0,2929.0,3033.0,2772.0,2563.0,2559.0,2533.0,2472.0,2439.0,2493.0,2392.0,2295.0,2256.0,2116.0,2039.0,1964.0,1837.0,1837.0,1696.0,1694.0,1569.0,1485.0,1416.0,1335.0,1323.0,1333.0,1355.0,1251.0,1242.0,1272.0,1221.0,1222.0,1170.0,1143.0,1168.0,1097.0,1137.0,1044.0,993.0,969.0,986.0,1001.0,957.0,956.0,969.0,969.0,954.0,878.0,993.0,971.0,959.0,924.0,933.0,914.0,896.0,857.0,849.0,829.0,834.0,795.0,800.0,826.0,721.0,770.0,767.0,781.0,798.0,803.0,760.0,826.0,802.0,791.0,821.0,917.0,937.0,936.0,988.0,1042.0,1094.0,1156.0,1193.0,1210.0,1233.0,1196.0,1183.0,1164.0,1311.0,1173.0,1043.0,1137.0,1093.0,1106.0,1080.0,1074.0,1109.0,1068.0,1055.0,1149.0,1095.0,1101.0,1046.0,948.0,862.0,822.0,773.0,736.0,663.0,673.0,632.0,647.0,718.0,775.0,723.0,744.0,771.0,698.0,730.0,708.0,636.0,659.0,583.0,560.0,568.0,548.0,623.0,563.0,599.0,592.0,559.0,577.0,552.0,483.0,474.0,455.0,478.0,398.0,395.0,361.0,400.0,398.0,412.0,431.0,418.0,440.0,417.0,447.0,433.0,402.0,449.0,388.0,457.0,545.0,665.0,513.0,493.0,512.0,377.0,273.0,179.0,121.0,92.0,46.0,42.0,16.0,19.0,7.0,1.0,6.0,2.0,1.0,1.0,0.0,0.0,0.0,0.0,1.0,0.0,0.0,0.0,0.0,0.0,0.0],
}

// create a chart
chart = anychart.column();

// create a column series and set the data
var series = chart.column(data);

// set the container id
chart.container("container");

// initiate drawing the chart
chart.draw();
});