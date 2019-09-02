<template>
    <div>
      <div>
        <img style="width:100%;height: auto;" src="../../assets/img/news_banner.jpg"/>
        <div style="height: 46px;border-bottom: 1px solid #dddddd;">
          <div class="geu-common-auto-width">
              <div style="line-height: 46px; color: #4CAF50; font-size: 16px;">
                <div @click="onReturnHome()"  class="geu-cursor" style="width: 63px; float: left;">
                  <span class="glyphicon glyphicon-home"></span>
                  <span style="color: #787878; margin-left: 10px;">首页 </span>
                </div>

                <div @click="onReturnNews()" class="geu-cursor" style="width: 100px;  float: left;">
                  <i class="el-icon-arrow-right"></i>
                  <span style="color: #787878;">新闻资讯</span>
                </div>
              </div>
          </div>
        </div>
        <div class="geu-common-auto-width row margin-top-40" style="margin-bottom: 50px;">
          <div v-if="newsNum === '1'">
            <div style="border-left: 1px solid #ebebeb; border-right: 1px solid #ebebeb; border-bottom: 1px solid #ebebeb;" class="col-xs-12">
              <div class="col-xs-12">
                <h1 style="font-size: 30px; color: #333333;">中国交通采集技术发展历史与现状</h1>
              </div>
              <div style="margin-bottom: 10px;" class="col-xs-12">
                <span style="font-size: 16px; color: #a3afb7; font-weight: 300!important;">2018-08-25 16:24:15</span>
              </div>
            </div>
            <div style="border-left: 1px solid #ebebeb; border-right: 1px solid #ebebeb; border-bottom: 1px solid #ebebeb;  padding-bottom: 40px" class="col-xs-12">
              <div class="col-xs-12 margin-top-20">
                <div style="line-height: 2; font-size: 16px;">
                  <div class="col-xs-12"><h3>1.前言</h3> </div>
                  <div class="col-xs-12">在2014年8月份北京道路交通安全展览上，一些交通信号控制行业厂家问到我，想了解地磁车辆检测器产品的技术和市场情况，对地磁车辆检测器的使用存有比较多的疑问。于是我连同Tranbbs市场研究部的同事，从最终用户、设计院、研究所、集成商、产品商等几个方向对这一产品的使用状况进行了调研。带着用户众多的疑问，以怀疑的眼光去调研产品的适用性，发现造成目前最终用户“远离或观望”地磁车辆检测器的主要原因一个是：在产品不成熟时过快的随着物联网的火热进行了市场推广，安装了大量的目前看存在缺陷的产品；另外一个原因是停车应用场景中，产品技术成本和客户成本意愿没有形成平衡，以至于一些低端产品被使用，有了诸多失败案例。 </div>
                  <div class="col-xs-12 margin-top-40">智能交通技术框架主要包括交通采集、信息传输、信息处理和信息发布四个部分，交通采集技术是智能交通发展的重要的共性基础技术。根据公安部交通管理研究所统计，“十一五”期间，交通流信息固定采集点由1.6万个增加到7.3万个，交通监控点由9250个增加到5.1万个。根据Tranbbs市场研究成果，2014年与2010年城市智能交通整体市场规模将会翻倍增长，因此初步预测交通流固定采集点也将会有翻倍的增长，达到15万个点左右。</div>
                  <div class="col-xs-12 margin-top-40">从技术类型上来划分，目前市场中比较常见的交通采集技术包括磁频的车辆检测技术、射频的车辆检测技术、视频的车辆检测技术、波频的车辆检测技术、移动型交通数据采集技术等，有的技术类型中又包括几种采集方式。归纳起来目前市场中常用的交通采集方式主要有线圈、视频、地磁、超声波、雷达、红外线、手机移动终端、浮动车、激光等。</div>
                  <div class="col-xs-12"><h3>2. 主要交通采集技术的发展历程</h3> </div>
                  <div class="col-xs-12 margin-top-15"><h4>2.1 感应线圈</h4> </div>
                  <div class="col-xs-12 margin-top-15">1928年，出现了世界上第一台公认的车辆检测器，安装于道路附近的麦克风，需要通过的司机鸣笛来触发设备以检测车辆的经过。这种检测器主要应用于十字路口的信号控制。同一时期，开始使用的另一设备是压感的车辆检测器。直到20世纪60年代，感应线圈被用作为车辆检测器，成为到目前为止使用最广泛的检测系统 </div>
                  <div class="col-xs-12 margin-top-40"><h4>2.2 视频</h4> </div>
                  <div class="col-xs-12 margin-top-15">视频交通检测最初由美国加州在1976年提出，国外早在70年代已经开始视觉提取交通参数研究。20世纪90年代起进入商业化阶段。国内从20世纪90年代开始视频车辆检测技术的研究。 我国智能交通市场最早是使用国外进口产品，主要厂家包括比利时的Traficon、美国ISS公司的autoscope、法国Citilog公司，这些企业仍然活跃在国内市场。国内生产企业主要有成都威路特和动视元等。</div>
                  <div class="col-xs-12 margin-top-40"><h4>2.3 地磁</h4></div>
                  <div class="col-xs-12 margin-top-15">2003年，美国先思有限公司(SENSYS)成立，该公司是全球领先的无线流量检测和综合交通数据系统供应商。2008-2010三年间公司流量采集产品市场得到快速发展，三年同比增长3000%。</div>
                  <div class="col-xs-12 margin-top-15">我国最早使用地磁车辆检测产品是2007年左右的北京快速路二期出入口信号控制项目，大约安装有700个点位左右，由上海中交智能系统工程有限公司提供产品（原技术属秦皇岛保全电子研究所，后通过资本运作获得该项技术产品）。当时的产品外形是圆柱体，每两个为一组。该产品比较多的应用在电子警察、卡口、流量采集和信号控制场景中。2009年前后，国内几家地磁厂商从众多参与者中脱颖而出，包括无锡感知技术有限公司、迈锐数据(北京)有限公司、天津市顺通电子有限公司陆续推出地磁车辆检测器产品。</div>
                  <div class="col-xs-12 margin-top-40">2.4 雷达</div>
                  <div class="col-xs-12 margin-top-15">从1991年起，RTMS（远程交通微波检测器）开始在北美、欧洲和亚洲广泛应用，应用到路口控制系统、高速公路事故检测系统和流量统计中。国内市场中，中国航空技术国际工程公司在开展对外工程承包中，开发引进了RTMS，并对RTMS全套设置和分析软件进行了汉华和配套工作，在2002-2003年北京市二、三环改造过程中得到安装使用。</div>
                  <div class="col-xs-12 margin-top-15">目前在我国智能交通市场活跃的雷达产品厂商主要有美国Wavetronix、RTMS、奥利维亚Olvia、Smartsensor；国内厂商主要有大华、蓝盾光电子、川速微波、合肥文康、上海慧昌等。</div>
                  <div class="col-xs-12 margin-top-40"><h4>3. 各种车辆检测器的比较</h4></div>
                  <div class="col-xs-12 margin-top-15">在众多的交通采集技术中，并没有哪种技术能适用各种交通环境，各自都存在有点和缺点。</div>
                </div>
              </div>
            </div>
            <div style="border-left: 1px solid #ebebeb; border-right: 1px solid #ebebeb; border-bottom: 1px solid #ebebeb; padding-top: 25px; padding-bottom: 15px" class="col-xs-12">
              <div class="col-xs-6">
                <el-button plain>上一页：没有了</el-button>
              </div>
              <div class="col-xs-6 text-right">
                <el-button @click="onNextNews('2')" type="primary" plain>下一页：一分钟科普“数据湖”</el-button>

              </div>
            </div>
          </div>
          <div v-if="newsNum === '2'">
            <div style="border-left: 1px solid #ebebeb; border-right: 1px solid #ebebeb; border-bottom: 1px solid #ebebeb;" class="col-xs-12">
              <div class="col-xs-12">
                <h1 style="font-size: 30px; color: #333333;">一分钟科普“数据湖”</h1>
              </div>
              <div style="margin-bottom: 10px;" class="col-xs-12">
                <span style="font-size: 16px; color: #a3afb7; font-weight: 300!important;">2019-07-12 11:30:10</span>
              </div>
            </div>
            <div style="border-left: 1px solid #ebebeb; border-right: 1px solid #ebebeb; border-bottom: 1px solid #ebebeb;  padding-bottom: 40px" class="col-xs-12">
              <div class="col-xs-12 margin-top-20">
                <div style="line-height: 2; font-size: 16px;">
                  <div class="col-xs-12"><h3>什么是数据湖？</h3> </div>
                  <div class="col-xs-12">数据湖（Data Lake）概念最早由CITO Research Web的CTO Dan Woods 于2011年提出。数据湖简单的说就是一个可以存储大量数据的并行信息系统，可以在不需要另外移动数据的情况下进行数据运算、分析。 </div>
                  <div class="col-xs-12"><h3>数据湖的价值？</h3> </div>
                  <div class="col-xs-12 margin-top-15">目前，人们已经见证了大数据在进行决策制定、降低运营成本、优化产能等方面产生的巨大商业价值。而数据湖是目前大数据分析领域最新最火的概念，很多厂商都声称数据湖是推动和充分利用大数据分析技术的关键。数据湖的设计理念允许将不同来源的数据都集中到一个未经管理的数据湖当中，而不是保持各种独立管理的数据集合，其设计初衷就是为了解决信息孤岛的问题。 </div>
                  <div class="col-xs-12 margin-top-15">数据湖系统将数据集中存储在一个存储盘阵，使得所有数据能够快速积极的响应商业环境和研究目的的变化。同时，数据湖不再局限于结构化或半结构化数据，而是能够对几乎所有类型的数据在不需要预定义模型的情况下进行分析。因此，数据湖能够提供多维度、全方位、实时的数据信息支持，其数据架构体系也更加灵活，扩展性也更强。</div>
                  <div class="col-xs-12 margin-top-40"><h3>数据湖的缺陷？</h3></div>
                  <div class="col-xs-12 margin-top-15">数据湖作为目前还在研发、探索当中的新的数据架构模式，其关注重点一直放在如何保存不同类型的数据，却忽视了如何使用数据以及为什么要使用数据、如何监管数据、如何定义和分类数据，以及如何确保数据安全等问题。具体表现：</div>
                  <div class="col-xs-12 margin-top-15">首先，数据湖中的数据质量难以保证。理论上讲，数据湖可以在不受任何监督或管理的条件下接收任何类型的数据。然而，事实证明，如果不对数据进行合理的定义和维护，那数据湖很快就会变成数据沼泽，因此有效的数据治理是数据湖技术的核心。</div>
                  <div class="col-xs-12 margin-top-15">其次，数据湖存在安全风险。数据在不受内容监管的情况下被放入数据湖当中，而目前的安全防范和访问控制技术仍不成熟，这就意味着很多隐私数据将暴露于风险之下。从企业的角度，安全保护必须贯穿整个数据的生命周期，从接收数据的第一天起就正视安全问题，明确规定可以引入数据湖的数据类型，并制定和及时调整数据湖中的各类数据的使用权限。</div>
                  <div class="col-xs-12 margin-top-40"><h3>如何构建数据湖？</h3></div>
                  <div class="col-xs-12 margin-top-15">综数据湖一般由四部分组成：结构化或非结构化数据源、信息存储系统、数据治理系统、数据分析系统。具体搭建一个有效的数据湖解决方案非常复杂：首先，必须为每个分析用例部署并配置正确的分析系统；然后，为其分配相应的存储；一旦设置环境被创建，则要求数据必须在所有正确的访问权限和管理应用到数据集的情况下加载。</div>
                  <div class="col-xs-12 margin-top-40"><h3>数据湖的愿景？</h3></div>
                  <div class="col-xs-12 margin-top-15">成熟的数据湖将支撑大数据分析成为企业战略的核心组成部分，使得企业能够消除所有业务应用和分析应用之间的壁垒，建立一个全覆盖、单一的企业平台。</div>
                </div>
              </div>
            </div>
            <div style="border-left: 1px solid #ebebeb; border-right: 1px solid #ebebeb; border-bottom: 1px solid #ebebeb; padding-top: 25px; padding-bottom: 15px" class="col-xs-12">
              <div class="col-xs-6">
                <el-button @click="onNextNews('1')" plain>上一页：中国交通采集技术发展历史与现状</el-button>
              </div>
              <div class="col-xs-6 text-right">
                <el-button @click="onNextNews('3')" type="primary" plain>下一页：电销必读：这样打电话，效率更高</el-button>

              </div>
            </div>
          </div>
          <div v-if="newsNum === '3'">
            <div style="border-left: 1px solid #ebebeb; border-right: 1px solid #ebebeb; border-bottom: 1px solid #ebebeb;" class="col-xs-12">
              <div class="col-xs-12">
                <h1 style="font-size: 30px; color: #333333;">电销必读：这样打电话，效率更高</h1>
              </div>
              <div style="margin-bottom: 10px;" class="col-xs-12">
                <span style="font-size: 16px; color: #a3afb7; font-weight: 300!important;">2019-07-12 11:30:10</span>
              </div>
            </div>
            <div style="border-left: 1px solid #ebebeb; border-right: 1px solid #ebebeb; border-bottom: 1px solid #ebebeb;  padding-bottom: 40px" class="col-xs-12">
              <div class="col-xs-12 margin-top-20">
                <div style="line-height: 2; font-size: 16px;">
                  <div class="col-xs-12">电话销售最早起源于美国，是一种投入少产出高的销售方式，电销人员只需一部电话就可以联系终端客户。对于企业来说，这无疑是最减省成本的销售方式之一。 </div>
                  <div class="col-xs-12 margin-top-15">因此，对于电销人员而言，想要提高业绩就要提高拔打电话的效率。举个例子：若一个员工每天打300个电话，大约可以获得10%的意向客户，这10%里有一个可以成交的客户；如果电销人员提高效率，每天拨打1000个电话，那么相应地，其成交的客户也会增多。 </div>
                  <div class="col-xs-12 margin-top-15">如何在有限的时间打更多的电话成了电销人员最关心的问题之一。</div>
                  <div class="col-xs-12 margin-top-15"><img style="" src="../../assets/img/news1.jpg"/></div>
                  <div class="col-xs-12 margin-top-15">致力于解决销售的痛点，适时推出了CRM电销版，结合了电话呼出呼入功能，打破了传统电话的手动拨号、无法录音的弊端。既有专业的客户管理和销售管理系统，又有由一键拨号、来电弹屏、全程录音、通话统计等功能组成的电销系统。极大的提升了电话营销的效率，提高成单量</div>
                  <div class="col-xs-12 margin-top-40"><h3>一、智能对接CRM，轻松应对客户</h3></div>
                  <div class="col-xs-12 margin-top-15"><img style="width: 720px;" src="../../assets/img/news2.jpg"/></div>
                  <div class="col-xs-12 margin-top-15">✦ CRM电销版直接对接ikcrm数据库，自动对接客户信息，电销人员可在CRM里一键拨号，省去人工拨号，从而避免了打错的可能。此外，来电会有来电弹屏，PC端自动弹出来电者详细信息，漏接、未接的电话，系统也会及时提醒。</div>
                  <div class="col-xs-12 margin-top-15">✦ 设置分组拨号信息，直接选择一组客户连续拨打，不间断，极大地提高了拨打效率。原本一天只能打300个电话，现在打1000个电话也不是事。</div>
                  <div class="col-xs-12 margin-top-40"><h3>二、销售过程全程记录，录音回放找到突破点</h3></div>
                  <div class="col-xs-12 margin-top-15"><img style="width: 720px;" src="../../assets/img/news3.jpg"/></div>
                  <div class="col-xs-12 margin-top-15">自动接入客户信息，全程录音，自动储存，随时可下载，CRM电销版里的通话统计包含外呼数量，时长，行动量等，真实记录了销售员的工作效率。</div>
                  <div class="col-xs-12 margin-top-15">✦ 全程录音，随时回放，销售员可根据录音回放找到销售突破点，记录详情不遗漏客户信息。</div>
                  <div class="col-xs-12 margin-top-15">✦ 数据化展现员工的工作内容与成果，管理者可以更好把握客户动向与需求。了解员工的行动量、通话时长、回访情况，便于校正谈判技巧与考核业务。</div>
                  <div class="col-xs-12 margin-top-40"><h3>三、连接电话宝和话机，成本低易管理</h3></div>
                  <div class="col-xs-12 margin-top-15">爱客CRM电销版连接电话宝和话机，安装简单，操作便捷，根据企业需求，按坐席安装使用，提高企业销售效率。</div>
                  <div class="col-xs-12 margin-top-15">✦ 如果你已经有一支20人的电销团队，已经配备20个普通有线电话座机，想对接电销系统，那么可选择“爱客CRM电销版+电话宝”套餐，无需改变原有的硬件配置和原有的电话号码。只要在已有的座机和电话线之间接入电话宝，然后在PC端桌面安装爱客电话助手软件（仅支持windows），就能实现一键拨号、来电弹屏、通话录音等功能，大幅度节约了时间管理成本和硬件成本。</div>
                  <div class="col-xs-12 margin-top-15">✦ 如果你是从0开始的新创业团队，想在短时间内组建一支10人的电销团队，那么可选择“爱客CRM电销版+无线话机”套餐。只需购买10个无线插卡话机和10张SIM卡，然后在PC端桌面安装爱客电话助手软件（仅支持windows），即可迅速展开业务，无需再浪费时间去申请线路和花费时间去布线，一机一卡，外呼显手机号，提高接通率。</div>
                </div>
              </div>
            </div>
            <div style="border-left: 1px solid #ebebeb; border-right: 1px solid #ebebeb; border-bottom: 1px solid #ebebeb; padding-top: 25px; padding-bottom: 15px" class="col-xs-12">
              <div class="col-xs-6">
                <el-button @click="onNextNews('2')" plain>上一页：一分钟科普“数据湖”</el-button>
              </div>
              <div class="col-xs-6 text-right">
                <el-button @click="onNextNews('4')" type="primary" plain>下一页：电子定量：传统行业的华丽转身</el-button>
              </div>
            </div>
          </div>
          <div v-if="newsNum === '4'">
            <div style="border-left: 1px solid #ebebeb; border-right: 1px solid #ebebeb; border-bottom: 1px solid #ebebeb;" class="col-xs-12">
              <div class="col-xs-12">
                <h1 style="font-size: 30px; color: #333333;">电子定量：传统行业的华丽转身</h1>
              </div>
              <div style="margin-bottom: 10px;" class="col-xs-12">
                <span style="font-size: 16px; color: #a3afb7; font-weight: 300!important;">2018-09-25 16:51:04</span>
              </div>
            </div>
            <div style="border-left: 1px solid #ebebeb; border-right: 1px solid #ebebeb; border-bottom: 1px solid #ebebeb;  padding-bottom: 40px" class="col-xs-12">
              <div class="col-xs-12 margin-top-20">
                <div style="line-height: 2; font-size: 16px;">
                  <div class="col-xs-12">“民以食为天”,粮油加工和食品工业关系着千家万户,影响着居民一日三餐,粮油机械作为粮油工业的重要组成部分,更是在粮油发展过程中占有重要地位。 </div>
                  <div class="col-xs-12 margin-top-15">新中国成立以前,我国的粮油工业大多以简单、原始的粮油作坊为主。除极少数大城市外,绝大多数地区都是用土磨、土碾和土榨进行粮油加工,设备陈旧、工艺落后,经济技术指标低下。当时,全国没有一家专门生产粮油机械设备的制造厂。 </div>
                  <div class="col-xs-12 margin-top-15">据原内贸部工业司统计,1996年,全国独立核算的粮油机械厂有271家,粮油机械产品产量达26.7万吨,其中榨油机械为1.85万吨、磨粉机械为2.85万吨、碾米机械为1.87万吨。</div>
                  <div class="col-xs-12 margin-top-15">虽然我国的粮油食品工业自改革开放以来得到了迅速的发展,可是在市场化、国际化、信息化的发展过程中仍存在诸多问题,如产业整合、企业缺乏技术创新能力和发展活力、技术装备相对落后、机电一体化水平低等问题。</div>
                  <div class="col-xs-12 margin-top-15">“电子定量包装设备就是诸多问题中表现比较突出的一类技术装备。” 安徽永成电子机械技术有限公司总经理傅正兵表示,“当前的电子定量包装设备无论从速度、精度或是自动化程度上都已经明显不能满足客户的需求了。”</div>
                  <div class="col-xs-12 margin-top-15">秤的传奇</div>
                  <div class="col-xs-12 margin-top-15">“‘电子定量’概念虽然很新颖,但实质就是精度特别高的电子秤。”傅正兵介绍,“我们生产的电子定量包装秤就是由称重单元、小车、缝包输送装置、气动系统、除尘系统、定量包装控制仪表等组成,整个称量过程由电脑控制,自动完成。”</div>
                  <div class="col-xs-12 margin-top-15">世界上最原始的秤是古埃及人的发明。还在7000多年以前,古埃及人就使用一种悬挂式的双盘秤来称麦子,这种秤有两个秤盘,分别悬挂在秤梁的两端。</div>
                  <div class="col-xs-12 margin-top-15">而在中国,秤的出现也很早。春秋中晚期,楚国已经制造了小型的衡器用来称黄金货币。经过逐步演化的过程,衡杆的重臂缩短,力臂加长,也就成为了现代仍在使用的杆秤。杆秤在耶稣诞生前由游牧部传入了西方,被命名为罗马秤。在许多拉丁语作家的著作中都有关于这种秤的记载。</div>
                  <div class="col-xs-12 margin-top-15">到了1670年,法国著名的数学家、物理学家和机械设计师吉尔·佩尔索纳·德·洛百瓦尔发明了等臂双盘案秤,直到现在,这种秤仍然是世界上使用最为普遍的商业秤。</div>
                  <div class="col-xs-12 margin-top-15">随着时代的发展,粮油行业使用的电子定量系统也逐渐升级,电子定量包装设备基本上已经在大米、面粉、饲料等粮食行业中得以较为广泛的应用,但从技术水平、产品性能等方面还远远落后于德意日美等发达国家的技术水平。</div>
                  <div class="col-xs-12 margin-top-15">“目前最新三传感器称重技术、密封工作室、调节闸门等技术已经运用到电子定量秤中,运用这些技术除了能够准确称量物料外,还能够自动进行包装,缝合。”傅正兵说。</div>
                  <div class="col-xs-12 margin-top-15">新技术 大市场</div>
                  <div class="col-xs-12 margin-top-15">“目前,我国电子定量产品主要锁定为大米加工行业市场、杂粮加工行业市场。”傅正兵介绍,“国家相关部门根据当前该行业的现实状况,在规划中也针对性地制定了相应的对策和发展目标。” 据中国粮食行业协会的统计,2007年全国规模以上大米加工企业7698个,比上年增加150个,年生产能力14666万吨。其中,日加工能力100吨以下的企业6092个,比上年减少51个;日加工能力100～200吨的企业1241个,比上年增加182个;日加工能力200～400吨的企业262个,比上年增加11个;400吨以上的大中型企业103个,比上年增加8个。大米行业市场正面临着迅速而又明显的整合升级。</div>
                  <div class="col-xs-12 margin-top-15">“类似的状况在细分市场如小麦粉行业等行业也存在着,所以电子定量产品目前面临非常好的市场机遇,其应用前景非常光明,且市场容量巨大。”傅正兵分析。 随着国内粮油企业规模的提升以及行业的整合发展,粮油加工企业从产品性能(速度、精度、称量范围等)、自动化程度、新技术、新功能等方面对电子定量设备提出了新的要求。</div>
                  <div class="col-xs-12 margin-top-15">据傅正兵介绍,大米加工行业市场自2003年前后至今约6年左右的市场运作,普通的一代计量包装设备的市场保有量大约已经占到80%左右。行业的整合发展急需新型的计量包装设备来满足行业计量包装需求。</div>
                  <div class="col-xs-12 margin-top-15">“电子计量产品每年在我国大米加工行业的市场容量大约为1亿元。而近几年杂粮加工行业市场的发展非常迅速,包括各种豆类、小米等细分行业,市场容量急剧扩大。”傅正兵说,“今后,我们要努力研制适合粮食特性的包装机械设备,争取尽快以先进技术和包装机械设备代替落后的包装技术和设备,以适应中国全面实现小康和基本实现现代化发展的需要。”</div>
                </div>
              </div>
            </div>
            <div style="border-left: 1px solid #ebebeb; border-right: 1px solid #ebebeb; border-bottom: 1px solid #ebebeb; padding-top: 25px; padding-bottom: 15px" class="col-xs-12">
              <div class="col-xs-6">
                <el-button @click="onNextNews('3')" plain>上一页：电销必读：这样打电话，效率更高</el-button>
              </div>
              <div class="col-xs-6 text-right">
                <el-button type="primary" plain>下一页：没有了</el-button>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
      </div>
    </div>
</template>

<script>
    export default {
      inject: ['reload'],
      name: "NewsDetail",
      methods: {
        onReturnHome() {
          this.$router.push({
            name: '/index',
          });
        },
        onReturnNews() {
          this.$router.push({
            name: '/news',
          });
        },
        onNextNews(num){
          this.$router.push({
            name: 'newsdetail',
            query: {
              newsNum:num,
            },
          })
        }
      },
      mounted() {
        // alert(window.screen.width)
      },
      data() {
        return {
          pageStyle: this.$route.name,
          newsNum:this.$route.query.newsNum
        }
      },
      watch: {
        '$route' (to, from) {
          if(from.query.newsNum !== to.query.newsNum){
            this.reload();
          }

        }
      }
    }
</script>

<style scoped>

</style>
