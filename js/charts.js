/**
 * Created by 87892 on 2016/10/21.
 */
function myLineChart(id,mydate,mydata) {

    var myChart = echarts.init(document.getElementById(id));


    var option = {
    	
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data:['营业额']
        },
        dataZoom: [
            {
                show: true,
                realtime: true,
                start: 80,
                end: 100
            },
            {
                type: 'inside',
                realtime: true,
                start: 80,
                end: 100
            }
        ],
        xAxis:  {
            type: 'category',
            boundaryGap: false,
            data: mydate
        },
        yAxis: {
            type: 'value',
            axisLabel: {
                formatter: '{value} 元'
            },
            scale:true
        },
        series: [
            {
                name:'营业额',
                type:'line',
                data:mydata,
                markPoint: {
                    data: [
                        {type: 'max', name: '最大值'},
                        {type: 'min', name: '最小值'}
                    ]
                },
                markLine: {
                    data: [
                        {type: 'average', name: '平均值'}
                    ]
                }
            }
        ]
    };

    myChart.setOption(option);

    return myChart;

}

function myPieChart(id,mydata,mylegend){
	var myChart = echarts.init(document.getElementById(id));

	var piedata = [];
	var len = mydata.length;

	for (var i  = 0 ;i<len;i++){
		piedata[i]={
			value:mydata[i],
			name:mylegend[i]
		};
	}

	option = {
		    title : {
		        text: '客栈入住情况',
		        x:'center'
		    },
		    tooltip : {
		        trigger: 'item',
		        formatter: "{a} <br/>{b} : {c} ({d}%)"
		    },
		    legend: {
		        orient: 'vertical',
		        left: 'left',
		        data: ['入住','预定','空闲']
		    },
		    series : [
		        {
		            name: '访问来源',
		            type: 'pie',
		            radius : '55%',
		            center: ['50%', '60%'],
		            data:piedata,
		            itemStyle: {
		                emphasis: {
		                    shadowBlur: 10,
		                    shadowOffsetX: 0,
		                    shadowColor: 'rgba(0, 0, 0, 0.5)'
		                }
		            }
		        }
		    ]
		};
	myChart.setOption(option);

    return myChart;

}

function myBarChart(id){
    var myChart = echarts.init(document.getElementById(id));


    var xAxisData = [
            '08:10','08:20','08:30'
            ,'08:40','08:50','09:00'
            ,'09:10','09:20','09:30'
            ,'09:40','09:50','10:00'
            ,'10:10','10:20','10:30'
            ,'10:40','10:50','11:00'
            ,'11:10','11:20','11:30'
            ,'11:40','11:50','12:00'
            ,'12:10','12:20','12:30'
            ,'12:40','12:50','13:00'
            ,'13:10','13:20','13:30'
            ,'13:40','13:50','14:00'
            ,'14:10','14:20','14:30'
            ,'14:40','14:50','15:00'
            ,'15:10','15:20','15:30'
            ,'15:40','15:50','16:00'
            ,'16:10','16:20','16:30'
            ,'16:40','16:50','17:00'
            ,'17:10','17:20','17:30'
            ,'17:40','17:50','18:00'
            ,'18:10','18:20','18:30'
            ,'18:40','18:50','19:00'
            ,'19:10','19:20','19:30'
            ,'19:40','19:50','20:00'
            ,'20:10','20:20','20:30'
            ,'20:40','20:50','21:00'
            ,'21:10','21:20','21:30'
            ,'21:40','21:50','22:00'];

    var data1 = [
        749,565,815
        ,945,29,437
        ,602,236,342
        ,568,261,6
        ,951,142,43
        ,662,813,352
        ,943,916,291
        ,100,189,599
        ,116,774,771
        ,571,713,226
        ,326,851,247
        ,127,513,213
        ,622,345,229
        ,612,816,343
        ,970,281,698
        ,637,873,311
        ,864,589,340
        ,222,598,521
        ,220,596,921
        ,212,790,273
        ,50,627,628
        ,489,466,831
        ,177,289,553
        ,197,650,895
        ,772,16,814
        ,205,705,630
        ,458,311,657
        ,817,852,381];

    var title = '今日步数详情';

    option = {
        title: {
            text: title,
            x:'center',
            textStyle:{
                fontWeight:300
            }

        },
        legend: {
            data: ['步数'],
            top:'30px',
            x:'center'
        },
        tooltip:{},
        xAxis: {
            data: xAxisData,
            silent: false,
            splitLine: {
                show: false
            }
        },
        yAxis: {
            name:'步数/步'
        },
        series: [{
            name: '步数',
            type: 'bar',
            data: data1,
            itemStyle:{
                normal:{
                    color:'#DE7E73'
                }
            },
            animationDelay: function (idx) {
                return idx * 10;
            }
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 5;
        }
    };
    myChart.setOption(option);

    return myChart;

}

function historyBarChart(id){
    var myChart = echarts.init(document.getElementById(id));


    var xAxisData = [
        '2017-03-15','2017-03-16','2017-03-17'
        ,'2017-03-18','2017-03-19','2017-03-20'
        ,'2017-03-21','2017-03-22','2017-03-23'
        ,'2017-03-24','2017-03-25','2017-03-26'
        ,'2017-03-27','2017-03-28','2017-03-29'
        ,'2017-03-30','2017-03-31','2017-04-01'
        ,'2017-04-02','2017-04-03','2017-04-04'
        ,'2017-04-05','2017-04-06','2017-04-07'
        ,'2017-04-08','2017-04-09','2017-04-10'];

    var data1 = [
        8.38,9.98,7.73
        ,1.58,8.84,2.00
        ,6.71,3.59,8.74
        ,3.37,8.69,4.50
        ,2.08,4.96,0.89
        ,8.58,2.54,0.71
        ,0.52,4.12,0.29
        ,6.54,5.37,0.10
        ,5.76,4.05,5.11];

    var title = '历史运动距离';

    option = {
        title: {
            text: title,
            x:'center'

        },
        legend: {
            data:['距离'],
            top:'30px',
            x:'center'
        },
        tooltip:{},

        dataZoom: [
            {
                show: true,
                realtime: true,
                start: 40,
                end: 100
            },
            {
                type: 'inside',
                realtime: true,
                start: 40,
                end: 100
            }
        ],
        xAxis: {
            data: xAxisData,
            silent: false,
            splitLine: {
                show: false
            }
        },
        yAxis: {
            name:'距离/千米'
        },
        series: [{
            name:'距离',
            type: 'bar',
            data: data1,

            itemStyle:{
                normal:{
                    color:'#DE7E73'

                }
            },

            animationDelay: function (idx) {
                return idx * 10;
            }
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 5;
        }
    };
    myChart.setOption(option);

    return myChart;

}

function achieveBarChart(id){
    var myChart = echarts.init(document.getElementById(id));


    var xAxisData = [
        '2017-03-15','2017-03-16','2017-03-17'
        ,'2017-03-18','2017-03-19','2017-03-20'
        ,'2017-03-21','2017-03-22','2017-03-23'
        ,'2017-03-24','2017-03-25','2017-03-26'
        ,'2017-03-27','2017-03-28','2017-03-29'
        ,'2017-03-30','2017-03-31','2017-04-01'
        ,'2017-04-02','2017-04-03','2017-04-04'
        ,'2017-04-05','2017-04-06','2017-04-07'
        ,'2017-04-08','2017-04-09','2017-04-10'];

    var data1 = [
        11077,9419,18612
        ,14558,10359,16740
        ,17296,5627,5280
        ,9366,2793,8450
        ,18648,10865,12631
        ,3470,10761,2585
        ,10557,18069,5742
        ,5221,13004,9814
        ,558,15852,11772];

    var title = '历史步数达标情况';

    option = {
        title: {
            text: title,
            subtext:'　　　　　　　　　　　　　12000步达标',
            x:'center'

        },
        legend: {
            data:['步数'],
            top:'27px'

        },
        tooltip:{},
        dataZoom: [
            {
                show: true,
                realtime: true,
                start: 60,
                end: 100
            },
            {
                type: 'inside',
                realtime: true,
                start: 60,
                end: 100
            }
        ],
        xAxis: {
            data: xAxisData,
            silent: false,
            splitLine: {
                show: false
            }
        },
        yAxis: {
            name:'步数/步'
        },
        series: [{
            name:'步数',
            type: 'bar',
            data: data1,

            itemStyle:{
                normal:{
                    color:function(params){
                        if(params.data>=12000){
                            return '#DE7E73'
                        }else{
                            return '#ADAAA7'
                        }
                    }

                }
            },

            animationDelay: function (idx) {
                return idx * 10;
            }
        }],
        animationEasing: 'elasticOut',
        animationDelayUpdate: function (idx) {
            return idx * 5;
        }
    };
    myChart.setOption(option);

    return myChart;

}

