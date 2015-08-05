

<div class="col-xs-6 col-sm-6 col-md-3 col-lg-3 step-slider-item-box">
	<a href="#">
		<div class="item-box step-slider-item">
			<div class="item-box-image">

				<div class="badges">
					<?php if(rand(0,1)): ?>
					<div class="action-badge">Akció</div>
					<?php endif ?>

					<?php if(rand(0,1)): ?>
					<div class="new-item-badge">Újdonság</div>
					<?php endif ?>
				</div>

				<div class="hover-helper"><i class="fa fa-eye fa-4x"></i></div>
				<img src="<?php echo $input[rand(0, 11)]; ?>" alt="plchldr_img" class="img-responsive"/>
				<div class="item-box-price-left">129000 Ft</div>
				<div class="item-box-price-right">112000 Ft</div>
			</div>
			<div class="item-box-name">Lorem ipsum dolor sit amet, consectetur adipisicing elit</div>
		</div>
	</a>
</div>