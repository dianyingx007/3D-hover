#3D hover

模块朝着鼠标进行3D变化

##示例说明：

前置依赖jquery

示例：
		$('#banner').hover3d({
			outer:$('#test')
		});

注意事项：
1. outer和inner参数必须为jquery对象
2. 必须有outer参数,否则无效果

##参数说明：

<table>
	<tr>
		<th>参数</th>
		<th>默认值</th>
		<th>解释</th>
	</tr>
	<tr>
		<td>outer</td>
		<td>`$.noop`</td>
		<td>必须，3d效果的外界容器，默认为空</td>
	</tr>
	<tr>
		<td>inner</td>
		<td>`$(this)`</td>
		<td>3效果的模块，默认为调用该函数的对象</td>
	</tr>
	<tr>
		<td>deg</td>
		<td>10</td>
		<td>最大旋转角度</td>
	</tr>
</table>