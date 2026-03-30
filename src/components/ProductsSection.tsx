import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ChefHat, UtensilsCrossed, Apple, Soup, GlassWater, ArrowRight, ArrowLeft, X } from "lucide-react";
import productBakery from "@/assets/product-bakery.jpg";
import productRestaurant from "@/assets/product-restaurant.jpg";
import productFruit from "@/assets/product-fruit.jpg";
import productKitchen from "@/assets/product-kitchen.jpg";
import productJuice from "@/assets/product-juice.jpg";

const items = [
	{
		icon: ChefHat,
		num: "01",
		title: "BAKING EQUIPMENT",
		desc: "Deck ovens, rack ovens, mixers, proofers and complete bakery lines — powering Africa's bakeries from Nairobi to Dar es Salaam.",
		image: productBakery,
		fullDesc: "Our baking equipment range covers everything from small mtaa bakeries to large-scale industrial bread production across East Africa. We supply deck ovens for crusty breads, rack ovens for high-volume baking, spiral mixers for consistent dough, dough dividers for uniform portioning, proofers for optimal fermentation, and bread slicers for retail-ready packaging. All equipment comes with full installation and after-sales support by our Kenyan engineering team.",
		equipment: [
			"Deck Ovens",
			"Rack Ovens",
			"Spiral Mixers",
			"Dough Dividers",
			"Proofers",
			"Bread Slicers",
		],
	},
	{
		icon: UtensilsCrossed,
		num: "02",
		title: "FAST FOODS & RESTAURANTS",
		desc: "Fryers, grills, refrigeration, display counters — everything for your nyama choma joint, café, or restaurant chain.",
		image: productRestaurant,
		fullDesc: "We equip fast food outlets, restaurants, and vibrant African eateries with commercial-grade cooking equipment. Our range includes deep fryers for crispy chips and chicken, char grills for flame-grilled nyama choma, heated display counters for showcasing your dishes, commercial refrigerators, food warmers for buffet service, and ice machines. From a single kiosk to a restaurant chain, we handle complete kitchen fit-outs.",
		equipment: [
			"Deep Fryers",
			"Char Grills",
			"Display Counters",
			"Refrigerators",
			"Food Warmers",
			"Ice Machines",
		],
	},
	{
		icon: Apple,
		num: "03",
		title: "FRUIT & VEGETABLE PROCESSING",
		desc: "Washing, sorting, cutting, drying and packaging — turning Africa's abundant harvest into value-added products.",
		image: productFruit,
		fullDesc: "Our processing lines transform Africa's abundant produce — mangoes from Meru, oranges from Machakos, passion fruits from the highlands — into market-ready products. We provide bubble washing machines, optical sorting systems, precision cutting equipment, hot air dryers for preservation, packaging lines, and cold storage solutions to maintain freshness from farm to shelf.",
		equipment: [
			"Washing Lines",
			"Sorting Machines",
			"Cutting Equipment",
			"Dryers",
			"Packaging Lines",
			"Cold Storage",
		],
	},
	{
		icon: Soup,
		num: "04",
		title: "COMMERCIAL KITCHEN",
		desc: "Complete kitchen setups for hotels, hospitals, schools and catering institutions across Africa.",
		image: productKitchen,
		fullDesc: "We design and install complete commercial kitchens for Africa's growing hospitality industry — hotels along the Kenyan coast, hospitals in upcountry towns, university dining halls, and large-scale catering operations. Our solutions include gas and electric cooking ranges, steam tables, stainless steel ventilation hoods, prep stations, industrial dishwashers, and modular storage. Every kitchen is custom-designed for African conditions.",
		equipment: [
			"Cooking Ranges",
			"Steam Tables",
			"Ventilation Hoods",
			"Prep Tables",
			"Dishwashers",
			"Storage Units",
		],
	},
	{
		icon: GlassWater,
		num: "05",
		title: "JUICE PROCESSING",
		desc: "Extraction, pasteurization, filling — complete juice production lines for Africa's tropical fruit bounty.",
		image: productJuice,
		fullDesc: "Our juice processing lines handle everything from fruit reception to bottled product — perfect for Africa's incredible variety of tropical fruits. We supply citrus and multi-fruit extractors, pasteurizers for safe shelf-stable juice, filling machines for bottles and pouches, automatic bottle washers, labeling machines, and conveyor systems for continuous production. Ideal for processing Kenya's passion fruits, mangoes, and oranges.",
		equipment: [
			"Juice Extractors",
			"Pasteurizers",
			"Filling Machines",
			"Bottle Washers",
			"Labeling Machines",
			"Conveyors",
		],
	},
];

const ProductsSection = () => {
	const ref = useRef(null);
	const inView = useInView(ref, { once: true, margin: "-80px" });
	const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);
	const [selectedIdx, setSelectedIdx] = useState<number | null>(null);

	const goPrev = () =>
		setSelectedIdx((p) => (p !== null ? (p - 1 + items.length) % items.length : null));
	const goNext = () => setSelectedIdx((p) => (p !== null ? (p + 1) % items.length : null));

	return (
		<>
			<section id="products" ref={ref} className="section-padding section-alt">
				<div className="max-w-[1600px] mx-auto">
					<motion.div
						initial={{ opacity: 0 }}
						animate={inView ? { opacity: 1 } : {}}
						className="flex items-center gap-4 mb-6"
					>
						<span className="h-px w-12 bg-primary" />
						<span className="text-primary text-xs uppercase tracking-[0.3em]">
							Products We Supply
						</span>
					</motion.div>

					<motion.h2
						initial={{ opacity: 0, y: 30 }}
						animate={inView ? { opacity: 1, y: 0 } : {}}
						transition={{ duration: 0.6 }}
						className="font-heading text-5xl md:text-7xl text-foreground mb-6"
					>
						OUR PRODUCT
						<br />
						CATEGORIES
					</motion.h2>

					<motion.p
						initial={{ opacity: 0 }}
						animate={inView ? { opacity: 1 } : {}}
						transition={{ delay: 0.2 }}
						className="text-muted-foreground text-sm max-w-lg mb-6"
					>
						Tap any category to see the equipment we supply, with photos and detailed
						descriptions.
					</motion.p>

					<div className="african-border mb-16" />

					<div className="space-y-0">
						{items.map((item, i) => (
							<motion.div
								key={item.num}
								initial={{ opacity: 0, x: -30 }}
								animate={inView ? { opacity: 1, x: 0 } : {}}
								transition={{ delay: i * 0.1, duration: 0.5 }}
								className="group relative flex flex-col md:flex-row items-start gap-4 md:gap-10 py-8 border-t border-border cursor-pointer hover:pl-4 transition-all duration-500"
								onMouseEnter={() => setHoveredIdx(i)}
								onMouseLeave={() => setHoveredIdx(null)}
								onClick={() => setSelectedIdx(i)}
							>
								<span className="font-heading text-2xl text-muted-foreground group-hover:text-primary transition-colors">
									{item.num}
								</span>
								<item.icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors mt-1 shrink-0" />
								<div className="flex-1">
									<h3 className="font-heading text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors">
										{item.title}
									</h3>
									<p className="text-muted-foreground text-sm mt-2 max-w-lg md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500">
										{item.desc}
									</p>
									<div className="flex flex-wrap gap-2 mt-3 max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-500">
										{item.equipment.map((eq) => (
											<span
												key={eq}
												className="text-[10px] uppercase tracking-wider text-muted-foreground border border-border px-3 py-1"
											>
												{eq}
											</span>
										))}
									</div>
								</div>
								<span className="font-heading text-sm text-primary md:text-muted-foreground md:opacity-0 md:group-hover:opacity-100 transition-opacity self-center flex items-center gap-2">
									View Details{" "}
									<ArrowRight className="w-4 h-4" />
								</span>

								<AnimatePresence>
									{hoveredIdx === i && (
										<motion.div
											initial={{ opacity: 0, scale: 0.8, x: 40 }}
											animate={{ opacity: 1, scale: 1, x: 0 }}
											exit={{ opacity: 0, scale: 0.8, x: 40 }}
											transition={{ duration: 0.3 }}
											className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 w-72 h-48 overflow-hidden z-10 pointer-events-none"
										>
											<img
												src={item.image}
												alt={item.title}
												className="w-full h-full object-cover"
											/>
											<div className="absolute inset-0 border border-primary/30" />
										</motion.div>
									)}
								</AnimatePresence>
							</motion.div>
						))}
					</div>

					{/* Product image grid */}
					<div className="grid grid-cols-2 md:grid-cols-5 gap-2 mt-16">
						{items.map((item, i) => (
							<motion.div
								key={item.num + "-img"}
								initial={{ opacity: 0, y: 30 }}
								animate={inView ? { opacity: 1, y: 0 } : {}}
								transition={{ delay: 0.5 + i * 0.1, duration: 0.6 }}
								className="group relative aspect-square overflow-hidden cursor-pointer"
								onClick={() => setSelectedIdx(i)}
							>
								<img
									src={item.image}
									alt={item.title}
									loading="lazy"
									className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
								/>
								<div className="absolute inset-0 bg-background/60 group-hover:bg-background/20 transition-colors duration-500" />
								<div className="absolute bottom-0 left-0 right-0 p-3">
									<span className="text-primary text-[9px] uppercase tracking-[0.3em]">
										{item.num}
									</span>
									<p className="text-foreground text-xs font-heading mt-0.5">
										{item.title}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			{/* Product Detail Modal */}
			<AnimatePresence>
				{selectedIdx !== null && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-[100] bg-background/95 backdrop-blur-sm overflow-y-auto"
						onClick={() => setSelectedIdx(null)}
					>
						{/* <button
							className="fixed top-4 right-4 md:top-6 md:right-6 w-10 h-10 md:w-12 md:h-12 border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all z-[110]"
							onClick={() => setSelectedIdx(null)}
						>
							<X className="w-5 h-5 text-foreground" />
						</button> */}

						{/* Prev / Next arrows */}
						{/* <button
							className="fixed left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all z-[110]"
							onClick={(e) => {
								e.stopPropagation();
								goPrev();
							}}
						>
							<ArrowLeft className="w-5 h-5 text-foreground" />
						</button> */}
						{/* <button
							className="fixed right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all z-[110]"
							onClick={(e) => {
								e.stopPropagation();
								goNext();
							}}
						>
							<ArrowRight className="w-5 h-5 text-foreground" />
						</button> */}

						<motion.div
							key={selectedIdx}
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 40 }}
							transition={{ duration: 0.3 }}
							className="w-full max-w-4xl mx-auto px-4 py-16 md:py-20"
							onClick={(e) => e.stopPropagation()}
						>
							{/* Hero Image */}
							<div className="relative w-full aspect-[4/3] md:aspect-[21/9] overflow-hidden mb-8">
								<img
									src={items[selectedIdx].image}
									alt={items[selectedIdx].title}
									className="w-full h-full object-cover"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
								<div className="absolute bottom-4 left-4 md:bottom-8 md:left-8">
									<span className="text-primary text-xs uppercase tracking-[0.3em]">
										{items[selectedIdx].num}
									</span>
									<h3 className="font-heading text-2xl md:text-5xl text-foreground mt-1">
										{items[selectedIdx].title}
									</h3>
								</div>
							</div>

							<div className="african-border mb-8" />

							<p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-8">
								{items[selectedIdx].fullDesc}
							</p>

							<h4 className="font-heading text-lg text-foreground mb-4 flex items-center gap-3">
								<span className="h-px w-8 bg-primary" />
								Equipment We Supply
							</h4>
							<div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8">
								{items[selectedIdx].equipment.map((eq) => {
									const Icon = items[selectedIdx].icon;
									return (
										<div
											key={eq}
											className="border border-border p-4 hover:border-primary transition-colors group/eq"
										>
											<Icon className="w-5 h-5 text-muted-foreground group-hover/eq:text-primary transition-colors mb-2" />
											<span className="text-xs uppercase tracking-wider text-foreground">
												{eq}
											</span>
										</div>
									);
								})}
							</div>

							{/* Navigation dots */}
							<div className="flex items-center justify-center gap-3 mb-8">
								{items.map((_, i) => (
									<button
										key={i}
										onClick={() => setSelectedIdx(i)}
										className={`w-2 h-2 rounded-full transition-all ${
											i === selectedIdx
												? "bg-primary w-6"
												: "bg-border hover:bg-muted-foreground"
										}`}
										aria-label={`Go to product ${i + 1}`}
										type="button"
									/>
								))}
							</div>

							<a
								href={`mailto:michchore@gmail.com?subject=Inquiry: ${items[selectedIdx].title}&body=I would like to inquire about your ${items[selectedIdx].title.toLowerCase()} range.`}
								className="inline-flex items-center gap-3 border border-primary text-primary px-6 py-3 text-xs uppercase tracking-[0.2em] hover:bg-primary hover:text-primary-foreground transition-all duration-300"
							>
								Request a Quote{" "}
								<ArrowRight className="w-4 h-4" />
							</a>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
};

export default ProductsSection;
