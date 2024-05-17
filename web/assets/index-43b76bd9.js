import {
	v as vShow,
	i as inject,
	g as getCurrentInstance,
	w as watch,
	o as onBeforeUnmount,
	r as ref,
	a as onMounted,
	b as isBrowser,
	c as computed,
	d as reactive,
	h as hasInstance,
	e as onBeforeMount,
	f as off,
	j as readonly,
	k as on,
	l as createInjectionKey,
	m as modalBodyInjectionKey,
	n as drawerBodyInjectionKey,
	p as popoverBodyInjectionKey,
	u as useMemo,
	q as defineComponent,
	s as provide,
	t as getSlot$1,
	x as withDirectives,
	y as getFirstVNode,
	C as CssRender,
	z as useSsrAdapter,
	A as toRef,
	B as isMounted,
	D as h,
	L as LazyTeleport,
	E as zindexable,
	F as nextTick,
	G as onActivated,
	H as onDeactivated,
	I as depx,
	V as VResizeObserver,
	J as mergeProps,
	K as pxfy,
	M as renderSlot,
	N as resizeObserverManager,
	O as getNative,
	P as root,
	Q as overArg,
	R as isPrototype,
	S as isArrayLike,
	T as arrayLikeKeys,
	U as isArray,
	W as isSymbol,
	X as MapCache,
	Y as toString,
	Z as toSource,
	_ as baseGetTag,
	$ as Map$1,
	a0 as Symbol$1,
	a1 as eq,
	a2 as Uint8Array,
	a3 as isBuffer,
	a4 as Stack,
	a5 as isTypedArray,
	a6 as isObjectLike,
	a7 as isObject,
	a8 as isLength,
	a9 as isIndex,
	aa as isArguments,
	ab as identity,
	ac as baseFor,
	ad as arrayMap,
	ae as configProviderInjectionKey,
	af as replaceable,
	ag as cB,
	ah as cE,
	ai as c$1,
	aj as useConfig,
	ak as useTheme,
	al as useThemeClass,
	am as NBaseIcon,
	an as emptyLight,
	ao as createKey,
	ap as render,
	aq as Transition,
	ar as cM,
	as as cNotM,
	at as fadeInScaleUpTransition,
	au as useRtl,
	av as internalSelectMenuLight,
	aw as resolveWrappedSlot,
	ax as NBaseLoading,
	ay as NScrollbar,
	az as resolveSlot,
	aA as getMargin,
	aB as cCB,
	aC as watchEffect,
	aD as popoverLight,
	aE as clickoutside,
	aF as getPreciseEventTarget,
	aG as isSlotEmpty,
	aH as FocusTrap,
	aI as Fragment,
	aJ as XScrollbar,
	aK as getFirstSlotVNode,
	aL as cloneVNode,
	aM as Text,
	aN as keep,
	aO as call,
	aP as NBaseClose,
	aQ as tagLight,
	aR as color2Class,
	aS as iconSwitchTransition,
	aT as useStyle,
	aU as NIconSwitchTransition,
	aV as internalSelectionLight,
	aW as Wrapper,
	aX as fadeInHeightExpandTransition,
	aY as NFadeInExpandTransition,
	aZ as ErrorIcon,
	a_ as WarningIcon,
	a$ as InfoIcon,
	b0 as SuccessIcon,
	b1 as alertLight,
	b2 as resolveSlotWithProps,
	b3 as isSafari,
	b4 as useFormItem,
	b5 as inputLight,
	b6 as isBrowser$1,
	b7 as markEventEffectPerformed,
	b8 as selectLight,
	b9 as tooltipLight,
	ba as useMergedClsPrefix,
	bb as ellipsisLight,
	bc as radioLight,
	bd as flatten$1,
	be as warn,
	bf as iconLight,
	bg as dropdownLight,
	bh as dialogApiInjectionKey,
	bi as throwError,
	bj as Comment,
	bk as spaceLight,
	bl as getGap,
	bm as formLight,
	bn as keysOf,
	bo as commonVariables,
	bp as createId,
	bq as formItemInjectionKey,
	br as fadeInTransition,
	bs as imageLight,
	bt as normalizeStyle,
	bu as XButton,
	bv as inputNumberLight,
	bw as rgba,
	bx as insideModal,
	by as insidePopover,
	bz as listLight,
	bA as messageApiInjectionKey,
	bB as progressLight,
	bC as resultLight,
	bD as spinLight,
	bE as switchLight,
	bF as tableLight,
	bG as thingLight,
	bH as typographyLight,
	bI as NButton,
	bJ as Teleport,
	bK as uploadLight,
	bL as defineStore,
	bM as openBlock,
	bN as createElementBlock,
	bO as toDisplayString,
	bP as createBlock,
	bQ as withCtx,
	bR as createBaseVNode,
	bS as createVNode,
	bT as withKeys,
	bU as unref,
	bV as createTextVNode,
	bW as NModal,
	bX as storeToRefs,
	bY as useUserStore,
	bZ as useOsTheme,
	b_ as isMobile,
	b$ as renderList,
	c0 as isRef,
	c1 as render$1,
	c2 as NConfigProvider,
	c3 as lightTheme,
	c4 as darkTheme,
	c5 as createCommentVNode,
	c6 as normalizeClass,
	c7 as pushScopeId,
	c8 as popScopeId,
	c9 as ApiResultCode,
	ca as cookies
} from "./index-ce055589.js";
let onceCbs = [];
const paramsMap = new WeakMap;

function flushOnceCallbacks() {
	onceCbs.forEach(e => e(...paramsMap.get(e))), onceCbs = []
}

function beforeNextFrameOnce(e, ...t) {
	paramsMap.set(e, t), !onceCbs.includes(e) && onceCbs.push(e) === 1 && requestAnimationFrame(flushOnceCallbacks)
}

function happensIn(e, t) {
	let {
		target: n
	} = e;
	for (; n;) {
		if (n.dataset && n.dataset[t] !== void 0) return !0;
		n = n.parentElement
	}
	return !1
}

function parseResponsiveProp(e) {
	if (typeof e == "number") return {
		"": e.toString()
	};
	const t = {};
	return e.split(/ +/).forEach(n => {
		if (n === "") return;
		const [o, r] = n.split(":");
		r === void 0 ? t[""] = o : t[o] = r
	}), t
}

function parseResponsivePropValue(e, t) {
	var n;
	if (e == null) return;
	const o = parseResponsiveProp(e);
	if (t === void 0) return o[""];
	if (typeof t == "string") return (n = o[t]) !== null && n !== void 0 ? n : o[""];
	if (Array.isArray(t)) {
		for (let r = t.length - 1; r >= 0; --r) {
			const i = t[r];
			if (i in o) return o[i]
		}
		return o[""]
	} else {
		let r, i = -1;
		return Object.keys(o).forEach(a => {
			const l = Number(a);
			!Number.isNaN(l) && t >= l && l >= i && (i = l, r = o[a])
		}), r
	}
}

function getSlot(e, t = "default", n = []) {
	const r = e.$slots[t];
	return r === void 0 ? n : r()
}

function getTitleAttribute(e) {
	switch (typeof e) {
		case "string":
			return e || void 0;
		case "number":
			return String(e);
		default:
			return
	}
}

function createRefSetter(e) {
	return t => {
		t ? e.value = t.$el : e.value = null
	}
}

function mergeEventHandlers(e) {
	const t = e.filter(n => n !== void 0);
	if (t.length !== 0) return t.length === 1 ? t[0] : n => {
		e.forEach(o => {
			o && o(n)
		})
	}
}

function isNodeVShowFalse(e) {
	var t;
	const n = (t = e.dirs) === null || t === void 0 ? void 0 : t.find(({
		dir: o
	}) => o === vShow);
	return !!(n && n.value === !1)
}
const pureNumberRegex = /^(\d|\.)+$/,
	numberRegex = /(\d|\.)+/;

function formatLength(e, {
	c: t = 1,
	offset: n = 0,
	attachPx: o = !0
} = {}) {
	if (typeof e == "number") {
		const r = (e + n) * t;
		return r === 0 ? "0" : `${r}px`
	} else if (typeof e == "string")
		if (pureNumberRegex.test(e)) {
			const r = (Number(e) + n) * t;
			return o ? r === 0 ? "0" : `${r}px` : `${r}`
		} else {
			const r = numberRegex.exec(e);
			return r ? e.replace(numberRegex, String((Number(r[0]) + n) * t)) : e
		} return e
}
let _isJsdom;

function isJsdom() {
	return _isJsdom === void 0 && (_isJsdom = navigator.userAgent.includes("Node.js") || navigator.userAgent.includes(
		"jsdom")), _isJsdom
}

function useInjectionInstanceCollection(e, t, n) {
	var o;
	const r = inject(e, null);
	if (r === null) return;
	const i = (o = getCurrentInstance()) === null || o === void 0 ? void 0 : o.proxy;
	watch(n, a), a(n.value), onBeforeUnmount(() => {
		a(void 0, n.value)
	});

	function a(u, d) {
		if (!r) return;
		const f = r[t];
		d !== void 0 && l(f, d), u !== void 0 && s(f, u)
	}

	function l(u, d) {
		u[d] || (u[d] = []), u[d].splice(u[d].findIndex(f => f === i), 1)
	}

	function s(u, d) {
		u[d] || (u[d] = []), ~u[d].findIndex(f => f === i) || u[d].push(i)
	}
}

function useDeferredTrue(e, t, n) {
	if (!t) return e;
	const o = ref(e.value);
	let r = null;
	return watch(e, i => {
		r !== null && window.clearTimeout(r), i === !0 ? n && !n.value ? o.value = !0 : r = window.setTimeout(
		() => {
				o.value = !0
			}, t) : o.value = !1
	}), o
}
let fontsReady, isFontReady;
const init = () => {
	var e, t;
	fontsReady = isBrowser ? (t = (e = document) === null || e === void 0 ? void 0 : e.fonts) === null || t ===
		void 0 ? void 0 : t.ready : void 0, isFontReady = !1, fontsReady !== void 0 ? fontsReady.then(() => {
			isFontReady = !0
		}) : isFontReady = !0
};
init();

function onFontsReady(e) {
	if (isFontReady) return;
	let t = !1;
	onMounted(() => {
		isFontReady || fontsReady == null || fontsReady.then(() => {
			t || e()
		})
	}), onBeforeUnmount(() => {
		t = !0
	})
}

function useMergedState(e, t) {
	return watch(e, n => {
		n !== void 0 && (t.value = n)
	}), computed(() => e.value === void 0 ? t.value : e.value)
}

function useCompitable(e, t) {
	return computed(() => {
		for (const n of t)
			if (e[n] !== void 0) return e[n];
		return e[t[t.length - 1]]
	})
}
const defaultBreakpointOptions = {
	xs: 0,
	s: 640,
	m: 1024,
	l: 1280,
	xl: 1536,
	"2xl": 1920
};

function createMediaQuery(e) {
	return `(min-width: ${e}px)`
}
const mqlMap = {};

function useBreakpoints(e = defaultBreakpointOptions) {
	if (!isBrowser) return computed(() => []);
	if (typeof window.matchMedia != "function") return computed(() => []);
	const t = ref({}),
		n = Object.keys(e),
		o = (r, i) => {
			r.matches ? t.value[i] = !0 : t.value[i] = !1
		};
	return n.forEach(r => {
		const i = e[r];
		let a, l;
		mqlMap[i] === void 0 ? (a = window.matchMedia(createMediaQuery(i)), a.addEventListener ? a
			.addEventListener("change", s => {
				l.forEach(u => {
					u(s, r)
				})
			}) : a.addListener && a.addListener(s => {
				l.forEach(u => {
					u(s, r)
				})
			}), l = new Set, mqlMap[i] = {
				mql: a,
				cbs: l
			}) : (a = mqlMap[i].mql, l = mqlMap[i].cbs), l.add(o), a.matches && l.forEach(s => {
			s(a, r)
		})
	}), onBeforeUnmount(() => {
		n.forEach(r => {
			const {
				cbs: i
			} = mqlMap[e[r]];
			i.has(o) && i.delete(o)
		})
	}), computed(() => {
		const {
			value: r
		} = t;
		return n.filter(i => r[i])
	})
}

function useKeyboard(e = {}, t) {
	const n = reactive({
			ctrl: !1,
			command: !1,
			win: !1,
			shift: !1,
			tab: !1
		}),
		{
			keydown: o,
			keyup: r
		} = e,
		i = s => {
			switch (s.key) {
				case "Control":
					n.ctrl = !0;
					break;
				case "Meta":
					n.command = !0, n.win = !0;
					break;
				case "Shift":
					n.shift = !0;
					break;
				case "Tab":
					n.tab = !0;
					break
			}
			o !== void 0 && Object.keys(o).forEach(u => {
				if (u !== s.key) return;
				const d = o[u];
				if (typeof d == "function") d(s);
				else {
					const {
						stop: f = !1,
						prevent: v = !1
					} = d;
					f && s.stopPropagation(), v && s.preventDefault(), d.handler(s)
				}
			})
		},
		a = s => {
			switch (s.key) {
				case "Control":
					n.ctrl = !1;
					break;
				case "Meta":
					n.command = !1, n.win = !1;
					break;
				case "Shift":
					n.shift = !1;
					break;
				case "Tab":
					n.tab = !1;
					break
			}
			r !== void 0 && Object.keys(r).forEach(u => {
				if (u !== s.key) return;
				const d = r[u];
				if (typeof d == "function") d(s);
				else {
					const {
						stop: f = !1,
						prevent: v = !1
					} = d;
					f && s.stopPropagation(), v && s.preventDefault(), d.handler(s)
				}
			})
		},
		l = () => {
			(t === void 0 || t.value) && (on("keydown", document, i), on("keyup", document, a)), t !== void 0 && watch(
				t, s => {
					s ? (on("keydown", document, i), on("keyup", document, a)) : (off("keydown", document, i), off(
						"keyup", document, a))
				})
		};
	return hasInstance() ? (onBeforeMount(l), onBeforeUnmount(() => {
		(t === void 0 || t.value) && (off("keydown", document, i), off("keyup", document, a))
	})) : l(), readonly(n)
}
const internalSelectionMenuInjectionKey = createInjectionKey("n-internal-select-menu"),
	internalSelectionMenuBodyInjectionKey = createInjectionKey("n-internal-select-menu-body"),
	teleportDisabled = "__disabled__";

function useAdjustedTo(e) {
	const t = inject(modalBodyInjectionKey, null),
		n = inject(drawerBodyInjectionKey, null),
		o = inject(popoverBodyInjectionKey, null),
		r = inject(internalSelectionMenuBodyInjectionKey, null),
		i = ref();
	if (typeof document < "u") {
		i.value = document.fullscreenElement;
		const a = () => {
			i.value = document.fullscreenElement
		};
		onMounted(() => {
			on("fullscreenchange", document, a)
		}), onBeforeUnmount(() => {
			off("fullscreenchange", document, a)
		})
	}
	return useMemo(() => {
		var a;
		const {
			to: l
		} = e;
		return l !== void 0 ? l === !1 ? teleportDisabled : l === !0 ? i.value || "body" : l : t != null && t
			.value ? (a = t.value.$el) !== null && a !== void 0 ? a : t.value : n != null && n.value ? n.value :
			o != null && o.value ? o.value : r != null && r.value ? r.value : l ?? (i.value || "body")
	})
}
useAdjustedTo.tdkey = teleportDisabled;
useAdjustedTo.propTo = {
	type: [String, Object, Boolean],
	default: void 0
};
let viewMeasurer = null;

function ensureViewBoundingRect() {
	if (viewMeasurer === null && (viewMeasurer = document.getElementById("v-binder-view-measurer"), viewMeasurer ===
			null)) {
		viewMeasurer = document.createElement("div"), viewMeasurer.id = "v-binder-view-measurer";
		const {
			style: e
		} = viewMeasurer;
		e.position = "fixed", e.left = "0", e.right = "0", e.top = "0", e.bottom = "0", e.pointerEvents = "none", e
			.visibility = "hidden", document.body.appendChild(viewMeasurer)
	}
	return viewMeasurer.getBoundingClientRect()
}

function getPointRect(e, t) {
	const n = ensureViewBoundingRect();
	return {
		top: t,
		left: e,
		height: 0,
		width: 0,
		right: n.width - e,
		bottom: n.height - t
	}
}

function getRect(e) {
	const t = e.getBoundingClientRect(),
		n = ensureViewBoundingRect();
	return {
		left: t.left - n.left,
		top: t.top - n.top,
		bottom: n.height + n.top - t.bottom,
		right: n.width + n.left - t.right,
		width: t.width,
		height: t.height
	}
}

function getParentNode(e) {
	return e.nodeType === 9 ? null : e.parentNode
}

function getScrollParent(e) {
	if (e === null) return null;
	const t = getParentNode(e);
	if (t === null) return null;
	if (t.nodeType === 9) return document;
	if (t.nodeType === 1) {
		const {
			overflow: n,
			overflowX: o,
			overflowY: r
		} = getComputedStyle(t);
		if (/(auto|scroll|overlay)/.test(n + r + o)) return t
	}
	return getScrollParent(t)
}
const Binder = defineComponent({
		name: "Binder",
		props: {
			syncTargetWithParent: Boolean,
			syncTarget: {
				type: Boolean,
				default: !0
			}
		},
		setup(e) {
			var t;
			provide("VBinder", (t = getCurrentInstance()) === null || t === void 0 ? void 0 : t.proxy);
			const n = inject("VBinder", null),
				o = ref(null),
				r = b => {
					o.value = b, n && e.syncTargetWithParent && n.setTargetRef(b)
				};
			let i = [];
			const a = () => {
					let b = o.value;
					for (; b = getScrollParent(b), b !== null;) i.push(b);
					for (const x of i) on("scroll", x, f, !0)
				},
				l = () => {
					for (const b of i) off("scroll", b, f, !0);
					i = []
				},
				s = new Set,
				u = b => {
					s.size === 0 && a(), s.has(b) || s.add(b)
				},
				d = b => {
					s.has(b) && s.delete(b), s.size === 0 && l()
				},
				f = () => {
					beforeNextFrameOnce(v)
				},
				v = () => {
					s.forEach(b => b())
				},
				g = new Set,
				p = b => {
					g.size === 0 && on("resize", window, C), g.has(b) || g.add(b)
				},
				m = b => {
					g.has(b) && g.delete(b), g.size === 0 && off("resize", window, C)
				},
				C = () => {
					g.forEach(b => b())
				};
			return onBeforeUnmount(() => {
				off("resize", window, C), l()
			}), {
				targetRef: o,
				setTargetRef: r,
				addScrollListener: u,
				removeScrollListener: d,
				addResizeListener: p,
				removeResizeListener: m
			}
		},
		render() {
			return getSlot$1("binder", this.$slots)
		}
	}),
	VBinder = Binder,
	VTarget = defineComponent({
		name: "Target",
		setup() {
			const {
				setTargetRef: e,
				syncTarget: t
			} = inject("VBinder");
			return {
				syncTarget: t,
				setTargetDirective: {
					mounted: e,
					updated: e
				}
			}
		},
		render() {
			const {
				syncTarget: e,
				setTargetDirective: t
			} = this;
			return e ? withDirectives(getFirstVNode("follower", this.$slots), [
				[t]
			]) : getFirstVNode("follower", this.$slots)
		}
	}),
	ctxKey = "@@mmoContext",
	mousemoveoutside = {
		mounted(e, {
			value: t
		}) {
			e[ctxKey] = {
				handler: void 0
			}, typeof t == "function" && (e[ctxKey].handler = t, on("mousemoveoutside", e, t))
		},
		updated(e, {
			value: t
		}) {
			const n = e[ctxKey];
			typeof t == "function" ? n.handler ? n.handler !== t && (off("mousemoveoutside", e, n.handler), n.handler =
					t, on("mousemoveoutside", e, t)) : (e[ctxKey].handler = t, on("mousemoveoutside", e, t)) : n
				.handler && (off("mousemoveoutside", e, n.handler), n.handler = void 0)
		},
		unmounted(e) {
			const {
				handler: t
			} = e[ctxKey];
			t && off("mousemoveoutside", e, t), e[ctxKey].handler = void 0
		}
	},
	mousemoveoutside$1 = mousemoveoutside,
	{
		c
	} = CssRender(),
	cssrAnchorMetaName = "vueuc-style";

function lowBit(e) {
	return e & -e
}
class FinweckTree {
	constructor(t, n) {
		this.l = t, this.min = n;
		const o = new Array(t + 1);
		for (let r = 0; r < t + 1; ++r) o[r] = 0;
		this.ft = o
	}
	add(t, n) {
		if (n === 0) return;
		const {
			l: o,
			ft: r
		} = this;
		for (t += 1; t <= o;) r[t] += n, t += lowBit(t)
	}
	get(t) {
		return this.sum(t + 1) - this.sum(t)
	}
	sum(t) {
		if (t === void 0 && (t = this.l), t <= 0) return 0;
		const {
			ft: n,
			min: o,
			l: r
		} = this;
		if (t > r) throw new Error("[FinweckTree.sum]: `i` is larger than length.");
		let i = t * o;
		for (; t > 0;) i += n[t], t -= lowBit(t);
		return i
	}
	getBound(t) {
		let n = 0,
			o = this.l;
		for (; o > n;) {
			const r = Math.floor((n + o) / 2),
				i = this.sum(r);
			if (i > t) {
				o = r;
				continue
			} else if (i < t) {
				if (n === r) return this.sum(n + 1) <= t ? n + 1 : r;
				n = r
			} else return r
		}
		return n
	}
}
const oppositionPositions = {
		top: "bottom",
		bottom: "top",
		left: "right",
		right: "left"
	},
	oppositeAligns = {
		start: "end",
		center: "center",
		end: "start"
	},
	propToCompare = {
		top: "height",
		bottom: "height",
		left: "width",
		right: "width"
	},
	transformOrigins = {
		"bottom-start": "top left",
		bottom: "top center",
		"bottom-end": "top right",
		"top-start": "bottom left",
		top: "bottom center",
		"top-end": "bottom right",
		"right-start": "top left",
		right: "center left",
		"right-end": "bottom left",
		"left-start": "top right",
		left: "center right",
		"left-end": "bottom right"
	},
	overlapTransformOrigin = {
		"bottom-start": "bottom left",
		bottom: "bottom center",
		"bottom-end": "bottom right",
		"top-start": "top left",
		top: "top center",
		"top-end": "top right",
		"right-start": "top right",
		right: "center right",
		"right-end": "bottom right",
		"left-start": "top left",
		left: "center left",
		"left-end": "bottom left"
	},
	oppositeAlignCssPositionProps = {
		"bottom-start": "right",
		"bottom-end": "left",
		"top-start": "right",
		"top-end": "left",
		"right-start": "bottom",
		"right-end": "top",
		"left-start": "bottom",
		"left-end": "top"
	},
	keepOffsetDirection = {
		top: !0,
		bottom: !1,
		left: !0,
		right: !1
	},
	cssPositionToOppositeAlign = {
		top: "end",
		bottom: "start",
		left: "end",
		right: "start"
	};

function getPlacementAndOffsetOfFollower(e, t, n, o, r, i) {
	if (!r || i) return {
		placement: e,
		top: 0,
		left: 0
	};
	const [a, l] = e.split("-");
	let s = l ?? "center",
		u = {
			top: 0,
			left: 0
		};
	const d = (g, p, m) => {
			let C = 0,
				b = 0;
			const x = n[g] - t[p] - t[g];
			return x > 0 && o && (m ? b = keepOffsetDirection[p] ? x : -x : C = keepOffsetDirection[p] ? x : -x), {
				left: C,
				top: b
			}
		},
		f = a === "left" || a === "right";
	if (s !== "center") {
		const g = oppositeAlignCssPositionProps[e],
			p = oppositionPositions[g],
			m = propToCompare[g];
		if (n[m] > t[m]) {
			if (t[g] + t[m] < n[m]) {
				const C = (n[m] - t[m]) / 2;
				t[g] < C || t[p] < C ? t[g] < t[p] ? (s = oppositeAligns[l], u = d(m, p, f)) : u = d(m, g, f) : s =
					"center"
			}
		} else n[m] < t[m] && t[p] < 0 && t[g] > t[p] && (s = oppositeAligns[l])
	} else {
		const g = a === "bottom" || a === "top" ? "left" : "top",
			p = oppositionPositions[g],
			m = propToCompare[g],
			C = (n[m] - t[m]) / 2;
		(t[g] < C || t[p] < C) && (t[g] > t[p] ? (s = cssPositionToOppositeAlign[g], u = d(m, g, f)) : (s =
			cssPositionToOppositeAlign[p], u = d(m, p, f)))
	}
	let v = a;
	return t[a] < n[propToCompare[a]] && t[a] < t[oppositionPositions[a]] && (v = oppositionPositions[a]), {
		placement: s !== "center" ? `${v}-${s}` : v,
		left: u.left,
		top: u.top
	}
}

function getProperTransformOrigin(e, t) {
	return t ? overlapTransformOrigin[e] : transformOrigins[e]
}

function getOffset(e, t, n, o, r, i) {
	if (i) switch (e) {
		case "bottom-start":
			return {
				top: `${Math.round(n.top-t.top+n.height)}px`, left: `${Math.round(n.left-t.left)}px`, transform:
					"translateY(-100%)"
			};
		case "bottom-end":
			return {
				top: `${Math.round(n.top-t.top+n.height)}px`, left: `${Math.round(n.left-t.left+n.width)}px`,
					transform: "translateX(-100%) translateY(-100%)"
			};
		case "top-start":
			return {
				top: `${Math.round(n.top-t.top)}px`, left: `${Math.round(n.left-t.left)}px`, transform: ""
			};
		case "top-end":
			return {
				top: `${Math.round(n.top-t.top)}px`, left: `${Math.round(n.left-t.left+n.width)}px`, transform:
					"translateX(-100%)"
			};
		case "right-start":
			return {
				top: `${Math.round(n.top-t.top)}px`, left: `${Math.round(n.left-t.left+n.width)}px`, transform:
					"translateX(-100%)"
			};
		case "right-end":
			return {
				top: `${Math.round(n.top-t.top+n.height)}px`, left: `${Math.round(n.left-t.left+n.width)}px`,
					transform: "translateX(-100%) translateY(-100%)"
			};
		case "left-start":
			return {
				top: `${Math.round(n.top-t.top)}px`, left: `${Math.round(n.left-t.left)}px`, transform: ""
			};
		case "left-end":
			return {
				top: `${Math.round(n.top-t.top+n.height)}px`, left: `${Math.round(n.left-t.left)}px`, transform:
					"translateY(-100%)"
			};
		case "top":
			return {
				top: `${Math.round(n.top-t.top)}px`, left: `${Math.round(n.left-t.left+n.width/2)}px`, transform:
					"translateX(-50%)"
			};
		case "right":
			return {
				top: `${Math.round(n.top-t.top+n.height/2)}px`, left: `${Math.round(n.left-t.left+n.width)}px`,
					transform: "translateX(-100%) translateY(-50%)"
			};
		case "left":
			return {
				top: `${Math.round(n.top-t.top+n.height/2)}px`, left: `${Math.round(n.left-t.left)}px`, transform:
					"translateY(-50%)"
			};
		case "bottom":
		default:
			return {
				top: `${Math.round(n.top-t.top+n.height)}px`, left: `${Math.round(n.left-t.left+n.width/2)}px`,
					transform: "translateX(-50%) translateY(-100%)"
			}
	}
	switch (e) {
		case "bottom-start":
			return {
				top: `${Math.round(n.top-t.top+n.height+o)}px`, left: `${Math.round(n.left-t.left+r)}px`, transform: ""
			};
		case "bottom-end":
			return {
				top: `${Math.round(n.top-t.top+n.height+o)}px`, left: `${Math.round(n.left-t.left+n.width+r)}px`,
					transform: "translateX(-100%)"
			};
		case "top-start":
			return {
				top: `${Math.round(n.top-t.top+o)}px`, left: `${Math.round(n.left-t.left+r)}px`, transform:
					"translateY(-100%)"
			};
		case "top-end":
			return {
				top: `${Math.round(n.top-t.top+o)}px`, left: `${Math.round(n.left-t.left+n.width+r)}px`, transform:
					"translateX(-100%) translateY(-100%)"
			};
		case "right-start":
			return {
				top: `${Math.round(n.top-t.top+o)}px`, left: `${Math.round(n.left-t.left+n.width+r)}px`, transform: ""
			};
		case "right-end":
			return {
				top: `${Math.round(n.top-t.top+n.height+o)}px`, left: `${Math.round(n.left-t.left+n.width+r)}px`,
					transform: "translateY(-100%)"
			};
		case "left-start":
			return {
				top: `${Math.round(n.top-t.top+o)}px`, left: `${Math.round(n.left-t.left+r)}px`, transform:
					"translateX(-100%)"
			};
		case "left-end":
			return {
				top: `${Math.round(n.top-t.top+n.height+o)}px`, left: `${Math.round(n.left-t.left+r)}px`, transform:
					"translateX(-100%) translateY(-100%)"
			};
		case "top":
			return {
				top: `${Math.round(n.top-t.top+o)}px`, left: `${Math.round(n.left-t.left+n.width/2+r)}px`, transform:
					"translateY(-100%) translateX(-50%)"
			};
		case "right":
			return {
				top: `${Math.round(n.top-t.top+n.height/2+o)}px`, left: `${Math.round(n.left-t.left+n.width+r)}px`,
					transform: "translateY(-50%)"
			};
		case "left":
			return {
				top: `${Math.round(n.top-t.top+n.height/2+o)}px`, left: `${Math.round(n.left-t.left+r)}px`, transform:
					"translateY(-50%) translateX(-100%)"
			};
		case "bottom":
		default:
			return {
				top: `${Math.round(n.top-t.top+n.height+o)}px`, left: `${Math.round(n.left-t.left+n.width/2+r)}px`,
					transform: "translateX(-50%)"
			}
	}
}
const style$t = c([c(".v-binder-follower-container", {
		position: "absolute",
		left: "0",
		right: "0",
		top: "0",
		height: "0",
		pointerEvents: "none",
		zIndex: "auto"
	}), c(".v-binder-follower-content", {
		position: "absolute",
		zIndex: "auto"
	}, [c("> *", {
		pointerEvents: "all"
	})])]),
	VFollower = defineComponent({
		name: "Follower",
		inheritAttrs: !1,
		props: {
			show: Boolean,
			enabled: {
				type: Boolean,
				default: void 0
			},
			placement: {
				type: String,
				default: "bottom"
			},
			syncTrigger: {
				type: Array,
				default: ["resize", "scroll"]
			},
			to: [String, Object],
			flip: {
				type: Boolean,
				default: !0
			},
			internalShift: Boolean,
			x: Number,
			y: Number,
			width: String,
			minWidth: String,
			containerClass: String,
			teleportDisabled: Boolean,
			zindexable: {
				type: Boolean,
				default: !0
			},
			zIndex: Number,
			overlap: Boolean
		},
		setup(e) {
			const t = inject("VBinder"),
				n = useMemo(() => e.enabled !== void 0 ? e.enabled : e.show),
				o = ref(null),
				r = ref(null),
				i = () => {
					const {
						syncTrigger: v
					} = e;
					v.includes("scroll") && t.addScrollListener(s), v.includes("resize") && t.addResizeListener(s)
				},
				a = () => {
					t.removeScrollListener(s), t.removeResizeListener(s)
				};
			onMounted(() => {
				n.value && (s(), i())
			});
			const l = useSsrAdapter();
			style$t.mount({
				id: "vueuc/binder",
				head: !0,
				anchorMetaName: cssrAnchorMetaName,
				ssr: l
			}), onBeforeUnmount(() => {
				a()
			}), onFontsReady(() => {
				n.value && s()
			});
			const s = () => {
				if (!n.value) return;
				const v = o.value;
				if (v === null) return;
				const g = t.targetRef,
					{
						x: p,
						y: m,
						overlap: C
					} = e,
					b = p !== void 0 && m !== void 0 ? getPointRect(p, m) : getRect(g);
				v.style.setProperty("--v-target-width", `${Math.round(b.width)}px`), v.style.setProperty(
					"--v-target-height", `${Math.round(b.height)}px`);
				const {
					width: x,
					minWidth: S,
					placement: w,
					internalShift: y,
					flip: R
				} = e;
				v.setAttribute("v-placement", w), C ? v.setAttribute("v-overlap", "") : v.removeAttribute(
					"v-overlap");
				const {
					style: k
				} = v;
				x === "target" ? k.width = `${b.width}px` : x !== void 0 ? k.width = x : k.width = "", S ===
					"target" ? k.minWidth = `${b.width}px` : S !== void 0 ? k.minWidth = S : k.minWidth = "";
				const B = getRect(v),
					T = getRect(r.value),
					{
						left: M,
						top: E,
						placement: $
					} = getPlacementAndOffsetOfFollower(w, b, B, y, R, C),
					_ = getProperTransformOrigin($, C),
					{
						left: O,
						top: N,
						transform: D
					} = getOffset($, T, b, E, M, C);
				v.setAttribute("v-placement", $), v.style.setProperty("--v-offset-left", `${Math.round(M)}px`),
					v.style.setProperty("--v-offset-top", `${Math.round(E)}px`), v.style.transform =
					`translateX(${O}) translateY(${N}) ${D}`, v.style.setProperty("--v-transform-origin", _), v
					.style.transformOrigin = _
			};
			watch(n, v => {
				v ? (i(), u()) : a()
			});
			const u = () => {
				nextTick().then(s).catch(v => console.error(v))
			};
			["placement", "x", "y", "internalShift", "flip", "width", "overlap", "minWidth"].forEach(v => {
				watch(toRef(e, v), s)
			}), ["teleportDisabled"].forEach(v => {
				watch(toRef(e, v), u)
			}), watch(toRef(e, "syncTrigger"), v => {
				v.includes("resize") ? t.addResizeListener(s) : t.removeResizeListener(s), v.includes(
					"scroll") ? t.addScrollListener(s) : t.removeScrollListener(s)
			});
			const d = isMounted(),
				f = useMemo(() => {
					const {
						to: v
					} = e;
					if (v !== void 0) return v;
					d.value
				});
			return {
				VBinder: t,
				mergedEnabled: n,
				offsetContainerRef: r,
				followerRef: o,
				mergedTo: f,
				syncPosition: s
			}
		},
		render() {
			return h(LazyTeleport, {
				show: this.show,
				to: this.mergedTo,
				disabled: this.teleportDisabled
			}, {
				default: () => {
					var e, t;
					const n = h("div", {
						class: ["v-binder-follower-container", this.containerClass],
						ref: "offsetContainerRef"
					}, [h("div", {
							class: "v-binder-follower-content",
							ref: "followerRef"
						}, (t = (e = this.$slots).default) === null || t === void 0 ?
						void 0 : t.call(e))]);
					return this.zindexable ? withDirectives(n, [
						[zindexable, {
							enabled: this.mergedEnabled,
							zIndex: this.zIndex
						}]
					]) : n
				}
			})
		}
	});
let maybeTouch;

function ensureMaybeTouch() {
	return typeof document > "u" ? !1 : (maybeTouch === void 0 && ("matchMedia" in window ? maybeTouch = window
		.matchMedia("(pointer:coarse)").matches : maybeTouch = !1), maybeTouch)
}
let wheelScale;

function ensureWheelScale() {
	return typeof document > "u" ? 1 : (wheelScale === void 0 && (wheelScale = "chrome" in window ? window
		.devicePixelRatio : 1), wheelScale)
}
const styles = c(".v-vl", {
		maxHeight: "inherit",
		height: "100%",
		overflow: "auto",
		minWidth: "1px"
	}, [c("&:not(.v-vl--show-scrollbar)", {
		scrollbarWidth: "none"
	}, [c("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", {
		width: 0,
		height: 0,
		display: "none"
	})])]),
	VVirtualList = defineComponent({
		name: "VirtualList",
		inheritAttrs: !1,
		props: {
			showScrollbar: {
				type: Boolean,
				default: !0
			},
			items: {
				type: Array,
				default: () => []
			},
			itemSize: {
				type: Number,
				required: !0
			},
			itemResizable: Boolean,
			itemsStyle: [String, Object],
			visibleItemsTag: {
				type: [String, Object],
				default: "div"
			},
			visibleItemsProps: Object,
			ignoreItemResize: Boolean,
			onScroll: Function,
			onWheel: Function,
			onResize: Function,
			defaultScrollKey: [Number, String],
			defaultScrollIndex: Number,
			keyField: {
				type: String,
				default: "key"
			},
			paddingTop: {
				type: [Number, String],
				default: 0
			},
			paddingBottom: {
				type: [Number, String],
				default: 0
			}
		},
		setup(e) {
			const t = useSsrAdapter();
			styles.mount({
				id: "vueuc/virtual-list",
				head: !0,
				anchorMetaName: cssrAnchorMetaName,
				ssr: t
			}), onMounted(() => {
				const {
					defaultScrollIndex: E,
					defaultScrollKey: $
				} = e;
				E != null ? p({
					index: E
				}) : $ != null && p({
					key: $
				})
			});
			let n = !1,
				o = !1;
			onActivated(() => {
				if (n = !1, !o) {
					o = !0;
					return
				}
				p({
					top: f.value,
					left: d
				})
			}), onDeactivated(() => {
				n = !0, o || (o = !0)
			});
			const r = computed(() => {
					const E = new Map,
						{
							keyField: $
						} = e;
					return e.items.forEach((_, O) => {
						E.set(_[$], O)
					}), E
				}),
				i = ref(null),
				a = ref(void 0),
				l = new Map,
				s = computed(() => {
					const {
						items: E,
						itemSize: $,
						keyField: _
					} = e, O = new FinweckTree(E.length, $);
					return E.forEach((N, D) => {
						const F = N[_],
							j = l.get(F);
						j !== void 0 && O.add(D, j)
					}), O
				}),
				u = ref(0);
			let d = 0;
			const f = ref(0),
				v = useMemo(() => Math.max(s.value.getBound(f.value - depx(e.paddingTop)) - 1, 0)),
				g = computed(() => {
					const {
						value: E
					} = a;
					if (E === void 0) return [];
					const {
						items: $,
						itemSize: _
					} = e, O = v.value, N = Math.min(O + Math.ceil(E / _ + 1), $.length - 1), D = [];
					for (let F = O; F <= N; ++F) D.push($[F]);
					return D
				}),
				p = (E, $) => {
					if (typeof E == "number") {
						x(E, $, "auto");
						return
					}
					const {
						left: _,
						top: O,
						index: N,
						key: D,
						position: F,
						behavior: j,
						debounce: J = !0
					} = E;
					if (_ !== void 0 || O !== void 0) x(_, O, j);
					else if (N !== void 0) b(N, j, J);
					else if (D !== void 0) {
						const Q = r.value.get(D);
						Q !== void 0 && b(Q, j, J)
					} else F === "bottom" ? x(0, Number.MAX_SAFE_INTEGER, j) : F === "top" && x(0, 0, j)
				};
			let m, C = null;

			function b(E, $, _) {
				const {
					value: O
				} = s, N = O.sum(E) + depx(e.paddingTop);
				if (!_) i.value.scrollTo({
					left: 0,
					top: N,
					behavior: $
				});
				else {
					m = E, C !== null && window.clearTimeout(C), C = window.setTimeout(() => {
						m = void 0, C = null
					}, 16);
					const {
						scrollTop: D,
						offsetHeight: F
					} = i.value;
					if (N > D) {
						const j = O.get(E);
						N + j <= D + F || i.value.scrollTo({
							left: 0,
							top: N + j - F,
							behavior: $
						})
					} else i.value.scrollTo({
						left: 0,
						top: N,
						behavior: $
					})
				}
			}

			function x(E, $, _) {
				i.value.scrollTo({
					left: E,
					top: $,
					behavior: _
				})
			}

			function S(E, $) {
				var _, O, N;
				if (n || e.ignoreItemResize || M($.target)) return;
				const {
					value: D
				} = s, F = r.value.get(E), j = D.get(F), J = (N = (O = (_ = $.borderBoxSize) === null || _ ===
						void 0 ? void 0 : _[0]) === null || O === void 0 ? void 0 : O.blockSize) !== null && N !==
					void 0 ? N : $.contentRect.height;
				if (J === j) return;
				J - e.itemSize === 0 ? l.delete(E) : l.set(E, J - e.itemSize);
				const re = J - j;
				if (re === 0) return;
				D.add(F, re);
				const L = i.value;
				if (L != null) {
					if (m === void 0) {
						const W = D.sum(F);
						L.scrollTop > W && L.scrollBy(0, re)
					} else if (F < m) L.scrollBy(0, re);
					else if (F === m) {
						const W = D.sum(F);
						J + W > L.scrollTop + L.offsetHeight && L.scrollBy(0, re)
					}
					T()
				}
				u.value++
			}
			const w = !ensureMaybeTouch();
			let y = !1;

			function R(E) {
				var $;
				($ = e.onScroll) === null || $ === void 0 || $.call(e, E), (!w || !y) && T()
			}

			function k(E) {
				var $;
				if (($ = e.onWheel) === null || $ === void 0 || $.call(e, E), w) {
					const _ = i.value;
					if (_ != null) {
						if (E.deltaX === 0 && (_.scrollTop === 0 && E.deltaY <= 0 || _.scrollTop + _.offsetHeight >=
								_.scrollHeight && E.deltaY >= 0)) return;
						E.preventDefault(), _.scrollTop += E.deltaY / ensureWheelScale(), _.scrollLeft += E.deltaX /
							ensureWheelScale(), T(), y = !0, beforeNextFrameOnce(() => {
								y = !1
							})
					}
				}
			}

			function B(E) {
				if (n || M(E.target) || E.contentRect.height === a.value) return;
				a.value = E.contentRect.height;
				const {
					onResize: $
				} = e;
				$ !== void 0 && $(E)
			}

			function T() {
				const {
					value: E
				} = i;
				E != null && (f.value = E.scrollTop, d = E.scrollLeft)
			}

			function M(E) {
				let $ = E;
				for (; $ !== null;) {
					if ($.style.display === "none") return !0;
					$ = $.parentElement
				}
				return !1
			}
			return {
				listHeight: a,
				listStyle: {
					overflow: "auto"
				},
				keyToIndex: r,
				itemsStyle: computed(() => {
					const {
						itemResizable: E
					} = e, $ = pxfy(s.value.sum());
					return u.value, [e.itemsStyle, {
						boxSizing: "content-box",
						height: E ? "" : $,
						minHeight: E ? $ : "",
						paddingTop: pxfy(e.paddingTop),
						paddingBottom: pxfy(e.paddingBottom)
					}]
				}),
				visibleItemsStyle: computed(() => (u.value, {
					transform: `translateY(${pxfy(s.value.sum(v.value))})`
				})),
				viewportItems: g,
				listElRef: i,
				itemsElRef: ref(null),
				scrollTo: p,
				handleListResize: B,
				handleListScroll: R,
				handleListWheel: k,
				handleItemResize: S
			}
		},
		render() {
			const {
				itemResizable: e,
				keyField: t,
				keyToIndex: n,
				visibleItemsTag: o
			} = this;
			return h(VResizeObserver, {
				onResize: this.handleListResize
			}, {
				default: () => {
					var r, i;
					return h("div", mergeProps(this.$attrs, {
						class: ["v-vl", this.showScrollbar && "v-vl--show-scrollbar"],
						onScroll: this.handleListScroll,
						onWheel: this.handleListWheel,
						ref: "listElRef"
					}), [this.items.length !== 0 ? h("div", {
							ref: "itemsElRef",
							class: "v-vl-items",
							style: this.itemsStyle
						}, [h(o, Object.assign({
							class: "v-vl-visible-items",
							style: this.visibleItemsStyle
						}, this.visibleItemsProps), {
							default: () => this.viewportItems.map(a => {
								const l = a[t],
									s = n.get(l),
									u = this.$slots.default({
										item: a,
										index: s
									})[0];
								return e ? h(VResizeObserver, {
									key: l,
									onResize: d => this
										.handleItemResize(l, d)
								}, {
									default: () => u
								}) : (u.key = l, u)
							})
						})]) : (i = (r = this.$slots).empty) === null || i === void 0 ? void 0 :
						i.call(r)
					])
				}
			})
		}
	}),
	hiddenAttr = "v-hidden",
	style$s = c("[v-hidden]", {
		display: "none!important"
	}),
	VOverflow = defineComponent({
		name: "Overflow",
		props: {
			getCounter: Function,
			getTail: Function,
			updateCounter: Function,
			onUpdateCount: Function,
			onUpdateOverflow: Function
		},
		setup(e, {
			slots: t
		}) {
			const n = ref(null),
				o = ref(null);

			function r(a) {
				const {
					value: l
				} = n, {
					getCounter: s,
					getTail: u
				} = e;
				let d;
				if (s !== void 0 ? d = s() : d = o.value, !l || !d) return;
				d.hasAttribute(hiddenAttr) && d.removeAttribute(hiddenAttr);
				const {
					children: f
				} = l;
				if (a.showAllItemsBeforeCalculate)
					for (const S of f) S.hasAttribute(hiddenAttr) && S.removeAttribute(hiddenAttr);
				const v = l.offsetWidth,
					g = [],
					p = t.tail ? u == null ? void 0 : u() : null;
				let m = p ? p.offsetWidth : 0,
					C = !1;
				const b = l.children.length - (t.tail ? 1 : 0);
				for (let S = 0; S < b - 1; ++S) {
					if (S < 0) continue;
					const w = f[S];
					if (C) {
						w.hasAttribute(hiddenAttr) || w.setAttribute(hiddenAttr, "");
						continue
					} else w.hasAttribute(hiddenAttr) && w.removeAttribute(hiddenAttr);
					const y = w.offsetWidth;
					if (m += y, g[S] = y, m > v) {
						const {
							updateCounter: R
						} = e;
						for (let k = S; k >= 0; --k) {
							const B = b - 1 - k;
							R !== void 0 ? R(B) : d.textContent = `${B}`;
							const T = d.offsetWidth;
							if (m -= g[k], m + T <= v || k === 0) {
								C = !0, S = k - 1, p && (S === -1 ? (p.style.maxWidth = `${v-T}px`, p.style
									.boxSizing = "border-box") : p.style.maxWidth = "");
								const {
									onUpdateCount: M
								} = e;
								M && M(B);
								break
							}
						}
					}
				}
				const {
					onUpdateOverflow: x
				} = e;
				C ? x !== void 0 && x(!0) : (x !== void 0 && x(!1), d.setAttribute(hiddenAttr, ""))
			}
			const i = useSsrAdapter();
			return style$s.mount({
				id: "vueuc/overflow",
				head: !0,
				anchorMetaName: cssrAnchorMetaName,
				ssr: i
			}), onMounted(() => r({
				showAllItemsBeforeCalculate: !1
			})), {
				selfRef: n,
				counterRef: o,
				sync: r
			}
		},
		render() {
			const {
				$slots: e
			} = this;
			return nextTick(() => this.sync({
				showAllItemsBeforeCalculate: !1
			})), h("div", {
				class: "v-overflow",
				ref: "selfRef"
			}, [renderSlot(e, "default"), e.counter ? e.counter() : h("span", {
				style: {
					display: "inline-block"
				},
				ref: "counterRef"
			}), e.tail ? e.tail() : null])
		}
	});

function useOnResize(e, t) {
	t && (onMounted(() => {
		const {
			value: n
		} = e;
		n && resizeObserverManager.registerHandler(n, t)
	}), onBeforeUnmount(() => {
		const {
			value: n
		} = e;
		n && resizeObserverManager.unregisterHandler(n)
	}))
}
const download = (e, t) => {
	if (!e) return;
	const n = document.createElement("a");
	n.href = e, t !== void 0 && (n.download = t), document.body.appendChild(n), n.click(), document.body
		.removeChild(n)
};
var WeakMap$1 = getNative(root, "WeakMap");
const WeakMap$2 = WeakMap$1;
var nativeKeys = overArg(Object.keys, Object);
const nativeKeys$1 = nativeKeys;
var objectProto$3 = Object.prototype,
	hasOwnProperty$2 = objectProto$3.hasOwnProperty;

function baseKeys(e) {
	if (!isPrototype(e)) return nativeKeys$1(e);
	var t = [];
	for (var n in Object(e)) hasOwnProperty$2.call(e, n) && n != "constructor" && t.push(n);
	return t
}

function keys(e) {
	return isArrayLike(e) ? arrayLikeKeys(e) : baseKeys(e)
}
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
	reIsPlainProp = /^\w*$/;

function isKey(e, t) {
	if (isArray(e)) return !1;
	var n = typeof e;
	return n == "number" || n == "symbol" || n == "boolean" || e == null || isSymbol(e) ? !0 : reIsPlainProp.test(e) ||
		!reIsDeepProp.test(e) || t != null && e in Object(t)
}
var FUNC_ERROR_TEXT = "Expected a function";

function memoize(e, t) {
	if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(FUNC_ERROR_TEXT);
	var n = function() {
		var o = arguments,
			r = t ? t.apply(this, o) : o[0],
			i = n.cache;
		if (i.has(r)) return i.get(r);
		var a = e.apply(this, o);
		return n.cache = i.set(r, a) || i, a
	};
	return n.cache = new(memoize.Cache || MapCache), n
}
memoize.Cache = MapCache;
var MAX_MEMOIZE_SIZE = 500;

function memoizeCapped(e) {
	var t = memoize(e, function(o) {
			return n.size === MAX_MEMOIZE_SIZE && n.clear(), o
		}),
		n = t.cache;
	return t
}
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
	reEscapeChar = /\\(\\)?/g,
	stringToPath = memoizeCapped(function(e) {
		var t = [];
		return e.charCodeAt(0) === 46 && t.push(""), e.replace(rePropName, function(n, o, r, i) {
			t.push(r ? i.replace(reEscapeChar, "$1") : o || n)
		}), t
	});
const stringToPath$1 = stringToPath;

function castPath(e, t) {
	return isArray(e) ? e : isKey(e, t) ? [e] : stringToPath$1(toString(e))
}
var INFINITY = 1 / 0;

function toKey(e) {
	if (typeof e == "string" || isSymbol(e)) return e;
	var t = e + "";
	return t == "0" && 1 / e == -INFINITY ? "-0" : t
}

function baseGet(e, t) {
	t = castPath(t, e);
	for (var n = 0, o = t.length; e != null && n < o;) e = e[toKey(t[n++])];
	return n && n == o ? e : void 0
}

function get(e, t, n) {
	var o = e == null ? void 0 : baseGet(e, t);
	return o === void 0 ? n : o
}

function arrayPush(e, t) {
	for (var n = -1, o = t.length, r = e.length; ++n < o;) e[r + n] = t[n];
	return e
}

function arrayReduce(e, t, n, o) {
	var r = -1,
		i = e == null ? 0 : e.length;
	for (o && i && (n = e[++r]); ++r < i;) n = t(n, e[r], r, e);
	return n
}

function basePropertyOf(e) {
	return function(t) {
		return e == null ? void 0 : e[t]
	}
}
var deburredLetters = {
		À: "A",
		Á: "A",
		Â: "A",
		Ã: "A",
		Ä: "A",
		Å: "A",
		à: "a",
		á: "a",
		â: "a",
		ã: "a",
		ä: "a",
		å: "a",
		Ç: "C",
		ç: "c",
		Ð: "D",
		ð: "d",
		È: "E",
		É: "E",
		Ê: "E",
		Ë: "E",
		è: "e",
		é: "e",
		ê: "e",
		ë: "e",
		Ì: "I",
		Í: "I",
		Î: "I",
		Ï: "I",
		ì: "i",
		í: "i",
		î: "i",
		ï: "i",
		Ñ: "N",
		ñ: "n",
		Ò: "O",
		Ó: "O",
		Ô: "O",
		Õ: "O",
		Ö: "O",
		Ø: "O",
		ò: "o",
		ó: "o",
		ô: "o",
		õ: "o",
		ö: "o",
		ø: "o",
		Ù: "U",
		Ú: "U",
		Û: "U",
		Ü: "U",
		ù: "u",
		ú: "u",
		û: "u",
		ü: "u",
		Ý: "Y",
		ý: "y",
		ÿ: "y",
		Æ: "Ae",
		æ: "ae",
		Þ: "Th",
		þ: "th",
		ß: "ss",
		Ā: "A",
		Ă: "A",
		Ą: "A",
		ā: "a",
		ă: "a",
		ą: "a",
		Ć: "C",
		Ĉ: "C",
		Ċ: "C",
		Č: "C",
		ć: "c",
		ĉ: "c",
		ċ: "c",
		č: "c",
		Ď: "D",
		Đ: "D",
		ď: "d",
		đ: "d",
		Ē: "E",
		Ĕ: "E",
		Ė: "E",
		Ę: "E",
		Ě: "E",
		ē: "e",
		ĕ: "e",
		ė: "e",
		ę: "e",
		ě: "e",
		Ĝ: "G",
		Ğ: "G",
		Ġ: "G",
		Ģ: "G",
		ĝ: "g",
		ğ: "g",
		ġ: "g",
		ģ: "g",
		Ĥ: "H",
		Ħ: "H",
		ĥ: "h",
		ħ: "h",
		Ĩ: "I",
		Ī: "I",
		Ĭ: "I",
		Į: "I",
		İ: "I",
		ĩ: "i",
		ī: "i",
		ĭ: "i",
		į: "i",
		ı: "i",
		Ĵ: "J",
		ĵ: "j",
		Ķ: "K",
		ķ: "k",
		ĸ: "k",
		Ĺ: "L",
		Ļ: "L",
		Ľ: "L",
		Ŀ: "L",
		Ł: "L",
		ĺ: "l",
		ļ: "l",
		ľ: "l",
		ŀ: "l",
		ł: "l",
		Ń: "N",
		Ņ: "N",
		Ň: "N",
		Ŋ: "N",
		ń: "n",
		ņ: "n",
		ň: "n",
		ŋ: "n",
		Ō: "O",
		Ŏ: "O",
		Ő: "O",
		ō: "o",
		ŏ: "o",
		ő: "o",
		Ŕ: "R",
		Ŗ: "R",
		Ř: "R",
		ŕ: "r",
		ŗ: "r",
		ř: "r",
		Ś: "S",
		Ŝ: "S",
		Ş: "S",
		Š: "S",
		ś: "s",
		ŝ: "s",
		ş: "s",
		š: "s",
		Ţ: "T",
		Ť: "T",
		Ŧ: "T",
		ţ: "t",
		ť: "t",
		ŧ: "t",
		Ũ: "U",
		Ū: "U",
		Ŭ: "U",
		Ů: "U",
		Ű: "U",
		Ų: "U",
		ũ: "u",
		ū: "u",
		ŭ: "u",
		ů: "u",
		ű: "u",
		ų: "u",
		Ŵ: "W",
		ŵ: "w",
		Ŷ: "Y",
		ŷ: "y",
		Ÿ: "Y",
		Ź: "Z",
		Ż: "Z",
		Ž: "Z",
		ź: "z",
		ż: "z",
		ž: "z",
		Ĳ: "IJ",
		ĳ: "ij",
		Œ: "Oe",
		œ: "oe",
		ŉ: "'n",
		ſ: "s"
	},
	deburrLetter = basePropertyOf(deburredLetters);
const deburrLetter$1 = deburrLetter;
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
	rsComboMarksRange$1 = "\\u0300-\\u036f",
	reComboHalfMarksRange$1 = "\\ufe20-\\ufe2f",
	rsComboSymbolsRange$1 = "\\u20d0-\\u20ff",
	rsComboRange$1 = rsComboMarksRange$1 + reComboHalfMarksRange$1 + rsComboSymbolsRange$1,
	rsCombo$1 = "[" + rsComboRange$1 + "]",
	reComboMark = RegExp(rsCombo$1, "g");

function deburr(e) {
	return e = toString(e), e && e.replace(reLatin, deburrLetter$1).replace(reComboMark, "")
}
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

function asciiWords(e) {
	return e.match(reAsciiWord) || []
}
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

function hasUnicodeWord(e) {
	return reHasUnicodeWord.test(e)
}
var rsAstralRange = "\\ud800-\\udfff",
	rsComboMarksRange = "\\u0300-\\u036f",
	reComboHalfMarksRange = "\\ufe20-\\ufe2f",
	rsComboSymbolsRange = "\\u20d0-\\u20ff",
	rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
	rsDingbatRange = "\\u2700-\\u27bf",
	rsLowerRange = "a-z\\xdf-\\xf6\\xf8-\\xff",
	rsMathOpRange = "\\xac\\xb1\\xd7\\xf7",
	rsNonCharRange = "\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",
	rsPunctuationRange = "\\u2000-\\u206f",
	rsSpaceRange =
	" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
	rsUpperRange = "A-Z\\xc0-\\xd6\\xd8-\\xde",
	rsVarRange = "\\ufe0e\\ufe0f",
	rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange,
	rsApos$1 = "['’]",
	rsBreak = "[" + rsBreakRange + "]",
	rsCombo = "[" + rsComboRange + "]",
	rsDigits = "\\d+",
	rsDingbat = "[" + rsDingbatRange + "]",
	rsLower = "[" + rsLowerRange + "]",
	rsMisc = "[^" + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + "]",
	rsFitz = "\\ud83c[\\udffb-\\udfff]",
	rsModifier = "(?:" + rsCombo + "|" + rsFitz + ")",
	rsNonAstral = "[^" + rsAstralRange + "]",
	rsRegional = "(?:\\ud83c[\\udde6-\\uddff]){2}",
	rsSurrPair = "[\\ud800-\\udbff][\\udc00-\\udfff]",
	rsUpper = "[" + rsUpperRange + "]",
	rsZWJ = "\\u200d",
	rsMiscLower = "(?:" + rsLower + "|" + rsMisc + ")",
	rsMiscUpper = "(?:" + rsUpper + "|" + rsMisc + ")",
	rsOptContrLower = "(?:" + rsApos$1 + "(?:d|ll|m|re|s|t|ve))?",
	rsOptContrUpper = "(?:" + rsApos$1 + "(?:D|LL|M|RE|S|T|VE))?",
	reOptMod = rsModifier + "?",
	rsOptVar = "[" + rsVarRange + "]?",
	rsOptJoin = "(?:" + rsZWJ + "(?:" + [rsNonAstral, rsRegional, rsSurrPair].join("|") + ")" + rsOptVar + reOptMod +
	")*",
	rsOrdLower = "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",
	rsOrdUpper = "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",
	rsSeq = rsOptVar + reOptMod + rsOptJoin,
	rsEmoji = "(?:" + [rsDingbat, rsRegional, rsSurrPair].join("|") + ")" + rsSeq,
	reUnicodeWord = RegExp([rsUpper + "?" + rsLower + "+" + rsOptContrLower + "(?=" + [rsBreak, rsUpper, "$"].join(
		"|") + ")", rsMiscUpper + "+" + rsOptContrUpper + "(?=" + [rsBreak, rsUpper + rsMiscLower, "$"].join("|") +
		")", rsUpper + "?" + rsMiscLower + "+" + rsOptContrLower, rsUpper + "+" + rsOptContrUpper, rsOrdUpper,
		rsOrdLower, rsDigits, rsEmoji
	].join("|"), "g");

function unicodeWords(e) {
	return e.match(reUnicodeWord) || []
}

function words(e, t, n) {
	return e = toString(e), t = n ? void 0 : t, t === void 0 ? hasUnicodeWord(e) ? unicodeWords(e) : asciiWords(e) : e
		.match(t) || []
}
var rsApos = "['’]",
	reApos = RegExp(rsApos, "g");

function createCompounder(e) {
	return function(t) {
		return arrayReduce(words(deburr(t).replace(reApos, "")), e, "")
	}
}

function arrayFilter(e, t) {
	for (var n = -1, o = e == null ? 0 : e.length, r = 0, i = []; ++n < o;) {
		var a = e[n];
		t(a, n, e) && (i[r++] = a)
	}
	return i
}

function stubArray() {
	return []
}
var objectProto$2 = Object.prototype,
	propertyIsEnumerable = objectProto$2.propertyIsEnumerable,
	nativeGetSymbols = Object.getOwnPropertySymbols,
	getSymbols = nativeGetSymbols ? function(e) {
		return e == null ? [] : (e = Object(e), arrayFilter(nativeGetSymbols(e), function(t) {
			return propertyIsEnumerable.call(e, t)
		}))
	} : stubArray;
const getSymbols$1 = getSymbols;

function baseGetAllKeys(e, t, n) {
	var o = t(e);
	return isArray(e) ? o : arrayPush(o, n(e))
}

function getAllKeys(e) {
	return baseGetAllKeys(e, keys, getSymbols$1)
}
var DataView = getNative(root, "DataView");
const DataView$1 = DataView;
var Promise$1 = getNative(root, "Promise");
const Promise$2 = Promise$1;
var Set$1 = getNative(root, "Set");
const Set$2 = Set$1;
var mapTag$1 = "[object Map]",
	objectTag$1 = "[object Object]",
	promiseTag = "[object Promise]",
	setTag$1 = "[object Set]",
	weakMapTag = "[object WeakMap]",
	dataViewTag$1 = "[object DataView]",
	dataViewCtorString = toSource(DataView$1),
	mapCtorString = toSource(Map$1),
	promiseCtorString = toSource(Promise$2),
	setCtorString = toSource(Set$2),
	weakMapCtorString = toSource(WeakMap$2),
	getTag = baseGetTag;
(DataView$1 && getTag(new DataView$1(new ArrayBuffer(1))) != dataViewTag$1 || Map$1 && getTag(new Map$1) != mapTag$1 ||
	Promise$2 && getTag(Promise$2.resolve()) != promiseTag || Set$2 && getTag(new Set$2) != setTag$1 || WeakMap$2 &&
	getTag(new WeakMap$2) != weakMapTag) && (getTag = function(e) {
	var t = baseGetTag(e),
		n = t == objectTag$1 ? e.constructor : void 0,
		o = n ? toSource(n) : "";
	if (o) switch (o) {
		case dataViewCtorString:
			return dataViewTag$1;
		case mapCtorString:
			return mapTag$1;
		case promiseCtorString:
			return promiseTag;
		case setCtorString:
			return setTag$1;
		case weakMapCtorString:
			return weakMapTag
	}
	return t
});
const getTag$1 = getTag;
var HASH_UNDEFINED = "__lodash_hash_undefined__";

function setCacheAdd(e) {
	return this.__data__.set(e, HASH_UNDEFINED), this
}

function setCacheHas(e) {
	return this.__data__.has(e)
}

function SetCache(e) {
	var t = -1,
		n = e == null ? 0 : e.length;
	for (this.__data__ = new MapCache; ++t < n;) this.add(e[t])
}
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

function arraySome(e, t) {
	for (var n = -1, o = e == null ? 0 : e.length; ++n < o;)
		if (t(e[n], n, e)) return !0;
	return !1
}

function cacheHas(e, t) {
	return e.has(t)
}
var COMPARE_PARTIAL_FLAG$5 = 1,
	COMPARE_UNORDERED_FLAG$3 = 2;

function equalArrays(e, t, n, o, r, i) {
	var a = n & COMPARE_PARTIAL_FLAG$5,
		l = e.length,
		s = t.length;
	if (l != s && !(a && s > l)) return !1;
	var u = i.get(e),
		d = i.get(t);
	if (u && d) return u == t && d == e;
	var f = -1,
		v = !0,
		g = n & COMPARE_UNORDERED_FLAG$3 ? new SetCache : void 0;
	for (i.set(e, t), i.set(t, e); ++f < l;) {
		var p = e[f],
			m = t[f];
		if (o) var C = a ? o(m, p, f, t, e, i) : o(p, m, f, e, t, i);
		if (C !== void 0) {
			if (C) continue;
			v = !1;
			break
		}
		if (g) {
			if (!arraySome(t, function(b, x) {
					if (!cacheHas(g, x) && (p === b || r(p, b, n, o, i))) return g.push(x)
				})) {
				v = !1;
				break
			}
		} else if (!(p === m || r(p, m, n, o, i))) {
			v = !1;
			break
		}
	}
	return i.delete(e), i.delete(t), v
}

function mapToArray(e) {
	var t = -1,
		n = Array(e.size);
	return e.forEach(function(o, r) {
		n[++t] = [r, o]
	}), n
}

function setToArray(e) {
	var t = -1,
		n = Array(e.size);
	return e.forEach(function(o) {
		n[++t] = o
	}), n
}
var COMPARE_PARTIAL_FLAG$4 = 1,
	COMPARE_UNORDERED_FLAG$2 = 2,
	boolTag = "[object Boolean]",
	dateTag = "[object Date]",
	errorTag = "[object Error]",
	mapTag = "[object Map]",
	numberTag = "[object Number]",
	regexpTag = "[object RegExp]",
	setTag = "[object Set]",
	stringTag = "[object String]",
	symbolTag = "[object Symbol]",
	arrayBufferTag = "[object ArrayBuffer]",
	dataViewTag = "[object DataView]",
	symbolProto = Symbol$1 ? Symbol$1.prototype : void 0,
	symbolValueOf = symbolProto ? symbolProto.valueOf : void 0;

function equalByTag(e, t, n, o, r, i, a) {
	switch (n) {
		case dataViewTag:
			if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
			e = e.buffer, t = t.buffer;
		case arrayBufferTag:
			return !(e.byteLength != t.byteLength || !i(new Uint8Array(e), new Uint8Array(t)));
		case boolTag:
		case dateTag:
		case numberTag:
			return eq(+e, +t);
		case errorTag:
			return e.name == t.name && e.message == t.message;
		case regexpTag:
		case stringTag:
			return e == t + "";
		case mapTag:
			var l = mapToArray;
		case setTag:
			var s = o & COMPARE_PARTIAL_FLAG$4;
			if (l || (l = setToArray), e.size != t.size && !s) return !1;
			var u = a.get(e);
			if (u) return u == t;
			o |= COMPARE_UNORDERED_FLAG$2, a.set(e, t);
			var d = equalArrays(l(e), l(t), o, r, i, a);
			return a.delete(e), d;
		case symbolTag:
			if (symbolValueOf) return symbolValueOf.call(e) == symbolValueOf.call(t)
	}
	return !1
}
var COMPARE_PARTIAL_FLAG$3 = 1,
	objectProto$1 = Object.prototype,
	hasOwnProperty$1 = objectProto$1.hasOwnProperty;

function equalObjects(e, t, n, o, r, i) {
	var a = n & COMPARE_PARTIAL_FLAG$3,
		l = getAllKeys(e),
		s = l.length,
		u = getAllKeys(t),
		d = u.length;
	if (s != d && !a) return !1;
	for (var f = s; f--;) {
		var v = l[f];
		if (!(a ? v in t : hasOwnProperty$1.call(t, v))) return !1
	}
	var g = i.get(e),
		p = i.get(t);
	if (g && p) return g == t && p == e;
	var m = !0;
	i.set(e, t), i.set(t, e);
	for (var C = a; ++f < s;) {
		v = l[f];
		var b = e[v],
			x = t[v];
		if (o) var S = a ? o(x, b, v, t, e, i) : o(b, x, v, e, t, i);
		if (!(S === void 0 ? b === x || r(b, x, n, o, i) : S)) {
			m = !1;
			break
		}
		C || (C = v == "constructor")
	}
	if (m && !C) {
		var w = e.constructor,
			y = t.constructor;
		w != y && "constructor" in e && "constructor" in t && !(typeof w == "function" && w instanceof w && typeof y ==
			"function" && y instanceof y) && (m = !1)
	}
	return i.delete(e), i.delete(t), m
}
var COMPARE_PARTIAL_FLAG$2 = 1,
	argsTag = "[object Arguments]",
	arrayTag = "[object Array]",
	objectTag = "[object Object]",
	objectProto = Object.prototype,
	hasOwnProperty = objectProto.hasOwnProperty;

function baseIsEqualDeep(e, t, n, o, r, i) {
	var a = isArray(e),
		l = isArray(t),
		s = a ? arrayTag : getTag$1(e),
		u = l ? arrayTag : getTag$1(t);
	s = s == argsTag ? objectTag : s, u = u == argsTag ? objectTag : u;
	var d = s == objectTag,
		f = u == objectTag,
		v = s == u;
	if (v && isBuffer(e)) {
		if (!isBuffer(t)) return !1;
		a = !0, d = !1
	}
	if (v && !d) return i || (i = new Stack), a || isTypedArray(e) ? equalArrays(e, t, n, o, r, i) : equalByTag(e, t, s,
		n, o, r, i);
	if (!(n & COMPARE_PARTIAL_FLAG$2)) {
		var g = d && hasOwnProperty.call(e, "__wrapped__"),
			p = f && hasOwnProperty.call(t, "__wrapped__");
		if (g || p) {
			var m = g ? e.value() : e,
				C = p ? t.value() : t;
			return i || (i = new Stack), r(m, C, n, o, i)
		}
	}
	return v ? (i || (i = new Stack), equalObjects(e, t, n, o, r, i)) : !1
}

function baseIsEqual(e, t, n, o, r) {
	return e === t ? !0 : e == null || t == null || !isObjectLike(e) && !isObjectLike(t) ? e !== e && t !== t :
		baseIsEqualDeep(e, t, n, o, baseIsEqual, r)
}
var COMPARE_PARTIAL_FLAG$1 = 1,
	COMPARE_UNORDERED_FLAG$1 = 2;

function baseIsMatch(e, t, n, o) {
	var r = n.length,
		i = r,
		a = !o;
	if (e == null) return !i;
	for (e = Object(e); r--;) {
		var l = n[r];
		if (a && l[2] ? l[1] !== e[l[0]] : !(l[0] in e)) return !1
	}
	for (; ++r < i;) {
		l = n[r];
		var s = l[0],
			u = e[s],
			d = l[1];
		if (a && l[2]) {
			if (u === void 0 && !(s in e)) return !1
		} else {
			var f = new Stack;
			if (o) var v = o(u, d, s, e, t, f);
			if (!(v === void 0 ? baseIsEqual(d, u, COMPARE_PARTIAL_FLAG$1 | COMPARE_UNORDERED_FLAG$1, o, f) : v))
			return !1
		}
	}
	return !0
}

function isStrictComparable(e) {
	return e === e && !isObject(e)
}

function getMatchData(e) {
	for (var t = keys(e), n = t.length; n--;) {
		var o = t[n],
			r = e[o];
		t[n] = [o, r, isStrictComparable(r)]
	}
	return t
}

function matchesStrictComparable(e, t) {
	return function(n) {
		return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n))
	}
}

function baseMatches(e) {
	var t = getMatchData(e);
	return t.length == 1 && t[0][2] ? matchesStrictComparable(t[0][0], t[0][1]) : function(n) {
		return n === e || baseIsMatch(n, e, t)
	}
}

function baseHasIn(e, t) {
	return e != null && t in Object(e)
}

function hasPath(e, t, n) {
	t = castPath(t, e);
	for (var o = -1, r = t.length, i = !1; ++o < r;) {
		var a = toKey(t[o]);
		if (!(i = e != null && n(e, a))) break;
		e = e[a]
	}
	return i || ++o != r ? i : (r = e == null ? 0 : e.length, !!r && isLength(r) && isIndex(a, r) && (isArray(e) ||
		isArguments(e)))
}

function hasIn(e, t) {
	return e != null && hasPath(e, t, baseHasIn)
}
var COMPARE_PARTIAL_FLAG = 1,
	COMPARE_UNORDERED_FLAG = 2;

function baseMatchesProperty(e, t) {
	return isKey(e) && isStrictComparable(t) ? matchesStrictComparable(toKey(e), t) : function(n) {
		var o = get(n, e);
		return o === void 0 && o === t ? hasIn(n, e) : baseIsEqual(t, o, COMPARE_PARTIAL_FLAG |
			COMPARE_UNORDERED_FLAG)
	}
}

function baseProperty(e) {
	return function(t) {
		return t == null ? void 0 : t[e]
	}
}

function basePropertyDeep(e) {
	return function(t) {
		return baseGet(t, e)
	}
}

function property(e) {
	return isKey(e) ? baseProperty(toKey(e)) : basePropertyDeep(e)
}

function baseIteratee(e) {
	return typeof e == "function" ? e : e == null ? identity : typeof e == "object" ? isArray(e) ? baseMatchesProperty(
		e[0], e[1]) : baseMatches(e) : property(e)
}

function baseForOwn(e, t) {
	return e && baseFor(e, t, keys)
}

function createBaseEach(e, t) {
	return function(n, o) {
		if (n == null) return n;
		if (!isArrayLike(n)) return e(n, o);
		for (var r = n.length, i = t ? r : -1, a = Object(n);
			(t ? i-- : ++i < r) && o(a[i], i, a) !== !1;);
		return n
	}
}
var baseEach = createBaseEach(baseForOwn);
const baseEach$1 = baseEach;

function baseMap(e, t) {
	var n = -1,
		o = isArrayLike(e) ? Array(e.length) : [];
	return baseEach$1(e, function(r, i, a) {
		o[++n] = t(r, i, a)
	}), o
}

function map(e, t) {
	var n = isArray(e) ? arrayMap : baseMap;
	return n(e, baseIteratee(t))
}
var kebabCase = createCompounder(function(e, t, n) {
	return e + (n ? "-" : "") + t.toLowerCase()
});
const kebabCase$1 = kebabCase,
	enUS = {
		name: "en-US",
		global: {
			undo: "Undo",
			redo: "Redo",
			confirm: "Confirm",
			clear: "Clear"
		},
		Popconfirm: {
			positiveText: "Confirm",
			negativeText: "Cancel"
		},
		Cascader: {
			placeholder: "Please Select",
			loading: "Loading",
			loadingRequiredMessage: e => `Please load all ${e}'s descendants before checking it.`
		},
		Time: {
			dateFormat: "yyyy-MM-dd",
			dateTimeFormat: "yyyy-MM-dd HH:mm:ss"
		},
		DatePicker: {
			yearFormat: "yyyy",
			monthFormat: "MMM",
			dayFormat: "eeeeee",
			yearTypeFormat: "yyyy",
			monthTypeFormat: "yyyy-MM",
			dateFormat: "yyyy-MM-dd",
			dateTimeFormat: "yyyy-MM-dd HH:mm:ss",
			quarterFormat: "yyyy-qqq",
			weekFormat: "yyyy-w",
			clear: "Clear",
			now: "Now",
			confirm: "Confirm",
			selectTime: "Select Time",
			selectDate: "Select Date",
			datePlaceholder: "Select Date",
			datetimePlaceholder: "Select Date and Time",
			monthPlaceholder: "Select Month",
			yearPlaceholder: "Select Year",
			quarterPlaceholder: "Select Quarter",
			weekPlaceholder: "Select Week",
			startDatePlaceholder: "Start Date",
			endDatePlaceholder: "End Date",
			startDatetimePlaceholder: "Start Date and Time",
			endDatetimePlaceholder: "End Date and Time",
			startMonthPlaceholder: "Start Month",
			endMonthPlaceholder: "End Month",
			monthBeforeYear: !0,
			firstDayOfWeek: 6,
			today: "Today"
		},
		DataTable: {
			checkTableAll: "Select all in the table",
			uncheckTableAll: "Unselect all in the table",
			confirm: "Confirm",
			clear: "Clear"
		},
		LegacyTransfer: {
			sourceTitle: "Source",
			targetTitle: "Target"
		},
		Transfer: {
			selectAll: "Select all",
			unselectAll: "Unselect all",
			clearAll: "Clear",
			total: e => `Total ${e} items`,
			selected: e => `${e} items selected`
		},
		Empty: {
			description: "No Data"
		},
		Select: {
			placeholder: "Please Select"
		},
		TimePicker: {
			placeholder: "Select Time",
			positiveText: "OK",
			negativeText: "Cancel",
			now: "Now",
			clear: "Clear"
		},
		Pagination: {
			goto: "Goto",
			selectionSuffix: "page"
		},
		DynamicTags: {
			add: "Add"
		},
		Log: {
			loading: "Loading"
		},
		Input: {
			placeholder: "Please Input"
		},
		InputNumber: {
			placeholder: "Please Input"
		},
		DynamicInput: {
			create: "Create"
		},
		ThemeEditor: {
			title: "Theme Editor",
			clearAllVars: "Clear All Variables",
			clearSearch: "Clear Search",
			filterCompName: "Filter Component Name",
			filterVarName: "Filter Variable Name",
			import: "Import",
			export: "Export",
			restore: "Reset to Default"
		},
		Image: {
			tipPrevious: "Previous picture (←)",
			tipNext: "Next picture (→)",
			tipCounterclockwise: "Counterclockwise",
			tipClockwise: "Clockwise",
			tipZoomOut: "Zoom out",
			tipZoomIn: "Zoom in",
			tipDownload: "Download",
			tipClose: "Close (Esc)",
			tipOriginalSize: "Zoom to original size"
		}
	},
	enUS$1 = enUS;

function buildFormatLongFn(e) {
	return function() {
		var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
			n = t.width ? String(t.width) : e.defaultWidth,
			o = e.formats[n] || e.formats[e.defaultWidth];
		return o
	}
}

function buildLocalizeFn(e) {
	return function(t, n) {
		var o = n != null && n.context ? String(n.context) : "standalone",
			r;
		if (o === "formatting" && e.formattingValues) {
			var i = e.defaultFormattingWidth || e.defaultWidth,
				a = n != null && n.width ? String(n.width) : i;
			r = e.formattingValues[a] || e.formattingValues[i]
		} else {
			var l = e.defaultWidth,
				s = n != null && n.width ? String(n.width) : e.defaultWidth;
			r = e.values[s] || e.values[l]
		}
		var u = e.argumentCallback ? e.argumentCallback(t) : t;
		return r[u]
	}
}

function buildMatchFn(e) {
	return function(t) {
		var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
			o = n.width,
			r = o && e.matchPatterns[o] || e.matchPatterns[e.defaultMatchWidth],
			i = t.match(r);
		if (!i) return null;
		var a = i[0],
			l = o && e.parsePatterns[o] || e.parsePatterns[e.defaultParseWidth],
			s = Array.isArray(l) ? findIndex(l, function(f) {
				return f.test(a)
			}) : findKey(l, function(f) {
				return f.test(a)
			}),
			u;
		u = e.valueCallback ? e.valueCallback(s) : s, u = n.valueCallback ? n.valueCallback(u) : u;
		var d = t.slice(a.length);
		return {
			value: u,
			rest: d
		}
	}
}

function findKey(e, t) {
	for (var n in e)
		if (e.hasOwnProperty(n) && t(e[n])) return n
}

function findIndex(e, t) {
	for (var n = 0; n < e.length; n++)
		if (t(e[n])) return n
}

function buildMatchPatternFn(e) {
	return function(t) {
		var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
			o = t.match(e.matchPattern);
		if (!o) return null;
		var r = o[0],
			i = t.match(e.parsePattern);
		if (!i) return null;
		var a = e.valueCallback ? e.valueCallback(i[0]) : i[0];
		a = n.valueCallback ? n.valueCallback(a) : a;
		var l = t.slice(r.length);
		return {
			value: a,
			rest: l
		}
	}
}
var formatDistanceLocale = {
		lessThanXSeconds: {
			one: "less than a second",
			other: "less than {{count}} seconds"
		},
		xSeconds: {
			one: "1 second",
			other: "{{count}} seconds"
		},
		halfAMinute: "half a minute",
		lessThanXMinutes: {
			one: "less than a minute",
			other: "less than {{count}} minutes"
		},
		xMinutes: {
			one: "1 minute",
			other: "{{count}} minutes"
		},
		aboutXHours: {
			one: "about 1 hour",
			other: "about {{count}} hours"
		},
		xHours: {
			one: "1 hour",
			other: "{{count}} hours"
		},
		xDays: {
			one: "1 day",
			other: "{{count}} days"
		},
		aboutXWeeks: {
			one: "about 1 week",
			other: "about {{count}} weeks"
		},
		xWeeks: {
			one: "1 week",
			other: "{{count}} weeks"
		},
		aboutXMonths: {
			one: "about 1 month",
			other: "about {{count}} months"
		},
		xMonths: {
			one: "1 month",
			other: "{{count}} months"
		},
		aboutXYears: {
			one: "about 1 year",
			other: "about {{count}} years"
		},
		xYears: {
			one: "1 year",
			other: "{{count}} years"
		},
		overXYears: {
			one: "over 1 year",
			other: "over {{count}} years"
		},
		almostXYears: {
			one: "almost 1 year",
			other: "almost {{count}} years"
		}
	},
	formatDistance = function(t, n, o) {
		var r, i = formatDistanceLocale[t];
		return typeof i == "string" ? r = i : n === 1 ? r = i.one : r = i.other.replace("{{count}}", n.toString()), o !=
			null && o.addSuffix ? o.comparison && o.comparison > 0 ? "in " + r : r + " ago" : r
	};
const formatDistance$1 = formatDistance;
var dateFormats = {
		full: "EEEE, MMMM do, y",
		long: "MMMM do, y",
		medium: "MMM d, y",
		short: "MM/dd/yyyy"
	},
	timeFormats = {
		full: "h:mm:ss a zzzz",
		long: "h:mm:ss a z",
		medium: "h:mm:ss a",
		short: "h:mm a"
	},
	dateTimeFormats = {
		full: "{{date}} 'at' {{time}}",
		long: "{{date}} 'at' {{time}}",
		medium: "{{date}}, {{time}}",
		short: "{{date}}, {{time}}"
	},
	formatLong = {
		date: buildFormatLongFn({
			formats: dateFormats,
			defaultWidth: "full"
		}),
		time: buildFormatLongFn({
			formats: timeFormats,
			defaultWidth: "full"
		}),
		dateTime: buildFormatLongFn({
			formats: dateTimeFormats,
			defaultWidth: "full"
		})
	};
const formatLong$1 = formatLong;
var formatRelativeLocale = {
		lastWeek: "'last' eeee 'at' p",
		yesterday: "'yesterday at' p",
		today: "'today at' p",
		tomorrow: "'tomorrow at' p",
		nextWeek: "eeee 'at' p",
		other: "P"
	},
	formatRelative = function(t, n, o, r) {
		return formatRelativeLocale[t]
	};
const formatRelative$1 = formatRelative;
var eraValues = {
		narrow: ["B", "A"],
		abbreviated: ["BC", "AD"],
		wide: ["Before Christ", "Anno Domini"]
	},
	quarterValues = {
		narrow: ["1", "2", "3", "4"],
		abbreviated: ["Q1", "Q2", "Q3", "Q4"],
		wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"]
	},
	monthValues = {
		narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
		abbreviated: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		wide: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October",
			"November", "December"
		]
	},
	dayValues = {
		narrow: ["S", "M", "T", "W", "T", "F", "S"],
		short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
		abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		wide: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
	},
	dayPeriodValues = {
		narrow: {
			am: "a",
			pm: "p",
			midnight: "mi",
			noon: "n",
			morning: "morning",
			afternoon: "afternoon",
			evening: "evening",
			night: "night"
		},
		abbreviated: {
			am: "AM",
			pm: "PM",
			midnight: "midnight",
			noon: "noon",
			morning: "morning",
			afternoon: "afternoon",
			evening: "evening",
			night: "night"
		},
		wide: {
			am: "a.m.",
			pm: "p.m.",
			midnight: "midnight",
			noon: "noon",
			morning: "morning",
			afternoon: "afternoon",
			evening: "evening",
			night: "night"
		}
	},
	formattingDayPeriodValues = {
		narrow: {
			am: "a",
			pm: "p",
			midnight: "mi",
			noon: "n",
			morning: "in the morning",
			afternoon: "in the afternoon",
			evening: "in the evening",
			night: "at night"
		},
		abbreviated: {
			am: "AM",
			pm: "PM",
			midnight: "midnight",
			noon: "noon",
			morning: "in the morning",
			afternoon: "in the afternoon",
			evening: "in the evening",
			night: "at night"
		},
		wide: {
			am: "a.m.",
			pm: "p.m.",
			midnight: "midnight",
			noon: "noon",
			morning: "in the morning",
			afternoon: "in the afternoon",
			evening: "in the evening",
			night: "at night"
		}
	},
	ordinalNumber = function(t, n) {
		var o = Number(t),
			r = o % 100;
		if (r > 20 || r < 10) switch (r % 10) {
			case 1:
				return o + "st";
			case 2:
				return o + "nd";
			case 3:
				return o + "rd"
		}
		return o + "th"
	},
	localize = {
		ordinalNumber,
		era: buildLocalizeFn({
			values: eraValues,
			defaultWidth: "wide"
		}),
		quarter: buildLocalizeFn({
			values: quarterValues,
			defaultWidth: "wide",
			argumentCallback: function(t) {
				return t - 1
			}
		}),
		month: buildLocalizeFn({
			values: monthValues,
			defaultWidth: "wide"
		}),
		day: buildLocalizeFn({
			values: dayValues,
			defaultWidth: "wide"
		}),
		dayPeriod: buildLocalizeFn({
			values: dayPeriodValues,
			defaultWidth: "wide",
			formattingValues: formattingDayPeriodValues,
			defaultFormattingWidth: "wide"
		})
	};
const localize$1 = localize;
var matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i,
	parseOrdinalNumberPattern = /\d+/i,
	matchEraPatterns = {
		narrow: /^(b|a)/i,
		abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
		wide: /^(before christ|before common era|anno domini|common era)/i
	},
	parseEraPatterns = {
		any: [/^b/i, /^(a|c)/i]
	},
	matchQuarterPatterns = {
		narrow: /^[1234]/i,
		abbreviated: /^q[1234]/i,
		wide: /^[1234](th|st|nd|rd)? quarter/i
	},
	parseQuarterPatterns = {
		any: [/1/i, /2/i, /3/i, /4/i]
	},
	matchMonthPatterns = {
		narrow: /^[jfmasond]/i,
		abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
		wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i
	},
	parseMonthPatterns = {
		narrow: [/^j/i, /^f/i, /^m/i, /^a/i, /^m/i, /^j/i, /^j/i, /^a/i, /^s/i, /^o/i, /^n/i, /^d/i],
		any: [/^ja/i, /^f/i, /^mar/i, /^ap/i, /^may/i, /^jun/i, /^jul/i, /^au/i, /^s/i, /^o/i, /^n/i, /^d/i]
	},
	matchDayPatterns = {
		narrow: /^[smtwf]/i,
		short: /^(su|mo|tu|we|th|fr|sa)/i,
		abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
		wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i
	},
	parseDayPatterns = {
		narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
		any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i]
	},
	matchDayPeriodPatterns = {
		narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
		any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i
	},
	parseDayPeriodPatterns = {
		any: {
			am: /^a/i,
			pm: /^p/i,
			midnight: /^mi/i,
			noon: /^no/i,
			morning: /morning/i,
			afternoon: /afternoon/i,
			evening: /evening/i,
			night: /night/i
		}
	},
	match = {
		ordinalNumber: buildMatchPatternFn({
			matchPattern: matchOrdinalNumberPattern,
			parsePattern: parseOrdinalNumberPattern,
			valueCallback: function(t) {
				return parseInt(t, 10)
			}
		}),
		era: buildMatchFn({
			matchPatterns: matchEraPatterns,
			defaultMatchWidth: "wide",
			parsePatterns: parseEraPatterns,
			defaultParseWidth: "any"
		}),
		quarter: buildMatchFn({
			matchPatterns: matchQuarterPatterns,
			defaultMatchWidth: "wide",
			parsePatterns: parseQuarterPatterns,
			defaultParseWidth: "any",
			valueCallback: function(t) {
				return t + 1
			}
		}),
		month: buildMatchFn({
			matchPatterns: matchMonthPatterns,
			defaultMatchWidth: "wide",
			parsePatterns: parseMonthPatterns,
			defaultParseWidth: "any"
		}),
		day: buildMatchFn({
			matchPatterns: matchDayPatterns,
			defaultMatchWidth: "wide",
			parsePatterns: parseDayPatterns,
			defaultParseWidth: "any"
		}),
		dayPeriod: buildMatchFn({
			matchPatterns: matchDayPeriodPatterns,
			defaultMatchWidth: "any",
			parsePatterns: parseDayPeriodPatterns,
			defaultParseWidth: "any"
		})
	};
const match$1 = match;
var locale = {
	code: "en-US",
	formatDistance: formatDistance$1,
	formatLong: formatLong$1,
	formatRelative: formatRelative$1,
	localize: localize$1,
	match: match$1,
	options: {
		weekStartsOn: 0,
		firstWeekContainsDate: 1
	}
};
const defaultLocale = locale,
	dateEnUs = {
		name: "en-US",
		locale: defaultLocale
	},
	dateEnUS = dateEnUs;

function useLocale(e) {
	const {
		mergedLocaleRef: t,
		mergedDateLocaleRef: n
	} = inject(configProviderInjectionKey, null) || {}, o = computed(() => {
		var i, a;
		return (a = (i = t == null ? void 0 : t.value) === null || i === void 0 ? void 0 : i[e]) !== null &&
			a !== void 0 ? a : enUS$1[e]
	});
	return {
		dateLocaleRef: computed(() => {
			var i;
			return (i = n == null ? void 0 : n.value) !== null && i !== void 0 ? i : dateEnUS
		}),
		localeRef: o
	}
}
const AddIcon = defineComponent({
		name: "Add",
		render() {
			return h("svg", {
				width: "512",
				height: "512",
				viewBox: "0 0 512 512",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, h("path", {
				d: "M256 112V400M400 256H112",
				stroke: "currentColor",
				"stroke-width": "32",
				"stroke-linecap": "round",
				"stroke-linejoin": "round"
			}))
		}
	}),
	AttachIcon = replaceable("attach", h("svg", {
		viewBox: "0 0 16 16",
		version: "1.1",
		xmlns: "http://www.w3.org/2000/svg"
	}, h("g", {
		stroke: "none",
		"stroke-width": "1",
		fill: "none",
		"fill-rule": "evenodd"
	}, h("g", {
		fill: "currentColor",
		"fill-rule": "nonzero"
	}, h("path", {
		d: "M3.25735931,8.70710678 L7.85355339,4.1109127 C8.82986412,3.13460197 10.4127766,3.13460197 11.3890873,4.1109127 C12.365398,5.08722343 12.365398,6.67013588 11.3890873,7.64644661 L6.08578644,12.9497475 C5.69526215,13.3402718 5.06209717,13.3402718 4.67157288,12.9497475 C4.28104858,12.5592232 4.28104858,11.9260582 4.67157288,11.5355339 L9.97487373,6.23223305 C10.1701359,6.0369709 10.1701359,5.72038841 9.97487373,5.52512627 C9.77961159,5.32986412 9.4630291,5.32986412 9.26776695,5.52512627 L3.96446609,10.8284271 C3.18341751,11.6094757 3.18341751,12.8758057 3.96446609,13.6568542 C4.74551468,14.4379028 6.01184464,14.4379028 6.79289322,13.6568542 L12.0961941,8.35355339 C13.4630291,6.98671837 13.4630291,4.77064094 12.0961941,3.40380592 C10.7293591,2.0369709 8.51328163,2.0369709 7.14644661,3.40380592 L2.55025253,8 C2.35499039,8.19526215 2.35499039,8.51184464 2.55025253,8.70710678 C2.74551468,8.90236893 3.06209717,8.90236893 3.25735931,8.70710678 Z"
	}))))),
	FinishedIcon = defineComponent({
		name: "Checkmark",
		render() {
			return h("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 16 16"
			}, h("g", {
				fill: "none"
			}, h("path", {
				d: "M14.046 3.486a.75.75 0 0 1-.032 1.06l-7.93 7.474a.85.85 0 0 1-1.188-.022l-2.68-2.72a.75.75 0 1 1 1.068-1.053l2.234 2.267l7.468-7.038a.75.75 0 0 1 1.06.032z",
				fill: "currentColor"
			})))
		}
	}),
	ChevronRightIcon = defineComponent({
		name: "ChevronRight",
		render() {
			return h("svg", {
				viewBox: "0 0 16 16",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, h("path", {
				d: "M5.64645 3.14645C5.45118 3.34171 5.45118 3.65829 5.64645 3.85355L9.79289 8L5.64645 12.1464C5.45118 12.3417 5.45118 12.6583 5.64645 12.8536C5.84171 13.0488 6.15829 13.0488 6.35355 12.8536L10.8536 8.35355C11.0488 8.15829 11.0488 7.84171 10.8536 7.64645L6.35355 3.14645C6.15829 2.95118 5.84171 2.95118 5.64645 3.14645Z",
				fill: "currentColor"
			}))
		}
	}),
	EyeIcon = defineComponent({
		name: "Eye",
		render() {
			return h("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 512 512"
			}, h("path", {
				d: "M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z",
				fill: "none",
				stroke: "currentColor",
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				"stroke-width": "32"
			}), h("circle", {
				cx: "256",
				cy: "256",
				r: "80",
				fill: "none",
				stroke: "currentColor",
				"stroke-miterlimit": "10",
				"stroke-width": "32"
			}))
		}
	}),
	EyeOffIcon = defineComponent({
		name: "EyeOff",
		render() {
			return h("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 512 512"
			}, h("path", {
				d: "M432 448a15.92 15.92 0 0 1-11.31-4.69l-352-352a16 16 0 0 1 22.62-22.62l352 352A16 16 0 0 1 432 448z",
				fill: "currentColor"
			}), h("path", {
				d: "M255.66 384c-41.49 0-81.5-12.28-118.92-36.5c-34.07-22-64.74-53.51-88.7-91v-.08c19.94-28.57 41.78-52.73 65.24-72.21a2 2 0 0 0 .14-2.94L93.5 161.38a2 2 0 0 0-2.71-.12c-24.92 21-48.05 46.76-69.08 76.92a31.92 31.92 0 0 0-.64 35.54c26.41 41.33 60.4 76.14 98.28 100.65C162 402 207.9 416 255.66 416a239.13 239.13 0 0 0 75.8-12.58a2 2 0 0 0 .77-3.31l-21.58-21.58a4 4 0 0 0-3.83-1a204.8 204.8 0 0 1-51.16 6.47z",
				fill: "currentColor"
			}), h("path", {
				d: "M490.84 238.6c-26.46-40.92-60.79-75.68-99.27-100.53C349 110.55 302 96 255.66 96a227.34 227.34 0 0 0-74.89 12.83a2 2 0 0 0-.75 3.31l21.55 21.55a4 4 0 0 0 3.88 1a192.82 192.82 0 0 1 50.21-6.69c40.69 0 80.58 12.43 118.55 37c34.71 22.4 65.74 53.88 89.76 91a.13.13 0 0 1 0 .16a310.72 310.72 0 0 1-64.12 72.73a2 2 0 0 0-.15 2.95l19.9 19.89a2 2 0 0 0 2.7.13a343.49 343.49 0 0 0 68.64-78.48a32.2 32.2 0 0 0-.1-34.78z",
				fill: "currentColor"
			}), h("path", {
				d: "M256 160a95.88 95.88 0 0 0-21.37 2.4a2 2 0 0 0-1 3.38l112.59 112.56a2 2 0 0 0 3.38-1A96 96 0 0 0 256 160z",
				fill: "currentColor"
			}), h("path", {
				d: "M165.78 233.66a2 2 0 0 0-3.38 1a96 96 0 0 0 115 115a2 2 0 0 0 1-3.38z",
				fill: "currentColor"
			}))
		}
	}),
	TrashIcon = replaceable("trash", h("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 512 512"
	}, h("path", {
		d: "M432,144,403.33,419.74A32,32,0,0,1,371.55,448H140.46a32,32,0,0,1-31.78-28.26L80,144",
		style: "fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"
	}), h("rect", {
		x: "32",
		y: "64",
		width: "448",
		height: "80",
		rx: "16",
		ry: "16",
		style: "fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"
	}), h("line", {
		x1: "312",
		y1: "240",
		x2: "200",
		y2: "352",
		style: "fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"
	}), h("line", {
		x1: "312",
		y1: "352",
		x2: "200",
		y2: "240",
		style: "fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"
	}))),
	DownloadIcon = replaceable("download", h("svg", {
		viewBox: "0 0 16 16",
		version: "1.1",
		xmlns: "http://www.w3.org/2000/svg"
	}, h("g", {
		stroke: "none",
		"stroke-width": "1",
		fill: "none",
		"fill-rule": "evenodd"
	}, h("g", {
		fill: "currentColor",
		"fill-rule": "nonzero"
	}, h("path", {
		d: "M3.5,13 L12.5,13 C12.7761424,13 13,13.2238576 13,13.5 C13,13.7454599 12.8231248,13.9496084 12.5898756,13.9919443 L12.5,14 L3.5,14 C3.22385763,14 3,13.7761424 3,13.5 C3,13.2545401 3.17687516,13.0503916 3.41012437,13.0080557 L3.5,13 L12.5,13 L3.5,13 Z M7.91012437,1.00805567 L8,1 C8.24545989,1 8.44960837,1.17687516 8.49194433,1.41012437 L8.5,1.5 L8.5,10.292 L11.1819805,7.6109127 C11.3555469,7.43734635 11.6249713,7.4180612 11.8198394,7.55305725 L11.8890873,7.6109127 C12.0626536,7.78447906 12.0819388,8.05390346 11.9469427,8.2487716 L11.8890873,8.31801948 L8.35355339,11.8535534 C8.17998704,12.0271197 7.91056264,12.0464049 7.7156945,11.9114088 L7.64644661,11.8535534 L4.1109127,8.31801948 C3.91565056,8.12275734 3.91565056,7.80617485 4.1109127,7.6109127 C4.28447906,7.43734635 4.55390346,7.4180612 4.7487716,7.55305725 L4.81801948,7.6109127 L7.5,10.292 L7.5,1.5 C7.5,1.25454011 7.67687516,1.05039163 7.91012437,1.00805567 L8,1 L7.91012437,1.00805567 Z"
	}))))),
	EmptyIcon = defineComponent({
		name: "Empty",
		render() {
			return h("svg", {
				viewBox: "0 0 28 28",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, h("path", {
				d: "M26 7.5C26 11.0899 23.0899 14 19.5 14C15.9101 14 13 11.0899 13 7.5C13 3.91015 15.9101 1 19.5 1C23.0899 1 26 3.91015 26 7.5ZM16.8536 4.14645C16.6583 3.95118 16.3417 3.95118 16.1464 4.14645C15.9512 4.34171 15.9512 4.65829 16.1464 4.85355L18.7929 7.5L16.1464 10.1464C15.9512 10.3417 15.9512 10.6583 16.1464 10.8536C16.3417 11.0488 16.6583 11.0488 16.8536 10.8536L19.5 8.20711L22.1464 10.8536C22.3417 11.0488 22.6583 11.0488 22.8536 10.8536C23.0488 10.6583 23.0488 10.3417 22.8536 10.1464L20.2071 7.5L22.8536 4.85355C23.0488 4.65829 23.0488 4.34171 22.8536 4.14645C22.6583 3.95118 22.3417 3.95118 22.1464 4.14645L19.5 6.79289L16.8536 4.14645Z",
				fill: "currentColor"
			}), h("path", {
				d: "M25 22.75V12.5991C24.5572 13.0765 24.053 13.4961 23.5 13.8454V16H17.5L17.3982 16.0068C17.0322 16.0565 16.75 16.3703 16.75 16.75C16.75 18.2688 15.5188 19.5 14 19.5C12.4812 19.5 11.25 18.2688 11.25 16.75L11.2432 16.6482C11.1935 16.2822 10.8797 16 10.5 16H4.5V7.25C4.5 6.2835 5.2835 5.5 6.25 5.5H12.2696C12.4146 4.97463 12.6153 4.47237 12.865 4H6.25C4.45507 4 3 5.45507 3 7.25V22.75C3 24.5449 4.45507 26 6.25 26H21.75C23.5449 26 25 24.5449 25 22.75ZM4.5 22.75V17.5H9.81597L9.85751 17.7041C10.2905 19.5919 11.9808 21 14 21L14.215 20.9947C16.2095 20.8953 17.842 19.4209 18.184 17.5H23.5V22.75C23.5 23.7165 22.7165 24.5 21.75 24.5H6.25C5.2835 24.5 4.5 23.7165 4.5 22.75Z",
				fill: "currentColor"
			}))
		}
	}),
	RemoveIcon = defineComponent({
		name: "Remove",
		render() {
			return h("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 512 512"
			}, h("line", {
				x1: "400",
				y1: "256",
				x2: "112",
				y2: "256",
				style: `
        fill: none;
        stroke: currentColor;
        stroke-linecap: round;
        stroke-linejoin: round;
        stroke-width: 32px;
      `
			}))
		}
	}),
	CancelIcon = replaceable("cancel", h("svg", {
		viewBox: "0 0 16 16",
		version: "1.1",
		xmlns: "http://www.w3.org/2000/svg"
	}, h("g", {
		stroke: "none",
		"stroke-width": "1",
		fill: "none",
		"fill-rule": "evenodd"
	}, h("g", {
		fill: "currentColor",
		"fill-rule": "nonzero"
	}, h("path", {
		d: "M2.58859116,2.7156945 L2.64644661,2.64644661 C2.82001296,2.47288026 3.08943736,2.45359511 3.2843055,2.58859116 L3.35355339,2.64644661 L8,7.293 L12.6464466,2.64644661 C12.8417088,2.45118446 13.1582912,2.45118446 13.3535534,2.64644661 C13.5488155,2.84170876 13.5488155,3.15829124 13.3535534,3.35355339 L8.707,8 L13.3535534,12.6464466 C13.5271197,12.820013 13.5464049,13.0894374 13.4114088,13.2843055 L13.3535534,13.3535534 C13.179987,13.5271197 12.9105626,13.5464049 12.7156945,13.4114088 L12.6464466,13.3535534 L8,8.707 L3.35355339,13.3535534 C3.15829124,13.5488155 2.84170876,13.5488155 2.64644661,13.3535534 C2.45118446,13.1582912 2.45118446,12.8417088 2.64644661,12.6464466 L7.293,8 L2.64644661,3.35355339 C2.47288026,3.17998704 2.45359511,2.91056264 2.58859116,2.7156945 L2.64644661,2.64644661 L2.58859116,2.7156945 Z"
	}))))),
	ChevronDownIcon = defineComponent({
		name: "ChevronDown",
		render() {
			return h("svg", {
				viewBox: "0 0 16 16",
				fill: "none",
				xmlns: "http://www.w3.org/2000/svg"
			}, h("path", {
				d: "M3.14645 5.64645C3.34171 5.45118 3.65829 5.45118 3.85355 5.64645L8 9.79289L12.1464 5.64645C12.3417 5.45118 12.6583 5.45118 12.8536 5.64645C13.0488 5.84171 13.0488 6.15829 12.8536 6.35355L8.35355 10.8536C8.15829 11.0488 7.84171 11.0488 7.64645 10.8536L3.14645 6.35355C2.95118 6.15829 2.95118 5.84171 3.14645 5.64645Z",
				fill: "currentColor"
			}))
		}
	}),
	ClearIcon = replaceable("clear", h("svg", {
		viewBox: "0 0 16 16",
		version: "1.1",
		xmlns: "http://www.w3.org/2000/svg"
	}, h("g", {
		stroke: "none",
		"stroke-width": "1",
		fill: "none",
		"fill-rule": "evenodd"
	}, h("g", {
		fill: "currentColor",
		"fill-rule": "nonzero"
	}, h("path", {
		d: "M8,2 C11.3137085,2 14,4.6862915 14,8 C14,11.3137085 11.3137085,14 8,14 C4.6862915,14 2,11.3137085 2,8 C2,4.6862915 4.6862915,2 8,2 Z M6.5343055,5.83859116 C6.33943736,5.70359511 6.07001296,5.72288026 5.89644661,5.89644661 L5.89644661,5.89644661 L5.83859116,5.9656945 C5.70359511,6.16056264 5.72288026,6.42998704 5.89644661,6.60355339 L5.89644661,6.60355339 L7.293,8 L5.89644661,9.39644661 L5.83859116,9.4656945 C5.70359511,9.66056264 5.72288026,9.92998704 5.89644661,10.1035534 L5.89644661,10.1035534 L5.9656945,10.1614088 C6.16056264,10.2964049 6.42998704,10.2771197 6.60355339,10.1035534 L6.60355339,10.1035534 L8,8.707 L9.39644661,10.1035534 L9.4656945,10.1614088 C9.66056264,10.2964049 9.92998704,10.2771197 10.1035534,10.1035534 L10.1035534,10.1035534 L10.1614088,10.0343055 C10.2964049,9.83943736 10.2771197,9.57001296 10.1035534,9.39644661 L10.1035534,9.39644661 L8.707,8 L10.1035534,6.60355339 L10.1614088,6.5343055 C10.2964049,6.33943736 10.2771197,6.07001296 10.1035534,5.89644661 L10.1035534,5.89644661 L10.0343055,5.83859116 C9.83943736,5.70359511 9.57001296,5.72288026 9.39644661,5.89644661 L9.39644661,5.89644661 L8,7.293 L6.60355339,5.89644661 Z"
	}))))),
	RetryIcon = replaceable("retry", h("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 512 512"
	}, h("path", {
		d: "M320,146s24.36-12-64-12A160,160,0,1,0,416,294",
		style: "fill: none; stroke: currentcolor; stroke-linecap: round; stroke-miterlimit: 10; stroke-width: 32px;"
	}), h("polyline", {
		points: "256 58 336 138 256 218",
		style: "fill: none; stroke: currentcolor; stroke-linecap: round; stroke-linejoin: round; stroke-width: 32px;"
	}))),
	RotateClockwiseIcon = replaceable("rotateClockwise", h("svg", {
		viewBox: "0 0 20 20",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, h("path", {
		d: "M3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10C17 12.7916 15.3658 15.2026 13 16.3265V14.5C13 14.2239 12.7761 14 12.5 14C12.2239 14 12 14.2239 12 14.5V17.5C12 17.7761 12.2239 18 12.5 18H15.5C15.7761 18 16 17.7761 16 17.5C16 17.2239 15.7761 17 15.5 17H13.8758C16.3346 15.6357 18 13.0128 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 10.2761 2.22386 10.5 2.5 10.5C2.77614 10.5 3 10.2761 3 10Z",
		fill: "currentColor"
	}), h("path", {
		d: "M10 12C11.1046 12 12 11.1046 12 10C12 8.89543 11.1046 8 10 8C8.89543 8 8 8.89543 8 10C8 11.1046 8.89543 12 10 12ZM10 11C9.44772 11 9 10.5523 9 10C9 9.44772 9.44772 9 10 9C10.5523 9 11 9.44772 11 10C11 10.5523 10.5523 11 10 11Z",
		fill: "currentColor"
	}))),
	RotateCounterclockwiseIcon = replaceable("rotateClockwise", h("svg", {
		viewBox: "0 0 20 20",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, h("path", {
		d: "M17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 12.7916 4.63419 15.2026 7 16.3265V14.5C7 14.2239 7.22386 14 7.5 14C7.77614 14 8 14.2239 8 14.5V17.5C8 17.7761 7.77614 18 7.5 18H4.5C4.22386 18 4 17.7761 4 17.5C4 17.2239 4.22386 17 4.5 17H6.12422C3.66539 15.6357 2 13.0128 2 10C2 5.58172 5.58172 2 10 2C14.4183 2 18 5.58172 18 10C18 10.2761 17.7761 10.5 17.5 10.5C17.2239 10.5 17 10.2761 17 10Z",
		fill: "currentColor"
	}), h("path", {
		d: "M10 12C8.89543 12 8 11.1046 8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12ZM10 11C10.5523 11 11 10.5523 11 10C11 9.44772 10.5523 9 10 9C9.44772 9 9 9.44772 9 10C9 10.5523 9.44772 11 10 11Z",
		fill: "currentColor"
	}))),
	ZoomInIcon = replaceable("zoomIn", h("svg", {
		viewBox: "0 0 20 20",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, h("path", {
		d: "M11.5 8.5C11.5 8.22386 11.2761 8 11 8H9V6C9 5.72386 8.77614 5.5 8.5 5.5C8.22386 5.5 8 5.72386 8 6V8H6C5.72386 8 5.5 8.22386 5.5 8.5C5.5 8.77614 5.72386 9 6 9H8V11C8 11.2761 8.22386 11.5 8.5 11.5C8.77614 11.5 9 11.2761 9 11V9H11C11.2761 9 11.5 8.77614 11.5 8.5Z",
		fill: "currentColor"
	}), h("path", {
		d: "M8.5 3C11.5376 3 14 5.46243 14 8.5C14 9.83879 13.5217 11.0659 12.7266 12.0196L16.8536 16.1464C17.0488 16.3417 17.0488 16.6583 16.8536 16.8536C16.68 17.0271 16.4106 17.0464 16.2157 16.9114L16.1464 16.8536L12.0196 12.7266C11.0659 13.5217 9.83879 14 8.5 14C5.46243 14 3 11.5376 3 8.5C3 5.46243 5.46243 3 8.5 3ZM8.5 4C6.01472 4 4 6.01472 4 8.5C4 10.9853 6.01472 13 8.5 13C10.9853 13 13 10.9853 13 8.5C13 6.01472 10.9853 4 8.5 4Z",
		fill: "currentColor"
	}))),
	ZoomOutIcon = replaceable("zoomOut", h("svg", {
		viewBox: "0 0 20 20",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, h("path", {
		d: "M11 8C11.2761 8 11.5 8.22386 11.5 8.5C11.5 8.77614 11.2761 9 11 9H6C5.72386 9 5.5 8.77614 5.5 8.5C5.5 8.22386 5.72386 8 6 8H11Z",
		fill: "currentColor"
	}), h("path", {
		d: "M14 8.5C14 5.46243 11.5376 3 8.5 3C5.46243 3 3 5.46243 3 8.5C3 11.5376 5.46243 14 8.5 14C9.83879 14 11.0659 13.5217 12.0196 12.7266L16.1464 16.8536L16.2157 16.9114C16.4106 17.0464 16.68 17.0271 16.8536 16.8536C17.0488 16.6583 17.0488 16.3417 16.8536 16.1464L12.7266 12.0196C13.5217 11.0659 14 9.83879 14 8.5ZM4 8.5C4 6.01472 6.01472 4 8.5 4C10.9853 4 13 6.01472 13 8.5C13 10.9853 10.9853 13 8.5 13C6.01472 13 4 10.9853 4 8.5Z",
		fill: "currentColor"
	}))),
	ResizeSmallIcon = defineComponent({
		name: "ResizeSmall",
		render() {
			return h("svg", {
				xmlns: "http://www.w3.org/2000/svg",
				viewBox: "0 0 20 20"
			}, h("g", {
				fill: "none"
			}, h("path", {
				d: "M5.5 4A1.5 1.5 0 0 0 4 5.5v1a.5.5 0 0 1-1 0v-1A2.5 2.5 0 0 1 5.5 3h1a.5.5 0 0 1 0 1h-1zM16 5.5A1.5 1.5 0 0 0 14.5 4h-1a.5.5 0 0 1 0-1h1A2.5 2.5 0 0 1 17 5.5v1a.5.5 0 0 1-1 0v-1zm0 9a1.5 1.5 0 0 1-1.5 1.5h-1a.5.5 0 0 0 0 1h1a2.5 2.5 0 0 0 2.5-2.5v-1a.5.5 0 0 0-1 0v1zm-12 0A1.5 1.5 0 0 0 5.5 16h1.25a.5.5 0 0 1 0 1H5.5A2.5 2.5 0 0 1 3 14.5v-1.25a.5.5 0 0 1 1 0v1.25zM8.5 7A1.5 1.5 0 0 0 7 8.5v3A1.5 1.5 0 0 0 8.5 13h3a1.5 1.5 0 0 0 1.5-1.5v-3A1.5 1.5 0 0 0 11.5 7h-3zM8 8.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-3z",
				fill: "currentColor"
			})))
		}
	}),
	FocusDetector = defineComponent({
		props: {
			onFocus: Function,
			onBlur: Function
		},
		setup(e) {
			return () => h("div", {
				style: "width: 0; height: 0",
				tabindex: 0,
				onFocus: e.onFocus,
				onBlur: e.onBlur
			})
		}
	});

function toArray(e) {
	return Array.isArray(e) ? e : [e]
}
const TRAVERSE_COMMAND = {
	STOP: "STOP"
};

function traverseWithCb(e, t) {
	const n = t(e);
	e.children !== void 0 && n !== TRAVERSE_COMMAND.STOP && e.children.forEach(o => traverseWithCb(o, t))
}

function getNonLeafKeys(e, t = {}) {
	const {
		preserveGroup: n = !1
	} = t, o = [], r = n ? a => {
		a.isLeaf || (o.push(a.key), i(a.children))
	} : a => {
		a.isLeaf || (a.isGroup || o.push(a.key), i(a.children))
	};

	function i(a) {
		a.forEach(r)
	}
	return i(e), o
}

function isLeaf(e, t) {
	const {
		isLeaf: n
	} = e;
	return n !== void 0 ? n : !t(e)
}

function defaultGetChildren(e) {
	return e.children
}

function defaultGetKey(e) {
	return e.key
}

function isIgnored() {
	return !1
}

function isShallowLoaded(e, t) {
	const {
		isLeaf: n
	} = e;
	return !(n === !1 && !Array.isArray(t(e)))
}

function isDisabled(e) {
	return e.disabled === !0
}

function isExpilicitlyNotLoaded(e, t) {
	return e.isLeaf === !1 && !Array.isArray(t(e))
}

function unwrapCheckedKeys(e) {
	var t;
	return e == null ? [] : Array.isArray(e) ? e : (t = e.checkedKeys) !== null && t !== void 0 ? t : []
}

function unwrapIndeterminateKeys(e) {
	var t;
	return e == null || Array.isArray(e) ? [] : (t = e.indeterminateKeys) !== null && t !== void 0 ? t : []
}

function merge(e, t) {
	const n = new Set(e);
	return t.forEach(o => {
		n.has(o) || n.add(o)
	}), Array.from(n)
}

function minus(e, t) {
	const n = new Set(e);
	return t.forEach(o => {
		n.has(o) && n.delete(o)
	}), Array.from(n)
}

function isGroup(e) {
	return (e == null ? void 0 : e.type) === "group"
}

function createIndexGetter(e) {
	const t = new Map;
	return e.forEach((n, o) => {
		t.set(n.key, o)
	}), n => {
		var o;
		return (o = t.get(n)) !== null && o !== void 0 ? o : null
	}
}
class SubtreeNotLoadedError extends Error {
	constructor() {
		super(), this.message =
			"SubtreeNotLoadedError: checking a subtree whose required nodes are not fully loaded."
	}
}

function getExtendedCheckedKeySetAfterCheck(e, t, n, o) {
	return getExtendedCheckedKeySet(t.concat(e), n, o, !1)
}

function getAvailableAscendantNodeSet(e, t) {
	const n = new Set;
	return e.forEach(o => {
		const r = t.treeNodeMap.get(o);
		if (r !== void 0) {
			let i = r.parent;
			for (; i !== null && !(i.disabled || n.has(i.key));) n.add(i.key), i = i.parent
		}
	}), n
}

function getExtendedCheckedKeySetAfterUncheck(e, t, n, o) {
	const r = getExtendedCheckedKeySet(t, n, o, !1),
		i = getExtendedCheckedKeySet(e, n, o, !0),
		a = getAvailableAscendantNodeSet(e, n),
		l = [];
	return r.forEach(s => {
		(i.has(s) || a.has(s)) && l.push(s)
	}), l.forEach(s => r.delete(s)), r
}

function getCheckedKeys(e, t) {
	const {
		checkedKeys: n,
		keysToCheck: o,
		keysToUncheck: r,
		indeterminateKeys: i,
		cascade: a,
		leafOnly: l,
		checkStrategy: s,
		allowNotLoaded: u
	} = e;
	if (!a) return o !== void 0 ? {
		checkedKeys: merge(n, o),
		indeterminateKeys: Array.from(i)
	} : r !== void 0 ? {
		checkedKeys: minus(n, r),
		indeterminateKeys: Array.from(i)
	} : {
		checkedKeys: Array.from(n),
		indeterminateKeys: Array.from(i)
	};
	const {
		levelTreeNodeMap: d
	} = t;
	let f;
	r !== void 0 ? f = getExtendedCheckedKeySetAfterUncheck(r, n, t, u) : o !== void 0 ? f =
		getExtendedCheckedKeySetAfterCheck(o, n, t, u) : f = getExtendedCheckedKeySet(n, t, u, !1);
	const v = s === "parent",
		g = s === "child" || l,
		p = f,
		m = new Set,
		C = Math.max.apply(null, Array.from(d.keys()));
	for (let b = C; b >= 0; b -= 1) {
		const x = b === 0,
			S = d.get(b);
		for (const w of S) {
			if (w.isLeaf) continue;
			const {
				key: y,
				shallowLoaded: R
			} = w;
			if (g && R && w.children.forEach(M => {
					!M.disabled && !M.isLeaf && M.shallowLoaded && p.has(M.key) && p.delete(M.key)
				}), w.disabled || !R) continue;
			let k = !0,
				B = !1,
				T = !0;
			for (const M of w.children) {
				const E = M.key;
				if (!M.disabled) {
					if (T && (T = !1), p.has(E)) B = !0;
					else if (m.has(E)) {
						B = !0, k = !1;
						break
					} else if (k = !1, B) break
				}
			}
			k && !T ? (v && w.children.forEach(M => {
				!M.disabled && p.has(M.key) && p.delete(M.key)
			}), p.add(y)) : B && m.add(y), x && g && p.has(y) && p.delete(y)
		}
	}
	return {
		checkedKeys: Array.from(p),
		indeterminateKeys: Array.from(m)
	}
}

function getExtendedCheckedKeySet(e, t, n, o) {
	const {
		treeNodeMap: r,
		getChildren: i
	} = t, a = new Set, l = new Set(e);
	return e.forEach(s => {
		const u = r.get(s);
		u !== void 0 && traverseWithCb(u, d => {
			if (d.disabled) return TRAVERSE_COMMAND.STOP;
			const {
				key: f
			} = d;
			if (!a.has(f) && (a.add(f), l.add(f), isExpilicitlyNotLoaded(d.rawNode, i))) {
				if (o) return TRAVERSE_COMMAND.STOP;
				if (!n) throw new SubtreeNotLoadedError
			}
		})
	}), l
}

function getPath(e, {
	includeGroup: t = !1,
	includeSelf: n = !0
}, o) {
	var r;
	const i = o.treeNodeMap;
	let a = e == null ? null : (r = i.get(e)) !== null && r !== void 0 ? r : null;
	const l = {
		keyPath: [],
		treeNodePath: [],
		treeNode: a
	};
	if (a != null && a.ignored) return l.treeNode = null, l;
	for (; a;) !a.ignored && (t || !a.isGroup) && l.treeNodePath.push(a), a = a.parent;
	return l.treeNodePath.reverse(), n || l.treeNodePath.pop(), l.keyPath = l.treeNodePath.map(s => s.key), l
}

function getFirstAvailableNode(e) {
	if (e.length === 0) return null;
	const t = e[0];
	return t.isGroup || t.ignored || t.disabled ? t.getNext() : t
}

function rawGetNext(e, t) {
	const n = e.siblings,
		o = n.length,
		{
			index: r
		} = e;
	return t ? n[(r + 1) % o] : r === n.length - 1 ? null : n[r + 1]
}

function move(e, t, {
	loop: n = !1,
	includeDisabled: o = !1
} = {}) {
	const r = t === "prev" ? rawGetPrev : rawGetNext,
		i = {
			reverse: t === "prev"
		};
	let a = !1,
		l = null;

	function s(u) {
		if (u !== null) {
			if (u === e) {
				if (!a) a = !0;
				else if (!e.disabled && !e.isGroup) {
					l = e;
					return
				}
			} else if ((!u.disabled || o) && !u.ignored && !u.isGroup) {
				l = u;
				return
			}
			if (u.isGroup) {
				const d = getChild(u, i);
				d !== null ? l = d : s(r(u, n))
			} else {
				const d = r(u, !1);
				if (d !== null) s(d);
				else {
					const f = rawGetParent(u);
					f != null && f.isGroup ? s(r(f, n)) : n && s(r(u, !0))
				}
			}
		}
	}
	return s(e), l
}

function rawGetPrev(e, t) {
	const n = e.siblings,
		o = n.length,
		{
			index: r
		} = e;
	return t ? n[(r - 1 + o) % o] : r === 0 ? null : n[r - 1]
}

function rawGetParent(e) {
	return e.parent
}

function getChild(e, t = {}) {
	const {
		reverse: n = !1
	} = t, {
		children: o
	} = e;
	if (o) {
		const {
			length: r
		} = o, i = n ? r - 1 : 0, a = n ? -1 : r, l = n ? -1 : 1;
		for (let s = i; s !== a; s += l) {
			const u = o[s];
			if (!u.disabled && !u.ignored)
				if (u.isGroup) {
					const d = getChild(u, t);
					if (d !== null) return d
				} else return u
		}
	}
	return null
}
const moveMethods = {
	getChild() {
		return this.ignored ? null : getChild(this)
	},
	getParent() {
		const {
			parent: e
		} = this;
		return e != null && e.isGroup ? e.getParent() : e
	},
	getNext(e = {}) {
		return move(this, "next", e)
	},
	getPrev(e = {}) {
		return move(this, "prev", e)
	}
};

function flatten(e, t) {
	const n = t ? new Set(t) : void 0,
		o = [];

	function r(i) {
		i.forEach(a => {
			o.push(a), !(a.isLeaf || !a.children || a.ignored) && (a.isGroup || n === void 0 || n.has(a.key)) &&
				r(a.children)
		})
	}
	return r(e), o
}

function contains(e, t) {
	const n = e.key;
	for (; t;) {
		if (t.key === n) return !0;
		t = t.parent
	}
	return !1
}

function createTreeNodes(e, t, n, o, r, i = null, a = 0) {
	const l = [];
	return e.forEach((s, u) => {
		var d;
		const f = Object.create(o);
		if (f.rawNode = s, f.siblings = l, f.level = a, f.index = u, f.isFirstChild = u === 0, f.isLastChild =
			u + 1 === e.length, f.parent = i, !f.ignored) {
			const v = r(s);
			Array.isArray(v) && (f.children = createTreeNodes(v, t, n, o, r, f, a + 1))
		}
		l.push(f), t.set(f.key, f), n.has(a) || n.set(a, []), (d = n.get(a)) === null || d === void 0 || d.push(
			f)
	}), l
}

function createTreeMate(e, t = {}) {
	var n;
	const o = new Map,
		r = new Map,
		{
			getDisabled: i = isDisabled,
			getIgnored: a = isIgnored,
			getIsGroup: l = isGroup,
			getKey: s = defaultGetKey
		} = t,
		u = (n = t.getChildren) !== null && n !== void 0 ? n : defaultGetChildren,
		d = t.ignoreEmptyChildren ? w => {
			const y = u(w);
			return Array.isArray(y) ? y.length ? y : null : y
		} : u,
		f = Object.assign({
			get key() {
				return s(this.rawNode)
			},
			get disabled() {
				return i(this.rawNode)
			},
			get isGroup() {
				return l(this.rawNode)
			},
			get isLeaf() {
				return isLeaf(this.rawNode, d)
			},
			get shallowLoaded() {
				return isShallowLoaded(this.rawNode, d)
			},
			get ignored() {
				return a(this.rawNode)
			},
			contains(w) {
				return contains(this, w)
			}
		}, moveMethods),
		v = createTreeNodes(e, o, r, f, d);

	function g(w) {
		if (w == null) return null;
		const y = o.get(w);
		return y && !y.isGroup && !y.ignored ? y : null
	}

	function p(w) {
		if (w == null) return null;
		const y = o.get(w);
		return y && !y.ignored ? y : null
	}

	function m(w, y) {
		const R = p(w);
		return R ? R.getPrev(y) : null
	}

	function C(w, y) {
		const R = p(w);
		return R ? R.getNext(y) : null
	}

	function b(w) {
		const y = p(w);
		return y ? y.getParent() : null
	}

	function x(w) {
		const y = p(w);
		return y ? y.getChild() : null
	}
	const S = {
		treeNodes: v,
		treeNodeMap: o,
		levelTreeNodeMap: r,
		maxLevel: Math.max(...r.keys()),
		getChildren: d,
		getFlattenedNodes(w) {
			return flatten(v, w)
		},
		getNode: g,
		getPrev: m,
		getNext: C,
		getParent: b,
		getChild: x,
		getFirstAvailableNode() {
			return getFirstAvailableNode(v)
		},
		getPath(w, y = {}) {
			return getPath(w, y, S)
		},
		getCheckedKeys(w, y = {}) {
			const {
				cascade: R = !0,
				leafOnly: k = !1,
				checkStrategy: B = "all",
				allowNotLoaded: T = !1
			} = y;
			return getCheckedKeys({
				checkedKeys: unwrapCheckedKeys(w),
				indeterminateKeys: unwrapIndeterminateKeys(w),
				cascade: R,
				leafOnly: k,
				checkStrategy: B,
				allowNotLoaded: T
			}, S)
		},
		check(w, y, R = {}) {
			const {
				cascade: k = !0,
				leafOnly: B = !1,
				checkStrategy: T = "all",
				allowNotLoaded: M = !1
			} = R;
			return getCheckedKeys({
				checkedKeys: unwrapCheckedKeys(y),
				indeterminateKeys: unwrapIndeterminateKeys(y),
				keysToCheck: w == null ? [] : toArray(w),
				cascade: k,
				leafOnly: B,
				checkStrategy: T,
				allowNotLoaded: M
			}, S)
		},
		uncheck(w, y, R = {}) {
			const {
				cascade: k = !0,
				leafOnly: B = !1,
				checkStrategy: T = "all",
				allowNotLoaded: M = !1
			} = R;
			return getCheckedKeys({
				checkedKeys: unwrapCheckedKeys(y),
				indeterminateKeys: unwrapIndeterminateKeys(y),
				keysToUncheck: w == null ? [] : toArray(w),
				cascade: k,
				leafOnly: B,
				checkStrategy: T,
				allowNotLoaded: M
			}, S)
		},
		getNonLeafKeys(w = {}) {
			return getNonLeafKeys(v, w)
		}
	};
	return S
}
const style$r = cB("empty", `
 display: flex;
 flex-direction: column;
 align-items: center;
 font-size: var(--n-font-size);
`, [cE("icon", `
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 line-height: var(--n-icon-size);
 color: var(--n-icon-color);
 transition:
 color .3s var(--n-bezier);
 `, [c$1("+", [cE("description", `
 margin-top: 8px;
 `)])]), cE("description", `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 `), cE("extra", `
 text-align: center;
 transition: color .3s var(--n-bezier);
 margin-top: 12px;
 color: var(--n-extra-text-color);
 `)]),
	emptyProps = Object.assign(Object.assign({}, useTheme.props), {
		description: String,
		showDescription: {
			type: Boolean,
			default: !0
		},
		showIcon: {
			type: Boolean,
			default: !0
		},
		size: {
			type: String,
			default: "medium"
		},
		renderIcon: Function
	}),
	NEmpty = defineComponent({
		name: "Empty",
		props: emptyProps,
		setup(e) {
			const {
				mergedClsPrefixRef: t,
				inlineThemeDisabled: n
			} = useConfig(e), o = useTheme("Empty", "-empty", style$r, emptyLight, e, t), {
				localeRef: r
			} = useLocale("Empty"), i = inject(configProviderInjectionKey, null), a = computed(() => {
				var d, f, v;
				return (d = e.description) !== null && d !== void 0 ? d : (v = (f = i == null ? void 0 : i
						.mergedComponentPropsRef.value) === null || f === void 0 ? void 0 : f.Empty) ===
					null || v === void 0 ? void 0 : v.description
			}), l = computed(() => {
				var d, f;
				return ((f = (d = i == null ? void 0 : i.mergedComponentPropsRef.value) === null || d ===
					void 0 ? void 0 : d.Empty) === null || f === void 0 ? void 0 : f.renderIcon) || (
				() => h(EmptyIcon, null))
			}), s = computed(() => {
				const {
					size: d
				} = e, {
					common: {
						cubicBezierEaseInOut: f
					},
					self: {
						[createKey("iconSize", d)]: v,
						[createKey("fontSize", d)]: g,
						textColor: p,
						iconColor: m,
						extraTextColor: C
					}
				} = o.value;
				return {
					"--n-icon-size": v,
					"--n-font-size": g,
					"--n-bezier": f,
					"--n-text-color": p,
					"--n-icon-color": m,
					"--n-extra-text-color": C
				}
			}), u = n ? useThemeClass("empty", computed(() => {
				let d = "";
				const {
					size: f
				} = e;
				return d += f[0], d
			}), s, e) : void 0;
			return {
				mergedClsPrefix: t,
				mergedRenderIcon: l,
				localizedDescription: computed(() => a.value || r.value.description),
				cssVars: n ? void 0 : s,
				themeClass: u == null ? void 0 : u.themeClass,
				onRender: u == null ? void 0 : u.onRender
			}
		},
		render() {
			const {
				$slots: e,
				mergedClsPrefix: t,
				onRender: n
			} = this;
			return n == null || n(), h("div", {
				class: [`${t}-empty`, this.themeClass],
				style: this.cssVars
			}, this.showIcon ? h("div", {
				class: `${t}-empty__icon`
			}, e.icon ? e.icon() : h(NBaseIcon, {
				clsPrefix: t
			}, {
				default: this.mergedRenderIcon
			})) : null, this.showDescription ? h("div", {
				class: `${t}-empty__description`
			}, e.default ? e.default() : this.localizedDescription) : null, e.extra ? h("div", {
				class: `${t}-empty__extra`
			}, e.extra()) : null)
		}
	});

function renderCheckMark(e, t) {
	return h(Transition, {
		name: "fade-in-scale-up-transition"
	}, {
		default: () => e ? h(NBaseIcon, {
			clsPrefix: t,
			class: `${t}-base-select-option__check`
		}, {
			default: () => h(FinishedIcon)
		}) : null
	})
}
const NSelectOption = defineComponent({
		name: "NBaseSelectOption",
		props: {
			clsPrefix: {
				type: String,
				required: !0
			},
			tmNode: {
				type: Object,
				required: !0
			}
		},
		setup(e) {
			const {
				valueRef: t,
				pendingTmNodeRef: n,
				multipleRef: o,
				valueSetRef: r,
				renderLabelRef: i,
				renderOptionRef: a,
				labelFieldRef: l,
				valueFieldRef: s,
				showCheckmarkRef: u,
				nodePropsRef: d,
				handleOptionClick: f,
				handleOptionMouseEnter: v
			} = inject(internalSelectionMenuInjectionKey), g = useMemo(() => {
				const {
					value: b
				} = n;
				return b ? e.tmNode.key === b.key : !1
			});

			function p(b) {
				const {
					tmNode: x
				} = e;
				x.disabled || f(b, x)
			}

			function m(b) {
				const {
					tmNode: x
				} = e;
				x.disabled || v(b, x)
			}

			function C(b) {
				const {
					tmNode: x
				} = e, {
					value: S
				} = g;
				x.disabled || S || v(b, x)
			}
			return {
				multiple: o,
				isGrouped: useMemo(() => {
					const {
						tmNode: b
					} = e, {
						parent: x
					} = b;
					return x && x.rawNode.type === "group"
				}),
				showCheckmark: u,
				nodeProps: d,
				isPending: g,
				isSelected: useMemo(() => {
					const {
						value: b
					} = t, {
						value: x
					} = o;
					if (b === null) return !1;
					const S = e.tmNode.rawNode[s.value];
					if (x) {
						const {
							value: w
						} = r;
						return w.has(S)
					} else return b === S
				}),
				labelField: l,
				renderLabel: i,
				renderOption: a,
				handleMouseMove: C,
				handleMouseEnter: m,
				handleClick: p
			}
		},
		render() {
			const {
				clsPrefix: e,
				tmNode: {
					rawNode: t
				},
				isSelected: n,
				isPending: o,
				isGrouped: r,
				showCheckmark: i,
				nodeProps: a,
				renderOption: l,
				renderLabel: s,
				handleClick: u,
				handleMouseEnter: d,
				handleMouseMove: f
			} = this, v = renderCheckMark(n, e), g = s ? [s(t, n), i && v] : [render(t[this.labelField], t, n), i &&
				v
			], p = a == null ? void 0 : a(t), m = h("div", Object.assign({}, p, {
				class: [`${e}-base-select-option`, t.class, p == null ? void 0 : p.class, {
					[`${e}-base-select-option--disabled`]: t.disabled,
					[`${e}-base-select-option--selected`]: n,
					[`${e}-base-select-option--grouped`]: r,
					[`${e}-base-select-option--pending`]: o,
					[`${e}-base-select-option--show-checkmark`]: i
				}],
				style: [(p == null ? void 0 : p.style) || "", t.style || ""],
				onClick: mergeEventHandlers([u, p == null ? void 0 : p.onClick]),
				onMouseenter: mergeEventHandlers([d, p == null ? void 0 : p.onMouseenter]),
				onMousemove: mergeEventHandlers([f, p == null ? void 0 : p.onMousemove])
			}), h("div", {
				class: `${e}-base-select-option__content`
			}, g));
			return t.render ? t.render({
				node: m,
				option: t,
				selected: n
			}) : l ? l({
				node: m,
				option: t,
				selected: n
			}) : m
		}
	}),
	NSelectGroupHeader = defineComponent({
		name: "NBaseSelectGroupHeader",
		props: {
			clsPrefix: {
				type: String,
				required: !0
			},
			tmNode: {
				type: Object,
				required: !0
			}
		},
		setup() {
			const {
				renderLabelRef: e,
				renderOptionRef: t,
				labelFieldRef: n,
				nodePropsRef: o
			} = inject(internalSelectionMenuInjectionKey);
			return {
				labelField: n,
				nodeProps: o,
				renderLabel: e,
				renderOption: t
			}
		},
		render() {
			const {
				clsPrefix: e,
				renderLabel: t,
				renderOption: n,
				nodeProps: o,
				tmNode: {
					rawNode: r
				}
			} = this, i = o == null ? void 0 : o(r), a = t ? t(r, !1) : render(r[this.labelField], r, !1), l = h(
				"div", Object.assign({}, i, {
					class: [`${e}-base-select-group-header`, i == null ? void 0 : i.class]
				}), a);
			return r.render ? r.render({
				node: l,
				option: r
			}) : n ? n({
				node: l,
				option: r,
				selected: !1
			}) : l
		}
	}),
	style$q = cB("base-select-menu", `
 line-height: 1.5;
 outline: none;
 z-index: 0;
 position: relative;
 border-radius: var(--n-border-radius);
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-color);
`, [cB("scrollbar", `
 max-height: var(--n-height);
 `), cB("virtual-list", `
 max-height: var(--n-height);
 `), cB("base-select-option", `
 min-height: var(--n-option-height);
 font-size: var(--n-option-font-size);
 display: flex;
 align-items: center;
 `, [cE("content", `
 z-index: 1;
 white-space: nowrap;
 text-overflow: ellipsis;
 overflow: hidden;
 `)]), cB("base-select-group-header", `
 min-height: var(--n-option-height);
 font-size: .93em;
 display: flex;
 align-items: center;
 `), cB("base-select-menu-option-wrapper", `
 position: relative;
 width: 100%;
 `), cE("loading, empty", `
 display: flex;
 padding: 12px 32px;
 flex: 1;
 justify-content: center;
 `), cE("loading", `
 color: var(--n-loading-color);
 font-size: var(--n-loading-size);
 `), cE("header", `
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-bottom: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `), cE("action", `
 padding: 8px var(--n-option-padding-left);
 font-size: var(--n-option-font-size);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 border-top: 1px solid var(--n-action-divider-color);
 color: var(--n-action-text-color);
 `), cB("base-select-group-header", `
 position: relative;
 cursor: default;
 padding: var(--n-option-padding);
 color: var(--n-group-header-text-color);
 `), cB("base-select-option", `
 cursor: pointer;
 position: relative;
 padding: var(--n-option-padding);
 transition:
 color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 box-sizing: border-box;
 color: var(--n-option-text-color);
 opacity: 1;
 `, [cM("show-checkmark", `
 padding-right: calc(var(--n-option-padding-right) + 20px);
 `), c$1("&::before", `
 content: "";
 position: absolute;
 left: 4px;
 right: 4px;
 top: 0;
 bottom: 0;
 border-radius: var(--n-border-radius);
 transition: background-color .3s var(--n-bezier);
 `), c$1("&:active", `
 color: var(--n-option-text-color-pressed);
 `), cM("grouped", `
 padding-left: calc(var(--n-option-padding-left) * 1.5);
 `), cM("pending", [c$1("&::before", `
 background-color: var(--n-option-color-pending);
 `)]), cM("selected", `
 color: var(--n-option-text-color-active);
 `, [c$1("&::before", `
 background-color: var(--n-option-color-active);
 `), cM("pending", [c$1("&::before", `
 background-color: var(--n-option-color-active-pending);
 `)])]), cM("disabled", `
 cursor: not-allowed;
 `, [cNotM("selected", `
 color: var(--n-option-text-color-disabled);
 `), cM("selected", `
 opacity: var(--n-option-opacity-disabled);
 `)]), cE("check", `
 font-size: 16px;
 position: absolute;
 right: calc(var(--n-option-padding-right) - 4px);
 top: calc(50% - 7px);
 color: var(--n-option-check-color);
 transition: color .3s var(--n-bezier);
 `, [fadeInScaleUpTransition({
		enterScale: "0.5"
	})])])]),
	NInternalSelectMenu = defineComponent({
		name: "InternalSelectMenu",
		props: Object.assign(Object.assign({}, useTheme.props), {
			clsPrefix: {
				type: String,
				required: !0
			},
			scrollable: {
				type: Boolean,
				default: !0
			},
			treeMate: {
				type: Object,
				required: !0
			},
			multiple: Boolean,
			size: {
				type: String,
				default: "medium"
			},
			value: {
				type: [String, Number, Array],
				default: null
			},
			autoPending: Boolean,
			virtualScroll: {
				type: Boolean,
				default: !0
			},
			show: {
				type: Boolean,
				default: !0
			},
			labelField: {
				type: String,
				default: "label"
			},
			valueField: {
				type: String,
				default: "value"
			},
			loading: Boolean,
			focusable: Boolean,
			renderLabel: Function,
			renderOption: Function,
			nodeProps: Function,
			showCheckmark: {
				type: Boolean,
				default: !0
			},
			onMousedown: Function,
			onScroll: Function,
			onFocus: Function,
			onBlur: Function,
			onKeyup: Function,
			onKeydown: Function,
			onTabOut: Function,
			onMouseenter: Function,
			onMouseleave: Function,
			onResize: Function,
			resetMenuOnOptionsChange: {
				type: Boolean,
				default: !0
			},
			inlineThemeDisabled: Boolean,
			onToggle: Function
		}),
		setup(e) {
			const {
				mergedClsPrefixRef: t,
				mergedRtlRef: n
			} = useConfig(e), o = useRtl("InternalSelectMenu", n, t), r = useTheme("InternalSelectMenu",
					"-internal-select-menu", style$q, internalSelectMenuLight, e, toRef(e, "clsPrefix")), i = ref(
					null), a = ref(null), l = ref(null), s = computed(() => e.treeMate.getFlattenedNodes()), u =
				computed(() => createIndexGetter(s.value)), d = ref(null);

			function f() {
				const {
					treeMate: L
				} = e;
				let W = null;
				const {
					value: ee
				} = e;
				ee === null ? W = L.getFirstAvailableNode() : (e.multiple ? W = L.getNode((ee || [])[(ee || [])
						.length - 1]) : W = L.getNode(ee), (!W || W.disabled) && (W = L
				.getFirstAvailableNode())), O(W || null)
			}

			function v() {
				const {
					value: L
				} = d;
				L && !e.treeMate.getNode(L.key) && (d.value = null)
			}
			let g;
			watch(() => e.show, L => {
				L ? g = watch(() => e.treeMate, () => {
					e.resetMenuOnOptionsChange ? (e.autoPending ? f() : v(), nextTick(N)) : v()
				}, {
					immediate: !0
				}) : g == null || g()
			}, {
				immediate: !0
			}), onBeforeUnmount(() => {
				g == null || g()
			});
			const p = computed(() => depx(r.value.self[createKey("optionHeight", e.size)])),
				m = computed(() => getMargin(r.value.self[createKey("padding", e.size)])),
				C = computed(() => e.multiple && Array.isArray(e.value) ? new Set(e.value) : new Set),
				b = computed(() => {
					const L = s.value;
					return L && L.length === 0
				});

			function x(L) {
				const {
					onToggle: W
				} = e;
				W && W(L)
			}

			function S(L) {
				const {
					onScroll: W
				} = e;
				W && W(L)
			}

			function w(L) {
				var W;
				(W = l.value) === null || W === void 0 || W.sync(), S(L)
			}

			function y() {
				var L;
				(L = l.value) === null || L === void 0 || L.sync()
			}

			function R() {
				const {
					value: L
				} = d;
				return L || null
			}

			function k(L, W) {
				W.disabled || O(W, !1)
			}

			function B(L, W) {
				W.disabled || x(W)
			}

			function T(L) {
				var W;
				happensIn(L, "action") || (W = e.onKeyup) === null || W === void 0 || W.call(e, L)
			}

			function M(L) {
				var W;
				happensIn(L, "action") || (W = e.onKeydown) === null || W === void 0 || W.call(e, L)
			}

			function E(L) {
				var W;
				(W = e.onMousedown) === null || W === void 0 || W.call(e, L), !e.focusable && L.preventDefault()
			}

			function $() {
				const {
					value: L
				} = d;
				L && O(L.getNext({
					loop: !0
				}), !0)
			}

			function _() {
				const {
					value: L
				} = d;
				L && O(L.getPrev({
					loop: !0
				}), !0)
			}

			function O(L, W = !1) {
				d.value = L, W && N()
			}

			function N() {
				var L, W;
				const ee = d.value;
				if (!ee) return;
				const ie = u.value(ee.key);
				ie !== null && (e.virtualScroll ? (L = a.value) === null || L === void 0 || L.scrollTo({
					index: ie
				}) : (W = l.value) === null || W === void 0 || W.scrollTo({
					index: ie,
					elSize: p.value
				}))
			}

			function D(L) {
				var W, ee;
				!((W = i.value) === null || W === void 0) && W.contains(L.target) && ((ee = e.onFocus) === null ||
					ee === void 0 || ee.call(e, L))
			}

			function F(L) {
				var W, ee;
				!((W = i.value) === null || W === void 0) && W.contains(L.relatedTarget) || (ee = e.onBlur) ===
					null || ee === void 0 || ee.call(e, L)
			}
			provide(internalSelectionMenuInjectionKey, {
				handleOptionMouseEnter: k,
				handleOptionClick: B,
				valueSetRef: C,
				pendingTmNodeRef: d,
				nodePropsRef: toRef(e, "nodeProps"),
				showCheckmarkRef: toRef(e, "showCheckmark"),
				multipleRef: toRef(e, "multiple"),
				valueRef: toRef(e, "value"),
				renderLabelRef: toRef(e, "renderLabel"),
				renderOptionRef: toRef(e, "renderOption"),
				labelFieldRef: toRef(e, "labelField"),
				valueFieldRef: toRef(e, "valueField")
			}), provide(internalSelectionMenuBodyInjectionKey, i), onMounted(() => {
				const {
					value: L
				} = l;
				L && L.sync()
			});
			const j = computed(() => {
					const {
						size: L
					} = e, {
						common: {
							cubicBezierEaseInOut: W
						},
						self: {
							height: ee,
							borderRadius: ie,
							color: pe,
							groupHeaderTextColor: oe,
							actionDividerColor: me,
							optionTextColorPressed: ve,
							optionTextColor: Se,
							optionTextColorDisabled: ge,
							optionTextColorActive: ae,
							optionOpacityDisabled: H,
							optionCheckColor: q,
							actionTextColor: A,
							optionColorPending: Y,
							optionColorActive: I,
							loadingColor: U,
							loadingSize: G,
							optionColorActivePending: ne,
							[createKey("optionFontSize", L)]: se,
							[createKey("optionHeight", L)]: fe,
							[createKey("optionPadding", L)]: xe
						}
					} = r.value;
					return {
						"--n-height": ee,
						"--n-action-divider-color": me,
						"--n-action-text-color": A,
						"--n-bezier": W,
						"--n-border-radius": ie,
						"--n-color": pe,
						"--n-option-font-size": se,
						"--n-group-header-text-color": oe,
						"--n-option-check-color": q,
						"--n-option-color-pending": Y,
						"--n-option-color-active": I,
						"--n-option-color-active-pending": ne,
						"--n-option-height": fe,
						"--n-option-opacity-disabled": H,
						"--n-option-text-color": Se,
						"--n-option-text-color-active": ae,
						"--n-option-text-color-disabled": ge,
						"--n-option-text-color-pressed": ve,
						"--n-option-padding": xe,
						"--n-option-padding-left": getMargin(xe, "left"),
						"--n-option-padding-right": getMargin(xe, "right"),
						"--n-loading-color": U,
						"--n-loading-size": G
					}
				}),
				{
					inlineThemeDisabled: J
				} = e,
				Q = J ? useThemeClass("internal-select-menu", computed(() => e.size[0]), j, e) : void 0,
				re = {
					selfRef: i,
					next: $,
					prev: _,
					getPendingTmNode: R
				};
			return useOnResize(i, e.onResize), Object.assign({
				mergedTheme: r,
				mergedClsPrefix: t,
				rtlEnabled: o,
				virtualListRef: a,
				scrollbarRef: l,
				itemSize: p,
				padding: m,
				flattenedNodes: s,
				empty: b,
				virtualListContainer() {
					const {
						value: L
					} = a;
					return L == null ? void 0 : L.listElRef
				},
				virtualListContent() {
					const {
						value: L
					} = a;
					return L == null ? void 0 : L.itemsElRef
				},
				doScroll: S,
				handleFocusin: D,
				handleFocusout: F,
				handleKeyUp: T,
				handleKeyDown: M,
				handleMouseDown: E,
				handleVirtualListResize: y,
				handleVirtualListScroll: w,
				cssVars: J ? void 0 : j,
				themeClass: Q == null ? void 0 : Q.themeClass,
				onRender: Q == null ? void 0 : Q.onRender
			}, re)
		},
		render() {
			const {
				$slots: e,
				virtualScroll: t,
				clsPrefix: n,
				mergedTheme: o,
				themeClass: r,
				onRender: i
			} = this;
			return i == null || i(), h("div", {
				ref: "selfRef",
				tabindex: this.focusable ? 0 : -1,
				class: [`${n}-base-select-menu`, this.rtlEnabled && `${n}-base-select-menu--rtl`, r, this
					.multiple && `${n}-base-select-menu--multiple`
				],
				style: this.cssVars,
				onFocusin: this.handleFocusin,
				onFocusout: this.handleFocusout,
				onKeyup: this.handleKeyUp,
				onKeydown: this.handleKeyDown,
				onMousedown: this.handleMouseDown,
				onMouseenter: this.onMouseenter,
				onMouseleave: this.onMouseleave
			}, resolveWrappedSlot(e.header, a => a && h("div", {
				class: `${n}-base-select-menu__header`,
				"data-header": !0,
				key: "header"
			}, a)), this.loading ? h("div", {
				class: `${n}-base-select-menu__loading`
			}, h(NBaseLoading, {
				clsPrefix: n,
				strokeWidth: 20
			})) : this.empty ? h("div", {
				class: `${n}-base-select-menu__empty`,
				"data-empty": !0
			}, resolveSlot(e.empty, () => [h(NEmpty, {
				theme: o.peers.Empty,
				themeOverrides: o.peerOverrides.Empty
			})])) : h(NScrollbar, {
				ref: "scrollbarRef",
				theme: o.peers.Scrollbar,
				themeOverrides: o.peerOverrides.Scrollbar,
				scrollable: this.scrollable,
				container: t ? this.virtualListContainer : void 0,
				content: t ? this.virtualListContent : void 0,
				onScroll: t ? void 0 : this.doScroll
			}, {
				default: () => t ? h(VVirtualList, {
					ref: "virtualListRef",
					class: `${n}-virtual-list`,
					items: this.flattenedNodes,
					itemSize: this.itemSize,
					showScrollbar: !1,
					paddingTop: this.padding.top,
					paddingBottom: this.padding.bottom,
					onResize: this.handleVirtualListResize,
					onScroll: this.handleVirtualListScroll,
					itemResizable: !0
				}, {
					default: ({
						item: a
					}) => a.isGroup ? h(NSelectGroupHeader, {
						key: a.key,
						clsPrefix: n,
						tmNode: a
					}) : a.ignored ? null : h(NSelectOption, {
						clsPrefix: n,
						key: a.key,
						tmNode: a
					})
				}) : h("div", {
					class: `${n}-base-select-menu-option-wrapper`,
					style: {
						paddingTop: this.padding.top,
						paddingBottom: this.padding.bottom
					}
				}, this.flattenedNodes.map(a => a.isGroup ? h(NSelectGroupHeader, {
					key: a.key,
					clsPrefix: n,
					tmNode: a
				}) : h(NSelectOption, {
					clsPrefix: n,
					key: a.key,
					tmNode: a
				})))
			}), resolveWrappedSlot(e.action, a => a && [h("div", {
				class: `${n}-base-select-menu__action`,
				"data-action": !0,
				key: "action"
			}, a), h(FocusDetector, {
				onFocus: this.onTabOut,
				key: "focus-detector"
			})]))
		}
	}),
	oppositePlacement = {
		top: "bottom",
		bottom: "top",
		left: "right",
		right: "left"
	},
	arrowSize = "var(--n-arrow-height) * 1.414",
	style$p = c$1([cB("popover", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 position: relative;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 box-shadow: var(--n-box-shadow);
 word-break: break-word;
 `, [c$1(">", [cB("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), cNotM("raw", `
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 `, [cNotM("scrollable", [cNotM("show-header-or-footer", "padding: var(--n-padding);")])]), cE("header", `
 padding: var(--n-padding);
 border-bottom: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), cE("footer", `
 padding: var(--n-padding);
 border-top: 1px solid var(--n-divider-color);
 transition: border-color .3s var(--n-bezier);
 `), cM("scrollable, show-header-or-footer", [cE("content", `
 padding: var(--n-padding);
 `)])]), cB("popover-shared", `
 transform-origin: inherit;
 `, [cB("popover-arrow-wrapper", `
 position: absolute;
 overflow: hidden;
 pointer-events: none;
 `, [cB("popover-arrow", `
 transition: background-color .3s var(--n-bezier);
 position: absolute;
 display: block;
 width: calc(${arrowSize});
 height: calc(${arrowSize});
 box-shadow: 0 0 8px 0 rgba(0, 0, 0, .12);
 transform: rotate(45deg);
 background-color: var(--n-color);
 pointer-events: all;
 `)]), c$1("&.popover-transition-enter-from, &.popover-transition-leave-to", `
 opacity: 0;
 transform: scale(.85);
 `), c$1("&.popover-transition-enter-to, &.popover-transition-leave-from", `
 transform: scale(1);
 opacity: 1;
 `), c$1("&.popover-transition-enter-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-out),
 transform .15s var(--n-bezier-ease-out);
 `), c$1("&.popover-transition-leave-active", `
 transition:
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 opacity .15s var(--n-bezier-ease-in),
 transform .15s var(--n-bezier-ease-in);
 `)]), placementStyle("top-start", `
 top: calc(${arrowSize} / -2);
 left: calc(${getArrowOffset("top-start")} - var(--v-offset-left));
 `), placementStyle("top", `
 top: calc(${arrowSize} / -2);
 transform: translateX(calc(${arrowSize} / -2)) rotate(45deg);
 left: 50%;
 `), placementStyle("top-end", `
 top: calc(${arrowSize} / -2);
 right: calc(${getArrowOffset("top-end")} + var(--v-offset-left));
 `), placementStyle("bottom-start", `
 bottom: calc(${arrowSize} / -2);
 left: calc(${getArrowOffset("bottom-start")} - var(--v-offset-left));
 `), placementStyle("bottom", `
 bottom: calc(${arrowSize} / -2);
 transform: translateX(calc(${arrowSize} / -2)) rotate(45deg);
 left: 50%;
 `), placementStyle("bottom-end", `
 bottom: calc(${arrowSize} / -2);
 right: calc(${getArrowOffset("bottom-end")} + var(--v-offset-left));
 `), placementStyle("left-start", `
 left: calc(${arrowSize} / -2);
 top: calc(${getArrowOffset("left-start")} - var(--v-offset-top));
 `), placementStyle("left", `
 left: calc(${arrowSize} / -2);
 transform: translateY(calc(${arrowSize} / -2)) rotate(45deg);
 top: 50%;
 `), placementStyle("left-end", `
 left: calc(${arrowSize} / -2);
 bottom: calc(${getArrowOffset("left-end")} + var(--v-offset-top));
 `), placementStyle("right-start", `
 right: calc(${arrowSize} / -2);
 top: calc(${getArrowOffset("right-start")} - var(--v-offset-top));
 `), placementStyle("right", `
 right: calc(${arrowSize} / -2);
 transform: translateY(calc(${arrowSize} / -2)) rotate(45deg);
 top: 50%;
 `), placementStyle("right-end", `
 right: calc(${arrowSize} / -2);
 bottom: calc(${getArrowOffset("right-end")} + var(--v-offset-top));
 `), ...map({
		top: ["right-start", "left-start"],
		right: ["top-end", "bottom-end"],
		bottom: ["right-end", "left-end"],
		left: ["top-start", "bottom-start"]
	}, (e, t) => {
		const n = ["right", "left"].includes(t),
			o = n ? "width" : "height";
		return e.map(r => {
			const i = r.split("-")[1] === "end",
				l = `calc((${`var(--v-target-${o}, 0px)`} - ${arrowSize}) / 2)`,
				s = getArrowOffset(r);
			return c$1(`[v-placement="${r}"] >`, [cB("popover-shared", [cM("center-arrow", [cB(
				"popover-arrow",
				`${t}: calc(max(${l}, ${s}) ${i?"+":"-"} var(--v-offset-${n?"left":"top"}));`
				)])])])
		})
	})]);

function getArrowOffset(e) {
	return ["top", "bottom"].includes(e.split("-")[0]) ? "var(--n-arrow-offset)" : "var(--n-arrow-offset-vertical)"
}

function placementStyle(e, t) {
	const n = e.split("-")[0],
		o = ["top", "bottom"].includes(n) ? "height: var(--n-space-arrow);" : "width: var(--n-space-arrow);";
	return c$1(`[v-placement="${e}"] >`, [cB("popover-shared", `
 margin-${oppositePlacement[n]}: var(--n-space);
 `, [cM("show-arrow", `
 margin-${oppositePlacement[n]}: var(--n-space-arrow);
 `), cM("overlap", `
 margin: 0;
 `), cCB("popover-arrow-wrapper", `
 right: 0;
 left: 0;
 top: 0;
 bottom: 0;
 ${n}: 100%;
 ${oppositePlacement[n]}: auto;
 ${o}
 `, [cB("popover-arrow", t)])])])
}
const popoverBodyProps = Object.assign(Object.assign({}, useTheme.props), {
		to: useAdjustedTo.propTo,
		show: Boolean,
		trigger: String,
		showArrow: Boolean,
		delay: Number,
		duration: Number,
		raw: Boolean,
		arrowPointToCenter: Boolean,
		arrowClass: String,
		arrowStyle: [String, Object],
		arrowWrapperClass: String,
		arrowWrapperStyle: [String, Object],
		displayDirective: String,
		x: Number,
		y: Number,
		flip: Boolean,
		overlap: Boolean,
		placement: String,
		width: [Number, String],
		keepAliveOnHover: Boolean,
		scrollable: Boolean,
		contentClass: String,
		contentStyle: [Object, String],
		headerClass: String,
		headerStyle: [Object, String],
		footerClass: String,
		footerStyle: [Object, String],
		internalDeactivateImmediately: Boolean,
		animated: Boolean,
		onClickoutside: Function,
		internalTrapFocus: Boolean,
		internalOnAfterLeave: Function,
		minWidth: Number,
		maxWidth: Number
	}),
	renderArrow = ({
		arrowClass: e,
		arrowStyle: t,
		arrowWrapperClass: n,
		arrowWrapperStyle: o,
		clsPrefix: r
	}) => h("div", {
		key: "__popover-arrow__",
		style: o,
		class: [`${r}-popover-arrow-wrapper`, n]
	}, h("div", {
		class: [`${r}-popover-arrow`, e],
		style: t
	})),
	NPopoverBody = defineComponent({
		name: "PopoverBody",
		inheritAttrs: !1,
		props: popoverBodyProps,
		setup(e, {
			slots: t,
			attrs: n
		}) {
			const {
				namespaceRef: o,
				mergedClsPrefixRef: r,
				inlineThemeDisabled: i
			} = useConfig(e), a = useTheme("Popover", "-popover", style$p, popoverLight, e, r), l = ref(null), s =
				inject("NPopover"), u = ref(null), d = ref(e.show), f = ref(!1);
			watchEffect(() => {
				const {
					show: k
				} = e;
				k && !isJsdom() && !e.internalDeactivateImmediately && (f.value = !0)
			});
			const v = computed(() => {
					const {
						trigger: k,
						onClickoutside: B
					} = e, T = [], {
						positionManuallyRef: {
							value: M
						}
					} = s;
					return M || (k === "click" && !B && T.push([clickoutside, w, void 0, {
							capture: !0
						}]), k === "hover" && T.push([mousemoveoutside$1, S])), B && T.push([clickoutside, w,
							void 0, {
								capture: !0
							}
						]), (e.displayDirective === "show" || e.animated && f.value) && T.push([vShow, e.show]),
						T
				}),
				g = computed(() => {
					const k = e.width === "trigger" ? void 0 : formatLength(e.width),
						B = [];
					k && B.push({
						width: k
					});
					const {
						maxWidth: T,
						minWidth: M
					} = e;
					return T && B.push({
						maxWidth: formatLength(T)
					}), M && B.push({
						maxWidth: formatLength(M)
					}), i || B.push(p.value), B
				}),
				p = computed(() => {
					const {
						common: {
							cubicBezierEaseInOut: k,
							cubicBezierEaseIn: B,
							cubicBezierEaseOut: T
						},
						self: {
							space: M,
							spaceArrow: E,
							padding: $,
							fontSize: _,
							textColor: O,
							dividerColor: N,
							color: D,
							boxShadow: F,
							borderRadius: j,
							arrowHeight: J,
							arrowOffset: Q,
							arrowOffsetVertical: re
						}
					} = a.value;
					return {
						"--n-box-shadow": F,
						"--n-bezier": k,
						"--n-bezier-ease-in": B,
						"--n-bezier-ease-out": T,
						"--n-font-size": _,
						"--n-text-color": O,
						"--n-color": D,
						"--n-divider-color": N,
						"--n-border-radius": j,
						"--n-arrow-height": J,
						"--n-arrow-offset": Q,
						"--n-arrow-offset-vertical": re,
						"--n-padding": $,
						"--n-space": M,
						"--n-space-arrow": E
					}
				}),
				m = i ? useThemeClass("popover", void 0, p, e) : void 0;
			s.setBodyInstance({
				syncPosition: C
			}), onBeforeUnmount(() => {
				s.setBodyInstance(null)
			}), watch(toRef(e, "show"), k => {
				e.animated || (k ? d.value = !0 : d.value = !1)
			});

			function C() {
				var k;
				(k = l.value) === null || k === void 0 || k.syncPosition()
			}

			function b(k) {
				e.trigger === "hover" && e.keepAliveOnHover && e.show && s.handleMouseEnter(k)
			}

			function x(k) {
				e.trigger === "hover" && e.keepAliveOnHover && s.handleMouseLeave(k)
			}

			function S(k) {
				e.trigger === "hover" && !y().contains(getPreciseEventTarget(k)) && s.handleMouseMoveOutside(k)
			}

			function w(k) {
				(e.trigger === "click" && !y().contains(getPreciseEventTarget(k)) || e.onClickoutside) && s
					.handleClickOutside(k)
			}

			function y() {
				return s.getTriggerElement()
			}
			provide(popoverBodyInjectionKey, u), provide(drawerBodyInjectionKey, null), provide(
				modalBodyInjectionKey, null);

			function R() {
				if (m == null || m.onRender(), !(e.displayDirective === "show" || e.show || e.animated && f.value))
					return null;
				let B;
				const T = s.internalRenderBodyRef.value,
					{
						value: M
					} = r;
				if (T) B = T([`${M}-popover-shared`, m == null ? void 0 : m.themeClass.value, e.overlap &&
					`${M}-popover-shared--overlap`, e.showArrow && `${M}-popover-shared--show-arrow`, e
					.arrowPointToCenter && `${M}-popover-shared--center-arrow`
				], u, g.value, b, x);
				else {
					const {
						value: E
					} = s.extraClassRef, {
						internalTrapFocus: $
					} = e, _ = !isSlotEmpty(t.header) || !isSlotEmpty(t.footer), O = () => {
						var N, D;
						const F = _ ? h(Fragment, null, resolveWrappedSlot(t.header, Q => Q ? h("div", {
								class: [`${M}-popover__header`, e.headerClass],
								style: e.headerStyle
							}, Q) : null), resolveWrappedSlot(t.default, Q => Q ? h("div", {
								class: [`${M}-popover__content`, e.contentClass],
								style: e.contentStyle
							}, t) : null), resolveWrappedSlot(t.footer, Q => Q ? h("div", {
								class: [`${M}-popover__footer`, e.footerClass],
								style: e.footerStyle
							}, Q) : null)) : e.scrollable ? (N = t.default) === null || N === void 0 ? void 0 :
							N.call(t) : h("div", {
								class: [`${M}-popover__content`, e.contentClass],
								style: e.contentStyle
							}, t),
							j = e.scrollable ? h(XScrollbar, {
								contentClass: _ ? void 0 :
									`${M}-popover__content ${(D=e.contentClass)!==null&&D!==void 0?D:""}`,
								contentStyle: _ ? void 0 : e.contentStyle
							}, {
								default: () => F
							}) : F,
							J = e.showArrow ? renderArrow({
								arrowClass: e.arrowClass,
								arrowStyle: e.arrowStyle,
								arrowWrapperClass: e.arrowWrapperClass,
								arrowWrapperStyle: e.arrowWrapperStyle,
								clsPrefix: M
							}) : null;
						return [j, J]
					};
					B = h("div", mergeProps({
						class: [`${M}-popover`, `${M}-popover-shared`, m == null ? void 0 : m.themeClass
							.value, E.map(N => `${M}-${N}`), {
								[`${M}-popover--scrollable`]: e.scrollable,
								[`${M}-popover--show-header-or-footer`]: _,
								[`${M}-popover--raw`]: e.raw,
								[`${M}-popover-shared--overlap`]: e.overlap,
								[`${M}-popover-shared--show-arrow`]: e.showArrow,
								[`${M}-popover-shared--center-arrow`]: e.arrowPointToCenter
							}
						],
						ref: u,
						style: g.value,
						onKeydown: s.handleKeydown,
						onMouseenter: b,
						onMouseleave: x
					}, n), $ ? h(FocusTrap, {
						active: e.show,
						autoFocus: !0
					}, {
						default: O
					}) : O())
				}
				return withDirectives(B, v.value)
			}
			return {
				displayed: f,
				namespace: o,
				isMounted: s.isMountedRef,
				zIndex: s.zIndexRef,
				followerRef: l,
				adjustedTo: useAdjustedTo(e),
				followerEnabled: d,
				renderContentNode: R
			}
		},
		render() {
			return h(VFollower, {
				ref: "followerRef",
				zIndex: this.zIndex,
				show: this.show,
				enabled: this.followerEnabled,
				to: this.adjustedTo,
				x: this.x,
				y: this.y,
				flip: this.flip,
				placement: this.placement,
				containerClass: this.namespace,
				overlap: this.overlap,
				width: this.width === "trigger" ? "target" : void 0,
				teleportDisabled: this.adjustedTo === useAdjustedTo.tdkey
			}, {
				default: () => this.animated ? h(Transition, {
					name: "popover-transition",
					appear: this.isMounted,
					onEnter: () => {
						this.followerEnabled = !0
					},
					onAfterLeave: () => {
						var e;
						(e = this.internalOnAfterLeave) === null || e === void 0 || e.call(
							this), this.followerEnabled = !1, this.displayed = !1
					}
				}, {
					default: this.renderContentNode
				}) : this.renderContentNode()
			})
		}
	}),
	bodyPropKeys = Object.keys(popoverBodyProps),
	triggerEventMap = {
		focus: ["onFocus", "onBlur"],
		click: ["onClick"],
		hover: ["onMouseenter", "onMouseleave"],
		manual: [],
		nested: ["onFocus", "onBlur", "onMouseenter", "onMouseleave", "onClick"]
	};

function appendEvents(e, t, n) {
	triggerEventMap[t].forEach(o => {
		e.props ? e.props = Object.assign({}, e.props) : e.props = {};
		const r = e.props[o],
			i = n[o];
		r ? e.props[o] = (...a) => {
			r(...a), i(...a)
		} : e.props[o] = i
	})
}
const popoverBaseProps = {
		show: {
			type: Boolean,
			default: void 0
		},
		defaultShow: Boolean,
		showArrow: {
			type: Boolean,
			default: !0
		},
		trigger: {
			type: String,
			default: "hover"
		},
		delay: {
			type: Number,
			default: 100
		},
		duration: {
			type: Number,
			default: 100
		},
		raw: Boolean,
		placement: {
			type: String,
			default: "top"
		},
		x: Number,
		y: Number,
		arrowPointToCenter: Boolean,
		disabled: Boolean,
		getDisabled: Function,
		displayDirective: {
			type: String,
			default: "if"
		},
		arrowClass: String,
		arrowStyle: [String, Object],
		arrowWrapperClass: String,
		arrowWrapperStyle: [String, Object],
		flip: {
			type: Boolean,
			default: !0
		},
		animated: {
			type: Boolean,
			default: !0
		},
		width: {
			type: [Number, String],
			default: void 0
		},
		overlap: Boolean,
		keepAliveOnHover: {
			type: Boolean,
			default: !0
		},
		zIndex: Number,
		to: useAdjustedTo.propTo,
		scrollable: Boolean,
		contentClass: String,
		contentStyle: [Object, String],
		headerClass: String,
		headerStyle: [Object, String],
		footerClass: String,
		footerStyle: [Object, String],
		onClickoutside: Function,
		"onUpdate:show": [Function, Array],
		onUpdateShow: [Function, Array],
		internalDeactivateImmediately: Boolean,
		internalSyncTargetWithParent: Boolean,
		internalInheritedEventHandlers: {
			type: Array,
			default: () => []
		},
		internalTrapFocus: Boolean,
		internalExtraClass: {
			type: Array,
			default: () => []
		},
		onShow: [Function, Array],
		onHide: [Function, Array],
		arrow: {
			type: Boolean,
			default: void 0
		},
		minWidth: Number,
		maxWidth: Number
	},
	popoverProps = Object.assign(Object.assign(Object.assign({}, useTheme.props), popoverBaseProps), {
		internalOnAfterLeave: Function,
		internalRenderBody: Function
	}),
	NPopover = defineComponent({
		name: "Popover",
		inheritAttrs: !1,
		props: popoverProps,
		__popover__: !0,
		setup(e) {
			const t = isMounted(),
				n = ref(null),
				o = computed(() => e.show),
				r = ref(e.defaultShow),
				i = useMergedState(o, r),
				a = useMemo(() => e.disabled ? !1 : i.value),
				l = () => {
					if (e.disabled) return !0;
					const {
						getDisabled: N
					} = e;
					return !!(N != null && N())
				},
				s = () => l() ? !1 : i.value,
				u = useCompitable(e, ["arrow", "showArrow"]),
				d = computed(() => e.overlap ? !1 : u.value);
			let f = null;
			const v = ref(null),
				g = ref(null),
				p = useMemo(() => e.x !== void 0 && e.y !== void 0);

			function m(N) {
				const {
					"onUpdate:show": D,
					onUpdateShow: F,
					onShow: j,
					onHide: J
				} = e;
				r.value = N, D && call(D, N), F && call(F, N), N && j && call(j, !0), N && J && call(J, !1)
			}

			function C() {
				f && f.syncPosition()
			}

			function b() {
				const {
					value: N
				} = v;
				N && (window.clearTimeout(N), v.value = null)
			}

			function x() {
				const {
					value: N
				} = g;
				N && (window.clearTimeout(N), g.value = null)
			}

			function S() {
				const N = l();
				if (e.trigger === "focus" && !N) {
					if (s()) return;
					m(!0)
				}
			}

			function w() {
				const N = l();
				if (e.trigger === "focus" && !N) {
					if (!s()) return;
					m(!1)
				}
			}

			function y() {
				const N = l();
				if (e.trigger === "hover" && !N) {
					if (x(), v.value !== null || s()) return;
					const D = () => {
							m(!0), v.value = null
						},
						{
							delay: F
						} = e;
					F === 0 ? D() : v.value = window.setTimeout(D, F)
				}
			}

			function R() {
				const N = l();
				if (e.trigger === "hover" && !N) {
					if (b(), g.value !== null || !s()) return;
					const D = () => {
							m(!1), g.value = null
						},
						{
							duration: F
						} = e;
					F === 0 ? D() : g.value = window.setTimeout(D, F)
				}
			}

			function k() {
				R()
			}

			function B(N) {
				var D;
				s() && (e.trigger === "click" && (b(), x(), m(!1)), (D = e.onClickoutside) === null || D ===
					void 0 || D.call(e, N))
			}

			function T() {
				if (e.trigger === "click" && !l()) {
					b(), x();
					const N = !s();
					m(N)
				}
			}

			function M(N) {
				e.internalTrapFocus && N.key === "Escape" && (b(), x(), m(!1))
			}

			function E(N) {
				r.value = N
			}

			function $() {
				var N;
				return (N = n.value) === null || N === void 0 ? void 0 : N.targetRef
			}

			function _(N) {
				f = N
			}
			return provide("NPopover", {
				getTriggerElement: $,
				handleKeydown: M,
				handleMouseEnter: y,
				handleMouseLeave: R,
				handleClickOutside: B,
				handleMouseMoveOutside: k,
				setBodyInstance: _,
				positionManuallyRef: p,
				isMountedRef: t,
				zIndexRef: toRef(e, "zIndex"),
				extraClassRef: toRef(e, "internalExtraClass"),
				internalRenderBodyRef: toRef(e, "internalRenderBody")
			}), watchEffect(() => {
				i.value && l() && m(!1)
			}), {
				binderInstRef: n,
				positionManually: p,
				mergedShowConsideringDisabledProp: a,
				uncontrolledShow: r,
				mergedShowArrow: d,
				getMergedShow: s,
				setShow: E,
				handleClick: T,
				handleMouseEnter: y,
				handleMouseLeave: R,
				handleFocus: S,
				handleBlur: w,
				syncPosition: C
			}
		},
		render() {
			var e;
			const {
				positionManually: t,
				$slots: n
			} = this;
			let o, r = !1;
			if (!t && (n.activator ? o = getFirstSlotVNode(n, "activator") : o = getFirstSlotVNode(n, "trigger"),
				o)) {
				o = cloneVNode(o), o = o.type === Text ? h("span", [o]) : o;
				const i = {
					onClick: this.handleClick,
					onMouseenter: this.handleMouseEnter,
					onMouseleave: this.handleMouseLeave,
					onFocus: this.handleFocus,
					onBlur: this.handleBlur
				};
				if (!((e = o.type) === null || e === void 0) && e.__popover__) r = !0, o.props || (o.props = {
						internalSyncTargetWithParent: !0,
						internalInheritedEventHandlers: []
					}), o.props.internalSyncTargetWithParent = !0, o.props.internalInheritedEventHandlers ? o.props
					.internalInheritedEventHandlers = [i, ...o.props.internalInheritedEventHandlers] : o.props
					.internalInheritedEventHandlers = [i];
				else {
					const {
						internalInheritedEventHandlers: a
					} = this, l = [i, ...a], s = {
						onBlur: u => {
							l.forEach(d => {
								d.onBlur(u)
							})
						},
						onFocus: u => {
							l.forEach(d => {
								d.onFocus(u)
							})
						},
						onClick: u => {
							l.forEach(d => {
								d.onClick(u)
							})
						},
						onMouseenter: u => {
							l.forEach(d => {
								d.onMouseenter(u)
							})
						},
						onMouseleave: u => {
							l.forEach(d => {
								d.onMouseleave(u)
							})
						}
					};
					appendEvents(o, a ? "nested" : t ? "manual" : this.trigger, s)
				}
			}
			return h(VBinder, {
				ref: "binderInstRef",
				syncTarget: !r,
				syncTargetWithParent: this.internalSyncTargetWithParent
			}, {
				default: () => {
					this.mergedShowConsideringDisabledProp;
					const i = this.getMergedShow();
					return [this.internalTrapFocus && i ? withDirectives(h("div", {
						style: {
							position: "fixed",
							inset: 0
						}
					}), [
						[zindexable, {
							enabled: i,
							zIndex: this.zIndex
						}]
					]) : null, t ? null : h(VTarget, null, {
						default: () => o
					}), h(NPopoverBody, keep(this.$props, bodyPropKeys, Object.assign(Object
						.assign({}, this.$attrs), {
							showArrow: this.mergedShowArrow,
							show: i
						})), {
						default: () => {
							var a, l;
							return (l = (a = this.$slots).default) === null || l ===
								void 0 ? void 0 : l.call(a)
						},
						header: () => {
							var a, l;
							return (l = (a = this.$slots).header) === null || l ===
								void 0 ? void 0 : l.call(a)
						},
						footer: () => {
							var a, l;
							return (l = (a = this.$slots).footer) === null || l ===
								void 0 ? void 0 : l.call(a)
						}
					})]
				}
			})
		}
	}),
	commonProps = {
		color: Object,
		type: {
			type: String,
			default: "default"
		},
		round: Boolean,
		size: {
			type: String,
			default: "medium"
		},
		closable: Boolean,
		disabled: {
			type: Boolean,
			default: void 0
		}
	},
	style$o = cB("tag", `
 --n-close-margin: var(--n-close-margin-top) var(--n-close-margin-right) var(--n-close-margin-bottom) var(--n-close-margin-left);
 white-space: nowrap;
 position: relative;
 box-sizing: border-box;
 cursor: default;
 display: inline-flex;
 align-items: center;
 flex-wrap: nowrap;
 padding: var(--n-padding);
 border-radius: var(--n-border-radius);
 color: var(--n-text-color);
 background-color: var(--n-color);
 transition: 
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 line-height: 1;
 height: var(--n-height);
 font-size: var(--n-font-size);
`, [cM("strong", `
 font-weight: var(--n-font-weight-strong);
 `), cE("border", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 border: var(--n-border);
 transition: border-color .3s var(--n-bezier);
 `), cE("icon", `
 display: flex;
 margin: 0 4px 0 0;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 font-size: var(--n-avatar-size-override);
 `), cE("avatar", `
 display: flex;
 margin: 0 6px 0 0;
 `), cE("close", `
 margin: var(--n-close-margin);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 `), cM("round", `
 padding: 0 calc(var(--n-height) / 3);
 border-radius: calc(var(--n-height) / 2);
 `, [cE("icon", `
 margin: 0 4px 0 calc((var(--n-height) - 8px) / -2);
 `), cE("avatar", `
 margin: 0 6px 0 calc((var(--n-height) - 8px) / -2);
 `), cM("closable", `
 padding: 0 calc(var(--n-height) / 4) 0 calc(var(--n-height) / 3);
 `)]), cM("icon, avatar", [cM("round", `
 padding: 0 calc(var(--n-height) / 3) 0 calc(var(--n-height) / 2);
 `)]), cM("disabled", `
 cursor: not-allowed !important;
 opacity: var(--n-opacity-disabled);
 `), cM("checkable", `
 cursor: pointer;
 box-shadow: none;
 color: var(--n-text-color-checkable);
 background-color: var(--n-color-checkable);
 `, [cNotM("disabled", [c$1("&:hover", "background-color: var(--n-color-hover-checkable);", [cNotM("checked",
		"color: var(--n-text-color-hover-checkable);")]), c$1("&:active",
		"background-color: var(--n-color-pressed-checkable);", [cNotM("checked",
			"color: var(--n-text-color-pressed-checkable);")])]), cM("checked", `
 color: var(--n-text-color-checked);
 background-color: var(--n-color-checked);
 `, [cNotM("disabled", [c$1("&:hover", "background-color: var(--n-color-checked-hover);"), c$1("&:active",
		"background-color: var(--n-color-checked-pressed);")])])])]),
	tagProps = Object.assign(Object.assign(Object.assign({}, useTheme.props), commonProps), {
		bordered: {
			type: Boolean,
			default: void 0
		},
		checked: Boolean,
		checkable: Boolean,
		strong: Boolean,
		triggerClickOnClose: Boolean,
		onClose: [Array, Function],
		onMouseenter: Function,
		onMouseleave: Function,
		"onUpdate:checked": Function,
		onUpdateChecked: Function,
		internalCloseFocusable: {
			type: Boolean,
			default: !0
		},
		internalCloseIsButtonTag: {
			type: Boolean,
			default: !0
		},
		onCheckedChange: Function
	}),
	tagInjectionKey = createInjectionKey("n-tag"),
	NTag = defineComponent({
		name: "Tag",
		props: tagProps,
		setup(e) {
			const t = ref(null),
				{
					mergedBorderedRef: n,
					mergedClsPrefixRef: o,
					inlineThemeDisabled: r,
					mergedRtlRef: i
				} = useConfig(e),
				a = useTheme("Tag", "-tag", style$o, tagLight, e, o);
			provide(tagInjectionKey, {
				roundRef: toRef(e, "round")
			});

			function l(g) {
				if (!e.disabled && e.checkable) {
					const {
						checked: p,
						onCheckedChange: m,
						onUpdateChecked: C,
						"onUpdate:checked": b
					} = e;
					C && C(!p), b && b(!p), m && m(!p)
				}
			}

			function s(g) {
				if (e.triggerClickOnClose || g.stopPropagation(), !e.disabled) {
					const {
						onClose: p
					} = e;
					p && call(p, g)
				}
			}
			const u = {
					setTextContent(g) {
						const {
							value: p
						} = t;
						p && (p.textContent = g)
					}
				},
				d = useRtl("Tag", i, o),
				f = computed(() => {
					const {
						type: g,
						size: p,
						color: {
							color: m,
							textColor: C
						} = {}
					} = e, {
						common: {
							cubicBezierEaseInOut: b
						},
						self: {
							padding: x,
							closeMargin: S,
							borderRadius: w,
							opacityDisabled: y,
							textColorCheckable: R,
							textColorHoverCheckable: k,
							textColorPressedCheckable: B,
							textColorChecked: T,
							colorCheckable: M,
							colorHoverCheckable: E,
							colorPressedCheckable: $,
							colorChecked: _,
							colorCheckedHover: O,
							colorCheckedPressed: N,
							closeBorderRadius: D,
							fontWeightStrong: F,
							[createKey("colorBordered", g)]: j,
							[createKey("closeSize", p)]: J,
							[createKey("closeIconSize", p)]: Q,
							[createKey("fontSize", p)]: re,
							[createKey("height", p)]: L,
							[createKey("color", g)]: W,
							[createKey("textColor", g)]: ee,
							[createKey("border", g)]: ie,
							[createKey("closeIconColor", g)]: pe,
							[createKey("closeIconColorHover", g)]: oe,
							[createKey("closeIconColorPressed", g)]: me,
							[createKey("closeColorHover", g)]: ve,
							[createKey("closeColorPressed", g)]: Se
						}
					} = a.value, ge = getMargin(S);
					return {
						"--n-font-weight-strong": F,
						"--n-avatar-size-override": `calc(${L} - 8px)`,
						"--n-bezier": b,
						"--n-border-radius": w,
						"--n-border": ie,
						"--n-close-icon-size": Q,
						"--n-close-color-pressed": Se,
						"--n-close-color-hover": ve,
						"--n-close-border-radius": D,
						"--n-close-icon-color": pe,
						"--n-close-icon-color-hover": oe,
						"--n-close-icon-color-pressed": me,
						"--n-close-icon-color-disabled": pe,
						"--n-close-margin-top": ge.top,
						"--n-close-margin-right": ge.right,
						"--n-close-margin-bottom": ge.bottom,
						"--n-close-margin-left": ge.left,
						"--n-close-size": J,
						"--n-color": m || (n.value ? j : W),
						"--n-color-checkable": M,
						"--n-color-checked": _,
						"--n-color-checked-hover": O,
						"--n-color-checked-pressed": N,
						"--n-color-hover-checkable": E,
						"--n-color-pressed-checkable": $,
						"--n-font-size": re,
						"--n-height": L,
						"--n-opacity-disabled": y,
						"--n-padding": x,
						"--n-text-color": C || ee,
						"--n-text-color-checkable": R,
						"--n-text-color-checked": T,
						"--n-text-color-hover-checkable": k,
						"--n-text-color-pressed-checkable": B
					}
				}),
				v = r ? useThemeClass("tag", computed(() => {
					let g = "";
					const {
						type: p,
						size: m,
						color: {
							color: C,
							textColor: b
						} = {}
					} = e;
					return g += p[0], g += m[0], C && (g += `a${color2Class(C)}`), b && (g +=
						`b${color2Class(b)}`), n.value && (g += "c"), g
				}), f, e) : void 0;
			return Object.assign(Object.assign({}, u), {
				rtlEnabled: d,
				mergedClsPrefix: o,
				contentRef: t,
				mergedBordered: n,
				handleClick: l,
				handleCloseClick: s,
				cssVars: r ? void 0 : f,
				themeClass: v == null ? void 0 : v.themeClass,
				onRender: v == null ? void 0 : v.onRender
			})
		},
		render() {
			var e, t;
			const {
				mergedClsPrefix: n,
				rtlEnabled: o,
				closable: r,
				color: {
					borderColor: i
				} = {},
				round: a,
				onRender: l,
				$slots: s
			} = this;
			l == null || l();
			const u = resolveWrappedSlot(s.avatar, f => f && h("div", {
					class: `${n}-tag__avatar`
				}, f)),
				d = resolveWrappedSlot(s.icon, f => f && h("div", {
					class: `${n}-tag__icon`
				}, f));
			return h("div", {
					class: [`${n}-tag`, this.themeClass, {
						[`${n}-tag--rtl`]: o,
						[`${n}-tag--strong`]: this.strong,
						[`${n}-tag--disabled`]: this.disabled,
						[`${n}-tag--checkable`]: this.checkable,
						[`${n}-tag--checked`]: this.checkable && this.checked,
						[`${n}-tag--round`]: a,
						[`${n}-tag--avatar`]: u,
						[`${n}-tag--icon`]: d,
						[`${n}-tag--closable`]: r
					}],
					style: this.cssVars,
					onClick: this.handleClick,
					onMouseenter: this.onMouseenter,
					onMouseleave: this.onMouseleave
				}, d || u, h("span", {
					class: `${n}-tag__content`,
					ref: "contentRef"
				}, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e)), !this
				.checkable && r ? h(NBaseClose, {
					clsPrefix: n,
					class: `${n}-tag__close`,
					disabled: this.disabled,
					onClick: this.handleCloseClick,
					focusable: this.internalCloseFocusable,
					round: a,
					isButtonTag: this.internalCloseIsButtonTag,
					absolute: !0
				}) : null, !this.checkable && this.mergedBordered ? h("div", {
					class: `${n}-tag__border`,
					style: {
						borderColor: i
					}
				}) : null)
		}
	}),
	style$n = cB("base-clear", `
 flex-shrink: 0;
 height: 1em;
 width: 1em;
 position: relative;
`, [c$1(">", [cE("clear", `
 font-size: var(--n-clear-size);
 height: 1em;
 width: 1em;
 cursor: pointer;
 color: var(--n-clear-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 `, [c$1("&:hover", `
 color: var(--n-clear-color-hover)!important;
 `), c$1("&:active", `
 color: var(--n-clear-color-pressed)!important;
 `)]), cE("placeholder", `
 display: flex;
 `), cE("clear, placeholder", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [iconSwitchTransition({
		originalTransform: "translateX(-50%) translateY(-50%)",
		left: "50%",
		top: "50%"
	})])])]),
	NBaseClear = defineComponent({
		name: "BaseClear",
		props: {
			clsPrefix: {
				type: String,
				required: !0
			},
			show: Boolean,
			onClear: Function
		},
		setup(e) {
			return useStyle("-base-clear", style$n, toRef(e, "clsPrefix")), {
				handleMouseDown(t) {
					t.preventDefault()
				}
			}
		},
		render() {
			const {
				clsPrefix: e
			} = this;
			return h("div", {
				class: `${e}-base-clear`
			}, h(NIconSwitchTransition, null, {
				default: () => {
					var t, n;
					return this.show ? h("div", {
						key: "dismiss",
						class: `${e}-base-clear__clear`,
						onClick: this.onClear,
						onMousedown: this.handleMouseDown,
						"data-clear": !0
					}, resolveSlot(this.$slots.icon, () => [h(NBaseIcon, {
						clsPrefix: e
					}, {
						default: () => h(ClearIcon, null)
					})])) : h("div", {
							key: "icon",
							class: `${e}-base-clear__placeholder`
						}, (n = (t = this.$slots).placeholder) === null || n === void 0 ?
						void 0 : n.call(t))
				}
			}))
		}
	}),
	NBaseSuffix = defineComponent({
		name: "InternalSelectionSuffix",
		props: {
			clsPrefix: {
				type: String,
				required: !0
			},
			showArrow: {
				type: Boolean,
				default: void 0
			},
			showClear: {
				type: Boolean,
				default: void 0
			},
			loading: {
				type: Boolean,
				default: !1
			},
			onClear: Function
		},
		setup(e, {
			slots: t
		}) {
			return () => {
				const {
					clsPrefix: n
				} = e;
				return h(NBaseLoading, {
					clsPrefix: n,
					class: `${n}-base-suffix`,
					strokeWidth: 24,
					scale: .85,
					show: e.loading
				}, {
					default: () => e.showArrow ? h(NBaseClear, {
						clsPrefix: n,
						show: e.showClear,
						onClear: e.onClear
					}, {
						placeholder: () => h(NBaseIcon, {
							clsPrefix: n,
							class: `${n}-base-suffix__arrow`
						}, {
							default: () => resolveSlot(t.default, () => [h(
								ChevronDownIcon, null)])
						})
					}) : null
				})
			}
		}
	}),
	style$m = c$1([cB("base-selection", `
 --n-padding-single: var(--n-padding-single-top) var(--n-padding-single-right) var(--n-padding-single-bottom) var(--n-padding-single-left);
 --n-padding-multiple: var(--n-padding-multiple-top) var(--n-padding-multiple-right) var(--n-padding-multiple-bottom) var(--n-padding-multiple-left);
 position: relative;
 z-index: auto;
 box-shadow: none;
 width: 100%;
 max-width: 100%;
 display: inline-block;
 vertical-align: bottom;
 border-radius: var(--n-border-radius);
 min-height: var(--n-height);
 line-height: 1.5;
 font-size: var(--n-font-size);
 `, [cB("base-loading", `
 color: var(--n-loading-color);
 `), cB("base-selection-tags", "min-height: var(--n-height);"), cE("border, state-border", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border: var(--n-border);
 border-radius: inherit;
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `), cE("state-border", `
 z-index: 1;
 border-color: #0000;
 `), cB("base-suffix", `
 cursor: pointer;
 position: absolute;
 top: 50%;
 transform: translateY(-50%);
 right: 10px;
 `, [cE("arrow", `
 font-size: var(--n-arrow-size);
 color: var(--n-arrow-color);
 transition: color .3s var(--n-bezier);
 `)]), cB("base-selection-overlay", `
 display: flex;
 align-items: center;
 white-space: nowrap;
 pointer-events: none;
 position: absolute;
 top: 0;
 right: 0;
 bottom: 0;
 left: 0;
 padding: var(--n-padding-single);
 transition: color .3s var(--n-bezier);
 `, [cE("wrapper", `
 flex-basis: 0;
 flex-grow: 1;
 overflow: hidden;
 text-overflow: ellipsis;
 `)]), cB("base-selection-placeholder", `
 color: var(--n-placeholder-color);
 `, [cE("inner", `
 max-width: 100%;
 overflow: hidden;
 `)]), cB("base-selection-tags", `
 cursor: pointer;
 outline: none;
 box-sizing: border-box;
 position: relative;
 z-index: auto;
 display: flex;
 padding: var(--n-padding-multiple);
 flex-wrap: wrap;
 align-items: center;
 width: 100%;
 vertical-align: bottom;
 background-color: var(--n-color);
 border-radius: inherit;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `), cB("base-selection-label", `
 height: var(--n-height);
 display: inline-flex;
 width: 100%;
 vertical-align: bottom;
 cursor: pointer;
 outline: none;
 z-index: auto;
 box-sizing: border-box;
 position: relative;
 transition:
 color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 border-radius: inherit;
 background-color: var(--n-color);
 align-items: center;
 `, [cB("base-selection-input", `
 font-size: inherit;
 line-height: inherit;
 outline: none;
 cursor: pointer;
 box-sizing: border-box;
 border:none;
 width: 100%;
 padding: var(--n-padding-single);
 background-color: #0000;
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 caret-color: var(--n-caret-color);
 `, [cE("content", `
 text-overflow: ellipsis;
 overflow: hidden;
 white-space: nowrap; 
 `)]), cE("render-label", `
 color: var(--n-text-color);
 `)]), cNotM("disabled", [c$1("&:hover", [cE("state-border", `
 box-shadow: var(--n-box-shadow-hover);
 border: var(--n-border-hover);
 `)]), cM("focus", [cE("state-border", `
 box-shadow: var(--n-box-shadow-focus);
 border: var(--n-border-focus);
 `)]), cM("active", [cE("state-border", `
 box-shadow: var(--n-box-shadow-active);
 border: var(--n-border-active);
 `), cB("base-selection-label", "background-color: var(--n-color-active);"), cB("base-selection-tags",
		"background-color: var(--n-color-active);")])]), cM("disabled", "cursor: not-allowed;", [cE(
		"arrow", `
 color: var(--n-arrow-color-disabled);
 `), cB("base-selection-label", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `, [cB("base-selection-input", `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 `), cE("render-label", `
 color: var(--n-text-color-disabled);
 `)]), cB("base-selection-tags", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `), cB("base-selection-placeholder", `
 cursor: not-allowed;
 color: var(--n-placeholder-color-disabled);
 `)]), cB("base-selection-input-tag", `
 height: calc(var(--n-height) - 6px);
 line-height: calc(var(--n-height) - 6px);
 outline: none;
 display: none;
 position: relative;
 margin-bottom: 3px;
 max-width: 100%;
 vertical-align: bottom;
 `, [cE("input", `
 font-size: inherit;
 font-family: inherit;
 min-width: 1px;
 padding: 0;
 background-color: #0000;
 outline: none;
 border: none;
 max-width: 100%;
 overflow: hidden;
 width: 1em;
 line-height: inherit;
 cursor: pointer;
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 `), cE("mirror", `
 position: absolute;
 left: 0;
 top: 0;
 white-space: pre;
 visibility: hidden;
 user-select: none;
 -webkit-user-select: none;
 opacity: 0;
 `)]), ["warning", "error"].map(e => cM(`${e}-status`, [cE("state-border", `border: var(--n-border-${e});`), cNotM(
		"disabled", [c$1("&:hover", [cE("state-border", `
 box-shadow: var(--n-box-shadow-hover-${e});
 border: var(--n-border-hover-${e});
 `)]), cM("active", [cE("state-border", `
 box-shadow: var(--n-box-shadow-active-${e});
 border: var(--n-border-active-${e});
 `), cB("base-selection-label", `background-color: var(--n-color-active-${e});`), cB("base-selection-tags",
			`background-color: var(--n-color-active-${e});`)]), cM("focus", [cE(
			"state-border", `
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]), cB("base-selection-popover", `
 margin-bottom: -3px;
 display: flex;
 flex-wrap: wrap;
 margin-right: -8px;
 `), cB("base-selection-tag-wrapper", `
 max-width: 100%;
 display: inline-flex;
 padding: 0 7px 3px 0;
 `, [c$1("&:last-child", "padding-right: 0;"), cB("tag", `
 font-size: 14px;
 max-width: 100%;
 `, [cE("content", `
 line-height: 1.25;
 text-overflow: ellipsis;
 overflow: hidden;
 `)])])]),
	NInternalSelection = defineComponent({
		name: "InternalSelection",
		props: Object.assign(Object.assign({}, useTheme.props), {
			clsPrefix: {
				type: String,
				required: !0
			},
			bordered: {
				type: Boolean,
				default: void 0
			},
			active: Boolean,
			pattern: {
				type: String,
				default: ""
			},
			placeholder: String,
			selectedOption: {
				type: Object,
				default: null
			},
			selectedOptions: {
				type: Array,
				default: null
			},
			labelField: {
				type: String,
				default: "label"
			},
			valueField: {
				type: String,
				default: "value"
			},
			multiple: Boolean,
			filterable: Boolean,
			clearable: Boolean,
			disabled: Boolean,
			size: {
				type: String,
				default: "medium"
			},
			loading: Boolean,
			autofocus: Boolean,
			showArrow: {
				type: Boolean,
				default: !0
			},
			inputProps: Object,
			focused: Boolean,
			renderTag: Function,
			onKeydown: Function,
			onClick: Function,
			onBlur: Function,
			onFocus: Function,
			onDeleteOption: Function,
			maxTagCount: [String, Number],
			ellipsisTagPopoverProps: Object,
			onClear: Function,
			onPatternInput: Function,
			onPatternFocus: Function,
			onPatternBlur: Function,
			renderLabel: Function,
			status: String,
			inlineThemeDisabled: Boolean,
			ignoreComposition: {
				type: Boolean,
				default: !0
			},
			onResize: Function
		}),
		setup(e) {
			const {
				mergedClsPrefixRef: t,
				mergedRtlRef: n
			} = useConfig(e), o = useRtl("InternalSelection", n, t), r = ref(null), i = ref(null), a = ref(null),
				l = ref(null), s = ref(null), u = ref(null), d = ref(null), f = ref(null), v = ref(null), g = ref(
					null), p = ref(!1), m = ref(!1), C = ref(!1), b = useTheme("InternalSelection",
					"-internal-selection", style$m, internalSelectionLight, e, toRef(e, "clsPrefix")), x = computed(
					() => e.clearable && !e.disabled && (C.value || e.active)), S = computed(() => e
					.selectedOption ? e.renderTag ? e.renderTag({
						option: e.selectedOption,
						handleClose: () => {}
					}) : e.renderLabel ? e.renderLabel(e.selectedOption, !0) : render(e.selectedOption[e
						.labelField], e.selectedOption, !0) : e.placeholder), w = computed(() => {
					const K = e.selectedOption;
					if (K) return K[e.labelField]
				}), y = computed(() => e.multiple ? !!(Array.isArray(e.selectedOptions) && e.selectedOptions
					.length) : e.selectedOption !== null);

			function R() {
				var K;
				const {
					value: Z
				} = r;
				if (Z) {
					const {
						value: be
					} = i;
					be && (be.style.width = `${Z.offsetWidth}px`, e.maxTagCount !== "responsive" && ((K = v
						.value) === null || K === void 0 || K.sync({
							showAllItemsBeforeCalculate: !1
						})))
				}
			}

			function k() {
				const {
					value: K
				} = g;
				K && (K.style.display = "none")
			}

			function B() {
				const {
					value: K
				} = g;
				K && (K.style.display = "inline-block")
			}
			watch(toRef(e, "active"), K => {
				K || k()
			}), watch(toRef(e, "pattern"), () => {
				e.multiple && nextTick(R)
			});

			function T(K) {
				const {
					onFocus: Z
				} = e;
				Z && Z(K)
			}

			function M(K) {
				const {
					onBlur: Z
				} = e;
				Z && Z(K)
			}

			function E(K) {
				const {
					onDeleteOption: Z
				} = e;
				Z && Z(K)
			}

			function $(K) {
				const {
					onClear: Z
				} = e;
				Z && Z(K)
			}

			function _(K) {
				const {
					onPatternInput: Z
				} = e;
				Z && Z(K)
			}

			function O(K) {
				var Z;
				(!K.relatedTarget || !(!((Z = a.value) === null || Z === void 0) && Z.contains(K.relatedTarget))) &&
				T(K)
			}

			function N(K) {
				var Z;
				!((Z = a.value) === null || Z === void 0) && Z.contains(K.relatedTarget) || M(K)
			}

			function D(K) {
				$(K)
			}

			function F() {
				C.value = !0
			}

			function j() {
				C.value = !1
			}

			function J(K) {
				!e.active || !e.filterable || K.target !== i.value && K.preventDefault()
			}

			function Q(K) {
				E(K)
			}

			function re(K) {
				if (K.key === "Backspace" && !L.value && !e.pattern.length) {
					const {
						selectedOptions: Z
					} = e;
					Z != null && Z.length && Q(Z[Z.length - 1])
				}
			}
			const L = ref(!1);
			let W = null;

			function ee(K) {
				const {
					value: Z
				} = r;
				if (Z) {
					const be = K.target.value;
					Z.textContent = be, R()
				}
				e.ignoreComposition && L.value ? W = K : _(K)
			}

			function ie() {
				L.value = !0
			}

			function pe() {
				L.value = !1, e.ignoreComposition && _(W), W = null
			}

			function oe(K) {
				var Z;
				m.value = !0, (Z = e.onPatternFocus) === null || Z === void 0 || Z.call(e, K)
			}

			function me(K) {
				var Z;
				m.value = !1, (Z = e.onPatternBlur) === null || Z === void 0 || Z.call(e, K)
			}

			function ve() {
				var K, Z;
				if (e.filterable) m.value = !1, (K = u.value) === null || K === void 0 || K.blur(), (Z = i
					.value) === null || Z === void 0 || Z.blur();
				else if (e.multiple) {
					const {
						value: be
					} = l;
					be == null || be.blur()
				} else {
					const {
						value: be
					} = s;
					be == null || be.blur()
				}
			}

			function Se() {
				var K, Z, be;
				e.filterable ? (m.value = !1, (K = u.value) === null || K === void 0 || K.focus()) : e.multiple ? (
						Z = l.value) === null || Z === void 0 || Z.focus() : (be = s.value) === null || be ===
					void 0 || be.focus()
			}

			function ge() {
				const {
					value: K
				} = i;
				K && (B(), K.focus())
			}

			function ae() {
				const {
					value: K
				} = i;
				K && K.blur()
			}

			function H(K) {
				const {
					value: Z
				} = d;
				Z && Z.setTextContent(`+${K}`)
			}

			function q() {
				const {
					value: K
				} = f;
				return K
			}

			function A() {
				return i.value
			}
			let Y = null;

			function I() {
				Y !== null && window.clearTimeout(Y)
			}

			function U() {
				e.active || (I(), Y = window.setTimeout(() => {
					y.value && (p.value = !0)
				}, 100))
			}

			function G() {
				I()
			}

			function ne(K) {
				K || (I(), p.value = !1)
			}
			watch(y, K => {
				K || (p.value = !1)
			}), onMounted(() => {
				watchEffect(() => {
					const K = u.value;
					K && (e.disabled ? K.removeAttribute("tabindex") : K.tabIndex = m.value ? -1 :
						0)
				})
			}), useOnResize(a, e.onResize);
			const {
				inlineThemeDisabled: se
			} = e, fe = computed(() => {
				const {
					size: K
				} = e, {
					common: {
						cubicBezierEaseInOut: Z
					},
					self: {
						borderRadius: be,
						color: Pe,
						placeholderColor: $e,
						textColor: Te,
						paddingSingle: Ne,
						paddingMultiple: Me,
						caretColor: Ie,
						colorDisabled: Ke,
						textColorDisabled: Le,
						placeholderColorDisabled: Be,
						colorActive: z,
						boxShadowFocus: X,
						boxShadowActive: le,
						boxShadowHover: he,
						border: ce,
						borderFocus: de,
						borderHover: ue,
						borderActive: ke,
						arrowColor: Re,
						arrowColorDisabled: We,
						loadingColor: qe,
						colorActiveWarning: Xe,
						boxShadowFocusWarning: Ve,
						boxShadowActiveWarning: De,
						boxShadowHoverWarning: Ye,
						borderWarning: Ze,
						borderFocusWarning: Ge,
						borderHoverWarning: Oe,
						borderActiveWarning: P,
						colorActiveError: V,
						boxShadowFocusError: te,
						boxShadowActiveError: we,
						boxShadowHoverError: Ce,
						borderError: ye,
						borderFocusError: _e,
						borderHoverError: Ee,
						borderActiveError: ze,
						clearColor: Ae,
						clearColorHover: Fe,
						clearColorPressed: He,
						clearSize: Je,
						arrowSize: Qe,
						[createKey("height", K)]: et,
						[createKey("fontSize", K)]: tt
					}
				} = b.value, je = getMargin(Ne), Ue = getMargin(Me);
				return {
					"--n-bezier": Z,
					"--n-border": ce,
					"--n-border-active": ke,
					"--n-border-focus": de,
					"--n-border-hover": ue,
					"--n-border-radius": be,
					"--n-box-shadow-active": le,
					"--n-box-shadow-focus": X,
					"--n-box-shadow-hover": he,
					"--n-caret-color": Ie,
					"--n-color": Pe,
					"--n-color-active": z,
					"--n-color-disabled": Ke,
					"--n-font-size": tt,
					"--n-height": et,
					"--n-padding-single-top": je.top,
					"--n-padding-multiple-top": Ue.top,
					"--n-padding-single-right": je.right,
					"--n-padding-multiple-right": Ue.right,
					"--n-padding-single-left": je.left,
					"--n-padding-multiple-left": Ue.left,
					"--n-padding-single-bottom": je.bottom,
					"--n-padding-multiple-bottom": Ue.bottom,
					"--n-placeholder-color": $e,
					"--n-placeholder-color-disabled": Be,
					"--n-text-color": Te,
					"--n-text-color-disabled": Le,
					"--n-arrow-color": Re,
					"--n-arrow-color-disabled": We,
					"--n-loading-color": qe,
					"--n-color-active-warning": Xe,
					"--n-box-shadow-focus-warning": Ve,
					"--n-box-shadow-active-warning": De,
					"--n-box-shadow-hover-warning": Ye,
					"--n-border-warning": Ze,
					"--n-border-focus-warning": Ge,
					"--n-border-hover-warning": Oe,
					"--n-border-active-warning": P,
					"--n-color-active-error": V,
					"--n-box-shadow-focus-error": te,
					"--n-box-shadow-active-error": we,
					"--n-box-shadow-hover-error": Ce,
					"--n-border-error": ye,
					"--n-border-focus-error": _e,
					"--n-border-hover-error": Ee,
					"--n-border-active-error": ze,
					"--n-clear-size": Je,
					"--n-clear-color": Ae,
					"--n-clear-color-hover": Fe,
					"--n-clear-color-pressed": He,
					"--n-arrow-size": Qe
				}
			}), xe = se ? useThemeClass("internal-selection", computed(() => e.size[0]), fe, e) : void 0;
			return {
				mergedTheme: b,
				mergedClearable: x,
				mergedClsPrefix: t,
				rtlEnabled: o,
				patternInputFocused: m,
				filterablePlaceholder: S,
				label: w,
				selected: y,
				showTagsPanel: p,
				isComposing: L,
				counterRef: d,
				counterWrapperRef: f,
				patternInputMirrorRef: r,
				patternInputRef: i,
				selfRef: a,
				multipleElRef: l,
				singleElRef: s,
				patternInputWrapperRef: u,
				overflowRef: v,
				inputTagElRef: g,
				handleMouseDown: J,
				handleFocusin: O,
				handleClear: D,
				handleMouseEnter: F,
				handleMouseLeave: j,
				handleDeleteOption: Q,
				handlePatternKeyDown: re,
				handlePatternInputInput: ee,
				handlePatternInputBlur: me,
				handlePatternInputFocus: oe,
				handleMouseEnterCounter: U,
				handleMouseLeaveCounter: G,
				handleFocusout: N,
				handleCompositionEnd: pe,
				handleCompositionStart: ie,
				onPopoverUpdateShow: ne,
				focus: Se,
				focusInput: ge,
				blur: ve,
				blurInput: ae,
				updateCounter: H,
				getCounter: q,
				getTail: A,
				renderLabel: e.renderLabel,
				cssVars: se ? void 0 : fe,
				themeClass: xe == null ? void 0 : xe.themeClass,
				onRender: xe == null ? void 0 : xe.onRender
			}
		},
		render() {
			const {
				status: e,
				multiple: t,
				size: n,
				disabled: o,
				filterable: r,
				maxTagCount: i,
				bordered: a,
				clsPrefix: l,
				ellipsisTagPopoverProps: s,
				onRender: u,
				renderTag: d,
				renderLabel: f
			} = this;
			u == null || u();
			const v = i === "responsive",
				g = typeof i == "number",
				p = v || g,
				m = h(Wrapper, null, {
					default: () => h(NBaseSuffix, {
						clsPrefix: l,
						loading: this.loading,
						showArrow: this.showArrow,
						showClear: this.mergedClearable && this.selected,
						onClear: this.handleClear
					}, {
						default: () => {
							var b, x;
							return (x = (b = this.$slots).arrow) === null || x === void 0 ? void 0 :
								x.call(b)
						}
					})
				});
			let C;
			if (t) {
				const {
					labelField: b
				} = this, x = _ => h("div", {
					class: `${l}-base-selection-tag-wrapper`,
					key: _.value
				}, d ? d({
					option: _,
					handleClose: () => {
						this.handleDeleteOption(_)
					}
				}) : h(NTag, {
					size: n,
					closable: !_.disabled,
					disabled: o,
					onClose: () => {
						this.handleDeleteOption(_)
					},
					internalCloseIsButtonTag: !1,
					internalCloseFocusable: !1
				}, {
					default: () => f ? f(_, !0) : render(_[b], _, !0)
				})), S = () => (g ? this.selectedOptions.slice(0, i) : this.selectedOptions).map(x), w = r ? h(
					"div", {
						class: `${l}-base-selection-input-tag`,
						ref: "inputTagElRef",
						key: "__input-tag__"
					}, h("input", Object.assign({}, this.inputProps, {
						ref: "patternInputRef",
						tabindex: -1,
						disabled: o,
						value: this.pattern,
						autofocus: this.autofocus,
						class: `${l}-base-selection-input-tag__input`,
						onBlur: this.handlePatternInputBlur,
						onFocus: this.handlePatternInputFocus,
						onKeydown: this.handlePatternKeyDown,
						onInput: this.handlePatternInputInput,
						onCompositionstart: this.handleCompositionStart,
						onCompositionend: this.handleCompositionEnd
					})), h("span", {
						ref: "patternInputMirrorRef",
						class: `${l}-base-selection-input-tag__mirror`
					}, this.pattern)) : null, y = v ? () => h("div", {
					class: `${l}-base-selection-tag-wrapper`,
					ref: "counterWrapperRef"
				}, h(NTag, {
					size: n,
					ref: "counterRef",
					onMouseenter: this.handleMouseEnterCounter,
					onMouseleave: this.handleMouseLeaveCounter,
					disabled: o
				})) : void 0;
				let R;
				if (g) {
					const _ = this.selectedOptions.length - i;
					_ > 0 && (R = h("div", {
						class: `${l}-base-selection-tag-wrapper`,
						key: "__counter__"
					}, h(NTag, {
						size: n,
						ref: "counterRef",
						onMouseenter: this.handleMouseEnterCounter,
						disabled: o
					}, {
						default: () => `+${_}`
					})))
				}
				const k = v ? r ? h(VOverflow, {
						ref: "overflowRef",
						updateCounter: this.updateCounter,
						getCounter: this.getCounter,
						getTail: this.getTail,
						style: {
							width: "100%",
							display: "flex",
							overflow: "hidden"
						}
					}, {
						default: S,
						counter: y,
						tail: () => w
					}) : h(VOverflow, {
						ref: "overflowRef",
						updateCounter: this.updateCounter,
						getCounter: this.getCounter,
						style: {
							width: "100%",
							display: "flex",
							overflow: "hidden"
						}
					}, {
						default: S,
						counter: y
					}) : g && R ? S().concat(R) : S(),
					B = p ? () => h("div", {
						class: `${l}-base-selection-popover`
					}, v ? S() : this.selectedOptions.map(x)) : void 0,
					T = p ? Object.assign({
						show: this.showTagsPanel,
						trigger: "hover",
						overlap: !0,
						placement: "top",
						width: "trigger",
						onUpdateShow: this.onPopoverUpdateShow,
						theme: this.mergedTheme.peers.Popover,
						themeOverrides: this.mergedTheme.peerOverrides.Popover
					}, s) : null,
					E = (this.selected ? !1 : this.active ? !this.pattern && !this.isComposing : !0) ? h("div", {
						class: `${l}-base-selection-placeholder ${l}-base-selection-overlay`
					}, h("div", {
						class: `${l}-base-selection-placeholder__inner`
					}, this.placeholder)) : null,
					$ = r ? h("div", {
						ref: "patternInputWrapperRef",
						class: `${l}-base-selection-tags`
					}, k, v ? null : w, m) : h("div", {
						ref: "multipleElRef",
						class: `${l}-base-selection-tags`,
						tabindex: o ? void 0 : 0
					}, k, m);
				C = h(Fragment, null, p ? h(NPopover, Object.assign({}, T, {
					scrollable: !0,
					style: "max-height: calc(var(--v-target-height) * 6.6);"
				}), {
					trigger: () => $,
					default: B
				}) : $, E)
			} else if (r) {
				const b = this.pattern || this.isComposing,
					x = this.active ? !b : !this.selected,
					S = this.active ? !1 : this.selected;
				C = h("div", {
						ref: "patternInputWrapperRef",
						class: `${l}-base-selection-label`,
						title: this.patternInputFocused ? void 0 : getTitleAttribute(this.label)
					}, h("input", Object.assign({}, this.inputProps, {
						ref: "patternInputRef",
						class: `${l}-base-selection-input`,
						value: this.active ? this.pattern : "",
						placeholder: "",
						readonly: o,
						disabled: o,
						tabindex: -1,
						autofocus: this.autofocus,
						onFocus: this.handlePatternInputFocus,
						onBlur: this.handlePatternInputBlur,
						onInput: this.handlePatternInputInput,
						onCompositionstart: this.handleCompositionStart,
						onCompositionend: this.handleCompositionEnd
					})), S ? h("div", {
						class: `${l}-base-selection-label__render-label ${l}-base-selection-overlay`,
						key: "input"
					}, h("div", {
						class: `${l}-base-selection-overlay__wrapper`
					}, d ? d({
						option: this.selectedOption,
						handleClose: () => {}
					}) : f ? f(this.selectedOption, !0) : render(this.label, this.selectedOption, !0))) : null,
					x ? h("div", {
						class: `${l}-base-selection-placeholder ${l}-base-selection-overlay`,
						key: "placeholder"
					}, h("div", {
						class: `${l}-base-selection-overlay__wrapper`
					}, this.filterablePlaceholder)) : null, m)
			} else C = h("div", {
				ref: "singleElRef",
				class: `${l}-base-selection-label`,
				tabindex: this.disabled ? void 0 : 0
			}, this.label !== void 0 ? h("div", {
				class: `${l}-base-selection-input`,
				title: getTitleAttribute(this.label),
				key: "input"
			}, h("div", {
				class: `${l}-base-selection-input__content`
			}, d ? d({
				option: this.selectedOption,
				handleClose: () => {}
			}) : f ? f(this.selectedOption, !0) : render(this.label, this.selectedOption, !0))) : h("div", {
				class: `${l}-base-selection-placeholder ${l}-base-selection-overlay`,
				key: "placeholder"
			}, h("div", {
				class: `${l}-base-selection-placeholder__inner`
			}, this.placeholder)), m);
			return h("div", {
				ref: "selfRef",
				class: [`${l}-base-selection`, this.rtlEnabled && `${l}-base-selection--rtl`, this
					.themeClass, e && `${l}-base-selection--${e}-status`, {
						[`${l}-base-selection--active`]: this.active,
						[`${l}-base-selection--selected`]: this.selected || this.active && this.pattern,
						[`${l}-base-selection--disabled`]: this.disabled,
						[`${l}-base-selection--multiple`]: this.multiple,
						[`${l}-base-selection--focus`]: this.focused
					}
				],
				style: this.cssVars,
				onClick: this.onClick,
				onMouseenter: this.handleMouseEnter,
				onMouseleave: this.handleMouseLeave,
				onKeydown: this.onKeydown,
				onFocusin: this.handleFocusin,
				onFocusout: this.handleFocusout,
				onMousedown: this.handleMouseDown
			}, C, a ? h("div", {
				class: `${l}-base-selection__border`
			}) : null, a ? h("div", {
				class: `${l}-base-selection__state-border`
			}) : null)
		}
	}),
	style$l = cB("alert", `
 line-height: var(--n-line-height);
 border-radius: var(--n-border-radius);
 position: relative;
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-color);
 text-align: start;
 word-break: break-word;
`, [cE("border", `
 border-radius: inherit;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 transition: border-color .3s var(--n-bezier);
 border: var(--n-border);
 pointer-events: none;
 `), cM("closable", [cB("alert-body", [cE("title", `
 padding-right: 24px;
 `)])]), cE("icon", {
		color: "var(--n-icon-color)"
	}), cB("alert-body", {
		padding: "var(--n-padding)"
	}, [cE("title", {
		color: "var(--n-title-text-color)"
	}), cE("content", {
		color: "var(--n-content-text-color)"
	})]), fadeInHeightExpandTransition({
		originalTransition: "transform .3s var(--n-bezier)",
		enterToProps: {
			transform: "scale(1)"
		},
		leaveToProps: {
			transform: "scale(0.9)"
		}
	}), cE("icon", `
 position: absolute;
 left: 0;
 top: 0;
 align-items: center;
 justify-content: center;
 display: flex;
 width: var(--n-icon-size);
 height: var(--n-icon-size);
 font-size: var(--n-icon-size);
 margin: var(--n-icon-margin);
 `), cE("close", `
 transition:
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 position: absolute;
 right: 0;
 top: 0;
 margin: var(--n-close-margin);
 `), cM("show-icon", [cB("alert-body", {
		paddingLeft: "calc(var(--n-icon-margin-left) + var(--n-icon-size) + var(--n-icon-margin-right))"
	})]), cM("right-adjust", [cB("alert-body", {
		paddingRight: "calc(var(--n-close-size) + var(--n-padding) + 2px)"
	})]), cB("alert-body", `
 border-radius: var(--n-border-radius);
 transition: border-color .3s var(--n-bezier);
 `, [cE("title", `
 transition: color .3s var(--n-bezier);
 font-size: 16px;
 line-height: 19px;
 font-weight: var(--n-title-font-weight);
 `, [c$1("& +", [cE("content", {
		marginTop: "9px"
	})])]), cE("content", {
		transition: "color .3s var(--n-bezier)",
		fontSize: "var(--n-font-size)"
	})]), cE("icon", {
		transition: "color .3s var(--n-bezier)"
	})]),
	alertProps = Object.assign(Object.assign({}, useTheme.props), {
		title: String,
		showIcon: {
			type: Boolean,
			default: !0
		},
		type: {
			type: String,
			default: "default"
		},
		bordered: {
			type: Boolean,
			default: !0
		},
		closable: Boolean,
		onClose: Function,
		onAfterLeave: Function,
		onAfterHide: Function
	}),
	NAlert = defineComponent({
		name: "Alert",
		inheritAttrs: !1,
		props: alertProps,
		setup(e) {
			const {
				mergedClsPrefixRef: t,
				mergedBorderedRef: n,
				inlineThemeDisabled: o,
				mergedRtlRef: r
			} = useConfig(e), i = useTheme("Alert", "-alert", style$l, alertLight, e, t), a = useRtl("Alert", r, t),
				l = computed(() => {
					const {
						common: {
							cubicBezierEaseInOut: g
						},
						self: p
					} = i.value, {
						fontSize: m,
						borderRadius: C,
						titleFontWeight: b,
						lineHeight: x,
						iconSize: S,
						iconMargin: w,
						iconMarginRtl: y,
						closeIconSize: R,
						closeBorderRadius: k,
						closeSize: B,
						closeMargin: T,
						closeMarginRtl: M,
						padding: E
					} = p, {
						type: $
					} = e, {
						left: _,
						right: O
					} = getMargin(w);
					return {
						"--n-bezier": g,
						"--n-color": p[createKey("color", $)],
						"--n-close-icon-size": R,
						"--n-close-border-radius": k,
						"--n-close-color-hover": p[createKey("closeColorHover", $)],
						"--n-close-color-pressed": p[createKey("closeColorPressed", $)],
						"--n-close-icon-color": p[createKey("closeIconColor", $)],
						"--n-close-icon-color-hover": p[createKey("closeIconColorHover", $)],
						"--n-close-icon-color-pressed": p[createKey("closeIconColorPressed", $)],
						"--n-icon-color": p[createKey("iconColor", $)],
						"--n-border": p[createKey("border", $)],
						"--n-title-text-color": p[createKey("titleTextColor", $)],
						"--n-content-text-color": p[createKey("contentTextColor", $)],
						"--n-line-height": x,
						"--n-border-radius": C,
						"--n-font-size": m,
						"--n-title-font-weight": b,
						"--n-icon-size": S,
						"--n-icon-margin": w,
						"--n-icon-margin-rtl": y,
						"--n-close-size": B,
						"--n-close-margin": T,
						"--n-close-margin-rtl": M,
						"--n-padding": E,
						"--n-icon-margin-left": _,
						"--n-icon-margin-right": O
					}
				}), s = o ? useThemeClass("alert", computed(() => e.type[0]), l, e) : void 0, u = ref(!0), d =
			() => {
					const {
						onAfterLeave: g,
						onAfterHide: p
					} = e;
					g && g(), p && p()
				};
			return {
				rtlEnabled: a,
				mergedClsPrefix: t,
				mergedBordered: n,
				visible: u,
				handleCloseClick: () => {
					var g;
					Promise.resolve((g = e.onClose) === null || g === void 0 ? void 0 : g.call(e)).then(p => {
						p !== !1 && (u.value = !1)
					})
				},
				handleAfterLeave: () => {
					d()
				},
				mergedTheme: i,
				cssVars: o ? void 0 : l,
				themeClass: s == null ? void 0 : s.themeClass,
				onRender: s == null ? void 0 : s.onRender
			}
		},
		render() {
			var e;
			return (e = this.onRender) === null || e === void 0 || e.call(this), h(NFadeInExpandTransition, {
				onAfterLeave: this.handleAfterLeave
			}, {
				default: () => {
					const {
						mergedClsPrefix: t,
						$slots: n
					} = this, o = {
						class: [`${t}-alert`, this.themeClass, this.closable &&
							`${t}-alert--closable`, this.showIcon && `${t}-alert--show-icon`, !
							this.title && this.closable && `${t}-alert--right-adjust`, this
							.rtlEnabled && `${t}-alert--rtl`
						],
						style: this.cssVars,
						role: "alert"
					};
					return this.visible ? h("div", Object.assign({}, mergeProps(this.$attrs, o)), this
						.closable && h(NBaseClose, {
							clsPrefix: t,
							class: `${t}-alert__close`,
							onClick: this.handleCloseClick
						}), this.bordered && h("div", {
							class: `${t}-alert__border`
						}), this.showIcon && h("div", {
							class: `${t}-alert__icon`,
							"aria-hidden": "true"
						}, resolveSlot(n.icon, () => [h(NBaseIcon, {
							clsPrefix: t
						}, {
							default: () => {
								switch (this.type) {
									case "success":
										return h(SuccessIcon, null);
									case "info":
										return h(InfoIcon, null);
									case "warning":
										return h(WarningIcon, null);
									case "error":
										return h(ErrorIcon, null);
									default:
										return null
								}
							}
						})])), h("div", {
							class: [`${t}-alert-body`, this.mergedBordered &&
								`${t}-alert-body--bordered`
							]
						}, resolveWrappedSlot(n.header, r => {
							const i = r || this.title;
							return i ? h("div", {
								class: `${t}-alert-body__title`
							}, i) : null
						}), n.default && h("div", {
							class: `${t}-alert-body__content`
						}, n))) : null
				}
			})
		}
	});

function getIsGroup(e) {
	return e.type === "group"
}

function getIgnored(e) {
	return e.type === "ignored"
}

function patternMatched(e, t) {
	try {
		return !!(1 + t.toString().toLowerCase().indexOf(e.trim().toLowerCase()))
	} catch {
		return !1
	}
}

function createTmOptions(e, t) {
	return {
		getIsGroup,
		getIgnored,
		getKey(o) {
			return getIsGroup(o) ? o.name || o.key || "key-required" : o[e]
		},
		getChildren(o) {
			return o[t]
		}
	}
}

function filterOptions(e, t, n, o) {
	if (!t) return e;

	function r(i) {
		if (!Array.isArray(i)) return [];
		const a = [];
		for (const l of i)
			if (getIsGroup(l)) {
				const s = r(l[o]);
				s.length && a.push(Object.assign({}, l, {
					[o]: s
				}))
			} else {
				if (getIgnored(l)) continue;
				t(n, l) && a.push(l)
			} return a
	}
	return r(e)
}

function createValOptMap(e, t, n) {
	const o = new Map;
	return e.forEach(r => {
		getIsGroup(r) ? r[n].forEach(i => {
			o.set(i[t], i)
		}) : o.set(r[t], r)
	}), o
}
const inputInjectionKey = createInjectionKey("n-input");

function len(e) {
	let t = 0;
	for (const n of e) t++;
	return t
}

function isEmptyInputValue(e) {
	return e === "" || e == null
}

function useCursor(e) {
	const t = ref(null);

	function n() {
		const {
			value: i
		} = e;
		if (!(i != null && i.focus)) {
			r();
			return
		}
		const {
			selectionStart: a,
			selectionEnd: l,
			value: s
		} = i;
		if (a == null || l == null) {
			r();
			return
		}
		t.value = {
			start: a,
			end: l,
			beforeText: s.slice(0, a),
			afterText: s.slice(l)
		}
	}

	function o() {
		var i;
		const {
			value: a
		} = t, {
			value: l
		} = e;
		if (!a || !l) return;
		const {
			value: s
		} = l, {
			start: u,
			beforeText: d,
			afterText: f
		} = a;
		let v = s.length;
		if (s.endsWith(f)) v = s.length - f.length;
		else if (s.startsWith(d)) v = d.length;
		else {
			const g = d[u - 1],
				p = s.indexOf(g, u - 1);
			p !== -1 && (v = p + 1)
		}(i = l.setSelectionRange) === null || i === void 0 || i.call(l, v, v)
	}

	function r() {
		t.value = null
	}
	return watch(e, r), {
		recordCursor: n,
		restoreCursor: o
	}
}
const WordCount = defineComponent({
		name: "InputWordCount",
		setup(e, {
			slots: t
		}) {
			const {
				mergedValueRef: n,
				maxlengthRef: o,
				mergedClsPrefixRef: r,
				countGraphemesRef: i
			} = inject(inputInjectionKey), a = computed(() => {
				const {
					value: l
				} = n;
				return l === null || Array.isArray(l) ? 0 : (i.value || len)(l)
			});
			return () => {
				const {
					value: l
				} = o, {
					value: s
				} = n;
				return h("span", {
					class: `${r.value}-input-word-count`
				}, resolveSlotWithProps(t.default, {
					value: s === null || Array.isArray(s) ? "" : s
				}, () => [l === void 0 ? a.value : `${a.value} / ${l}`]))
			}
		}
	}),
	style$k = cB("input", `
 max-width: 100%;
 cursor: text;
 line-height: 1.5;
 z-index: auto;
 outline: none;
 box-sizing: border-box;
 position: relative;
 display: inline-flex;
 border-radius: var(--n-border-radius);
 background-color: var(--n-color);
 transition: background-color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 --n-padding-vertical: calc((var(--n-height) - 1.5 * var(--n-font-size)) / 2);
`, [cE("input, textarea", `
 overflow: hidden;
 flex-grow: 1;
 position: relative;
 `), cE("input-el, textarea-el, input-mirror, textarea-mirror, separator, placeholder", `
 box-sizing: border-box;
 font-size: inherit;
 line-height: 1.5;
 font-family: inherit;
 border: none;
 outline: none;
 background-color: #0000;
 text-align: inherit;
 transition:
 -webkit-text-fill-color .3s var(--n-bezier),
 caret-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 `), cE("input-el, textarea-el", `
 -webkit-appearance: none;
 scrollbar-width: none;
 width: 100%;
 min-width: 0;
 text-decoration-color: var(--n-text-decoration-color);
 color: var(--n-text-color);
 caret-color: var(--n-caret-color);
 background-color: transparent;
 `, [c$1("&::-webkit-scrollbar, &::-webkit-scrollbar-track-piece, &::-webkit-scrollbar-thumb", `
 width: 0;
 height: 0;
 display: none;
 `), c$1("&::placeholder", `
 color: #0000;
 -webkit-text-fill-color: transparent !important;
 `), c$1("&:-webkit-autofill ~", [cE("placeholder", "display: none;")])]), cM("round", [cNotM("textarea",
		"border-radius: calc(var(--n-height) / 2);")]), cE("placeholder", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 overflow: hidden;
 color: var(--n-placeholder-color);
 `, [c$1("span", `
 width: 100%;
 display: inline-block;
 `)]), cM("textarea", [cE("placeholder", "overflow: visible;")]), cNotM("autosize", "width: 100%;"), cM("autosize", [
		cE("textarea-el, input-el", `
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 `)
	]), cB("input-wrapper", `
 overflow: hidden;
 display: inline-flex;
 flex-grow: 1;
 position: relative;
 padding-left: var(--n-padding-left);
 padding-right: var(--n-padding-right);
 `), cE("input-mirror", `
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre;
 pointer-events: none;
 `), cE("input-el", `
 padding: 0;
 height: var(--n-height);
 line-height: var(--n-height);
 `, [c$1("&[type=password]::-ms-reveal", "display: none;"), c$1("+", [cE("placeholder", `
 display: flex;
 align-items: center; 
 `)])]), cNotM("textarea", [cE("placeholder", "white-space: nowrap;")]), cE("eye", `
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `), cM("textarea", "width: 100%;", [cB("input-word-count", `
 position: absolute;
 right: var(--n-padding-right);
 bottom: var(--n-padding-vertical);
 `), cM("resizable", [cB("input-wrapper", `
 resize: vertical;
 min-height: var(--n-height);
 `)]), cE("textarea-el, textarea-mirror, placeholder", `
 height: 100%;
 padding-left: 0;
 padding-right: 0;
 padding-top: var(--n-padding-vertical);
 padding-bottom: var(--n-padding-vertical);
 word-break: break-word;
 display: inline-block;
 vertical-align: bottom;
 box-sizing: border-box;
 line-height: var(--n-line-height-textarea);
 margin: 0;
 resize: none;
 white-space: pre-wrap;
 scroll-padding-block-end: var(--n-padding-vertical);
 `), cE("textarea-mirror", `
 width: 100%;
 pointer-events: none;
 overflow: hidden;
 visibility: hidden;
 position: static;
 white-space: pre-wrap;
 overflow-wrap: break-word;
 `)]), cM("pair", [cE("input-el, placeholder", "text-align: center;"), cE("separator", `
 display: flex;
 align-items: center;
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 white-space: nowrap;
 `, [cB("icon", `
 color: var(--n-icon-color);
 `), cB("base-icon", `
 color: var(--n-icon-color);
 `)])]), cM("disabled", `
 cursor: not-allowed;
 background-color: var(--n-color-disabled);
 `, [cE("border", "border: var(--n-border-disabled);"), cE("input-el, textarea-el", `
 cursor: not-allowed;
 color: var(--n-text-color-disabled);
 text-decoration-color: var(--n-text-color-disabled);
 `), cE("placeholder", "color: var(--n-placeholder-color-disabled);"), cE("separator",
		"color: var(--n-text-color-disabled);", [cB("icon", `
 color: var(--n-icon-color-disabled);
 `), cB("base-icon", `
 color: var(--n-icon-color-disabled);
 `)]), cB("input-word-count", `
 color: var(--n-count-text-color-disabled);
 `), cE("suffix, prefix", "color: var(--n-text-color-disabled);", [cB("icon", `
 color: var(--n-icon-color-disabled);
 `), cB("internal-icon", `
 color: var(--n-icon-color-disabled);
 `)])]), cNotM("disabled", [cE("eye", `
 color: var(--n-icon-color);
 cursor: pointer;
 `, [c$1("&:hover", `
 color: var(--n-icon-color-hover);
 `), c$1("&:active", `
 color: var(--n-icon-color-pressed);
 `)]), c$1("&:hover", [cE("state-border", "border: var(--n-border-hover);")]), cM("focus",
		"background-color: var(--n-color-focus);", [cE("state-border", `
 border: var(--n-border-focus);
 box-shadow: var(--n-box-shadow-focus);
 `)])]), cE("border, state-border", `
 box-sizing: border-box;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 pointer-events: none;
 border-radius: inherit;
 border: var(--n-border);
 transition:
 box-shadow .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `), cE("state-border", `
 border-color: #0000;
 z-index: 1;
 `), cE("prefix", "margin-right: 4px;"), cE("suffix", `
 margin-left: 4px;
 `), cE("suffix, prefix", `
 transition: color .3s var(--n-bezier);
 flex-wrap: nowrap;
 flex-shrink: 0;
 line-height: var(--n-height);
 white-space: nowrap;
 display: inline-flex;
 align-items: center;
 justify-content: center;
 color: var(--n-suffix-text-color);
 `, [cB("base-loading", `
 font-size: var(--n-icon-size);
 margin: 0 2px;
 color: var(--n-loading-color);
 `), cB("base-clear", `
 font-size: var(--n-icon-size);
 `, [cE("placeholder", [cB("base-icon", `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)])]), c$1(">", [cB("icon", `
 transition: color .3s var(--n-bezier);
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]), cB("base-icon", `
 font-size: var(--n-icon-size);
 `)]), cB("input-word-count", `
 pointer-events: none;
 line-height: 1.5;
 font-size: .85em;
 color: var(--n-count-text-color);
 transition: color .3s var(--n-bezier);
 margin-left: 4px;
 font-variant: tabular-nums;
 `), ["warning", "error"].map(e => cM(`${e}-status`, [cNotM("disabled", [cB("base-loading", `
 color: var(--n-loading-color-${e})
 `), cE("input-el, textarea-el", `
 caret-color: var(--n-caret-color-${e});
 `), cE("state-border", `
 border: var(--n-border-${e});
 `), c$1("&:hover", [cE("state-border", `
 border: var(--n-border-hover-${e});
 `)]), c$1("&:focus", `
 background-color: var(--n-color-focus-${e});
 `, [cE("state-border", `
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)]), cM("focus", `
 background-color: var(--n-color-focus-${e});
 `, [cE("state-border", `
 box-shadow: var(--n-box-shadow-focus-${e});
 border: var(--n-border-focus-${e});
 `)])])]))]),
	safariStyle = cB("input", [cM("disabled", [cE("input-el, textarea-el", `
 -webkit-text-fill-color: var(--n-text-color-disabled);
 `)])]),
	inputProps = Object.assign(Object.assign({}, useTheme.props), {
		bordered: {
			type: Boolean,
			default: void 0
		},
		type: {
			type: String,
			default: "text"
		},
		placeholder: [Array, String],
		defaultValue: {
			type: [String, Array],
			default: null
		},
		value: [String, Array],
		disabled: {
			type: Boolean,
			default: void 0
		},
		size: String,
		rows: {
			type: [Number, String],
			default: 3
		},
		round: Boolean,
		minlength: [String, Number],
		maxlength: [String, Number],
		clearable: Boolean,
		autosize: {
			type: [Boolean, Object],
			default: !1
		},
		pair: Boolean,
		separator: String,
		readonly: {
			type: [String, Boolean],
			default: !1
		},
		passivelyActivated: Boolean,
		showPasswordOn: String,
		stateful: {
			type: Boolean,
			default: !0
		},
		autofocus: Boolean,
		inputProps: Object,
		resizable: {
			type: Boolean,
			default: !0
		},
		showCount: Boolean,
		loading: {
			type: Boolean,
			default: void 0
		},
		allowInput: Function,
		renderCount: Function,
		onMousedown: Function,
		onKeydown: Function,
		onKeyup: [Function, Array],
		onInput: [Function, Array],
		onFocus: [Function, Array],
		onBlur: [Function, Array],
		onClick: [Function, Array],
		onChange: [Function, Array],
		onClear: [Function, Array],
		countGraphemes: Function,
		status: String,
		"onUpdate:value": [Function, Array],
		onUpdateValue: [Function, Array],
		textDecoration: [String, Array],
		attrSize: {
			type: Number,
			default: 20
		},
		onInputBlur: [Function, Array],
		onInputFocus: [Function, Array],
		onDeactivate: [Function, Array],
		onActivate: [Function, Array],
		onWrapperFocus: [Function, Array],
		onWrapperBlur: [Function, Array],
		internalDeactivateOnEnter: Boolean,
		internalForceFocus: Boolean,
		internalLoadingBeforeSuffix: {
			type: Boolean,
			default: !0
		},
		showPasswordToggle: Boolean
	}),
	NInput = defineComponent({
		name: "Input",
		props: inputProps,
		setup(e) {
			const {
				mergedClsPrefixRef: t,
				mergedBorderedRef: n,
				inlineThemeDisabled: o,
				mergedRtlRef: r
			} = useConfig(e), i = useTheme("Input", "-input", style$k, inputLight, e, t);
			isSafari && useStyle("-input-safari", safariStyle, t);
			const a = ref(null),
				l = ref(null),
				s = ref(null),
				u = ref(null),
				d = ref(null),
				f = ref(null),
				v = ref(null),
				g = useCursor(v),
				p = ref(null),
				{
					localeRef: m
				} = useLocale("Input"),
				C = ref(e.defaultValue),
				b = toRef(e, "value"),
				x = useMergedState(b, C),
				S = useFormItem(e),
				{
					mergedSizeRef: w,
					mergedDisabledRef: y,
					mergedStatusRef: R
				} = S,
				k = ref(!1),
				B = ref(!1),
				T = ref(!1),
				M = ref(!1);
			let E = null;
			const $ = computed(() => {
					const {
						placeholder: P,
						pair: V
					} = e;
					return V ? Array.isArray(P) ? P : P === void 0 ? ["", ""] : [P, P] : P === void 0 ? [m.value
						.placeholder
					] : [P]
				}),
				_ = computed(() => {
					const {
						value: P
					} = T, {
						value: V
					} = x, {
						value: te
					} = $;
					return !P && (isEmptyInputValue(V) || Array.isArray(V) && isEmptyInputValue(V[0])) && te[0]
				}),
				O = computed(() => {
					const {
						value: P
					} = T, {
						value: V
					} = x, {
						value: te
					} = $;
					return !P && te[1] && (isEmptyInputValue(V) || Array.isArray(V) && isEmptyInputValue(V[1]))
				}),
				N = useMemo(() => e.internalForceFocus || k.value),
				D = useMemo(() => {
					if (y.value || e.readonly || !e.clearable || !N.value && !B.value) return !1;
					const {
						value: P
					} = x, {
						value: V
					} = N;
					return e.pair ? !!(Array.isArray(P) && (P[0] || P[1])) && (B.value || V) : !!P && (B
						.value || V)
				}),
				F = computed(() => {
					const {
						showPasswordOn: P
					} = e;
					if (P) return P;
					if (e.showPasswordToggle) return "click"
				}),
				j = ref(!1),
				J = computed(() => {
					const {
						textDecoration: P
					} = e;
					return P ? Array.isArray(P) ? P.map(V => ({
						textDecoration: V
					})) : [{
						textDecoration: P
					}] : ["", ""]
				}),
				Q = ref(void 0),
				re = () => {
					var P, V;
					if (e.type === "textarea") {
						const {
							autosize: te
						} = e;
						if (te && (Q.value = (V = (P = p.value) === null || P === void 0 ? void 0 : P.$el) ===
								null || V === void 0 ? void 0 : V.offsetWidth), !l.value || typeof te == "boolean")
							return;
						const {
							paddingTop: we,
							paddingBottom: Ce,
							lineHeight: ye
						} = window.getComputedStyle(l.value), _e = Number(we.slice(0, -2)), Ee = Number(Ce.slice(0,
							-2)), ze = Number(ye.slice(0, -2)), {
							value: Ae
						} = s;
						if (!Ae) return;
						if (te.minRows) {
							const Fe = Math.max(te.minRows, 1),
								He = `${_e+Ee+ze*Fe}px`;
							Ae.style.minHeight = He
						}
						if (te.maxRows) {
							const Fe = `${_e+Ee+ze*te.maxRows}px`;
							Ae.style.maxHeight = Fe
						}
					}
				},
				L = computed(() => {
					const {
						maxlength: P
					} = e;
					return P === void 0 ? void 0 : Number(P)
				});
			onMounted(() => {
				const {
					value: P
				} = x;
				Array.isArray(P) || Re(P)
			});
			const W = getCurrentInstance().proxy;

			function ee(P, V) {
				const {
					onUpdateValue: te,
					"onUpdate:value": we,
					onInput: Ce
				} = e, {
					nTriggerFormInput: ye
				} = S;
				te && call(te, P, V), we && call(we, P, V), Ce && call(Ce, P, V), C.value = P, ye()
			}

			function ie(P, V) {
				const {
					onChange: te
				} = e, {
					nTriggerFormChange: we
				} = S;
				te && call(te, P, V), C.value = P, we()
			}

			function pe(P) {
				const {
					onBlur: V
				} = e, {
					nTriggerFormBlur: te
				} = S;
				V && call(V, P), te()
			}

			function oe(P) {
				const {
					onFocus: V
				} = e, {
					nTriggerFormFocus: te
				} = S;
				V && call(V, P), te()
			}

			function me(P) {
				const {
					onClear: V
				} = e;
				V && call(V, P)
			}

			function ve(P) {
				const {
					onInputBlur: V
				} = e;
				V && call(V, P)
			}

			function Se(P) {
				const {
					onInputFocus: V
				} = e;
				V && call(V, P)
			}

			function ge() {
				const {
					onDeactivate: P
				} = e;
				P && call(P)
			}

			function ae() {
				const {
					onActivate: P
				} = e;
				P && call(P)
			}

			function H(P) {
				const {
					onClick: V
				} = e;
				V && call(V, P)
			}

			function q(P) {
				const {
					onWrapperFocus: V
				} = e;
				V && call(V, P)
			}

			function A(P) {
				const {
					onWrapperBlur: V
				} = e;
				V && call(V, P)
			}

			function Y() {
				T.value = !0
			}

			function I(P) {
				T.value = !1, P.target === f.value ? U(P, 1) : U(P, 0)
			}

			function U(P, V = 0, te = "input") {
				const we = P.target.value;
				if (Re(we), P instanceof InputEvent && !P.isComposing && (T.value = !1), e.type === "textarea") {
					const {
						value: ye
					} = p;
					ye && ye.syncUnifiedContainer()
				}
				if (E = we, T.value) return;
				g.recordCursor();
				const Ce = G(we);
				if (Ce)
					if (!e.pair) te === "input" ? ee(we, {
						source: V
					}) : ie(we, {
						source: V
					});
					else {
						let {
							value: ye
						} = x;
						Array.isArray(ye) ? ye = [ye[0], ye[1]] : ye = ["", ""], ye[V] = we, te === "input" ? ee(
						ye, {
							source: V
						}) : ie(ye, {
							source: V
						})
					} W.$forceUpdate(), Ce || nextTick(g.restoreCursor)
			}

			function G(P) {
				const {
					countGraphemes: V,
					maxlength: te,
					minlength: we
				} = e;
				if (V) {
					let ye;
					if (te !== void 0 && (ye === void 0 && (ye = V(P)), ye > Number(te)) || we !== void 0 && (ye ===
							void 0 && (ye = V(P)), ye < Number(te))) return !1
				}
				const {
					allowInput: Ce
				} = e;
				return typeof Ce == "function" ? Ce(P) : !0
			}

			function ne(P) {
				ve(P), P.relatedTarget === a.value && ge(), P.relatedTarget !== null && (P.relatedTarget === d
					.value || P.relatedTarget === f.value || P.relatedTarget === l.value) || (M.value = !1), K(
					P, "blur"), v.value = null
			}

			function se(P, V) {
				Se(P), k.value = !0, M.value = !0, ae(), K(P, "focus"), V === 0 ? v.value = d.value : V === 1 ? v
					.value = f.value : V === 2 && (v.value = l.value)
			}

			function fe(P) {
				e.passivelyActivated && (A(P), K(P, "blur"))
			}

			function xe(P) {
				e.passivelyActivated && (k.value = !0, q(P), K(P, "focus"))
			}

			function K(P, V) {
				P.relatedTarget !== null && (P.relatedTarget === d.value || P.relatedTarget === f.value || P
					.relatedTarget === l.value || P.relatedTarget === a.value) || (V === "focus" ? (oe(P), k
					.value = !0) : V === "blur" && (pe(P), k.value = !1))
			}

			function Z(P, V) {
				U(P, V, "change")
			}

			function be(P) {
				H(P)
			}

			function Pe(P) {
				me(P), $e()
			}

			function $e() {
				e.pair ? (ee(["", ""], {
					source: "clear"
				}), ie(["", ""], {
					source: "clear"
				})) : (ee("", {
					source: "clear"
				}), ie("", {
					source: "clear"
				}))
			}

			function Te(P) {
				const {
					onMousedown: V
				} = e;
				V && V(P);
				const {
					tagName: te
				} = P.target;
				if (te !== "INPUT" && te !== "TEXTAREA") {
					if (e.resizable) {
						const {
							value: we
						} = a;
						if (we) {
							const {
								left: Ce,
								top: ye,
								width: _e,
								height: Ee
							} = we.getBoundingClientRect(), ze = 14;
							if (Ce + _e - ze < P.clientX && P.clientX < Ce + _e && ye + Ee - ze < P.clientY && P
								.clientY < ye + Ee) return
						}
					}
					P.preventDefault(), k.value || le()
				}
			}

			function Ne() {
				var P;
				B.value = !0, e.type === "textarea" && ((P = p.value) === null || P === void 0 || P
					.handleMouseEnterWrapper())
			}

			function Me() {
				var P;
				B.value = !1, e.type === "textarea" && ((P = p.value) === null || P === void 0 || P
					.handleMouseLeaveWrapper())
			}

			function Ie() {
				y.value || F.value === "click" && (j.value = !j.value)
			}

			function Ke(P) {
				if (y.value) return;
				P.preventDefault();
				const V = we => {
					we.preventDefault(), off("mouseup", document, V)
				};
				if (on("mouseup", document, V), F.value !== "mousedown") return;
				j.value = !0;
				const te = () => {
					j.value = !1, off("mouseup", document, te)
				};
				on("mouseup", document, te)
			}

			function Le(P) {
				e.onKeyup && call(e.onKeyup, P)
			}

			function Be(P) {
				switch (e.onKeydown && call(e.onKeydown, P), P.key) {
					case "Escape":
						X();
						break;
					case "Enter":
						z(P);
						break
				}
			}

			function z(P) {
				var V, te;
				if (e.passivelyActivated) {
					const {
						value: we
					} = M;
					if (we) {
						e.internalDeactivateOnEnter && X();
						return
					}
					P.preventDefault(), e.type === "textarea" ? (V = l.value) === null || V === void 0 || V
					.focus() : (te = d.value) === null || te === void 0 || te.focus()
				}
			}

			function X() {
				e.passivelyActivated && (M.value = !1, nextTick(() => {
					var P;
					(P = a.value) === null || P === void 0 || P.focus()
				}))
			}

			function le() {
				var P, V, te;
				y.value || (e.passivelyActivated ? (P = a.value) === null || P === void 0 || P.focus() : ((V = l
						.value) === null || V === void 0 || V.focus(), (te = d.value) === null || te ===
					void 0 || te.focus()))
			}

			function he() {
				var P;
				!((P = a.value) === null || P === void 0) && P.contains(document.activeElement) && document
					.activeElement.blur()
			}

			function ce() {
				var P, V;
				(P = l.value) === null || P === void 0 || P.select(), (V = d.value) === null || V === void 0 || V
					.select()
			}

			function de() {
				y.value || (l.value ? l.value.focus() : d.value && d.value.focus())
			}

			function ue() {
				const {
					value: P
				} = a;
				P != null && P.contains(document.activeElement) && P !== document.activeElement && X()
			}

			function ke(P) {
				if (e.type === "textarea") {
					const {
						value: V
					} = l;
					V == null || V.scrollTo(P)
				} else {
					const {
						value: V
					} = d;
					V == null || V.scrollTo(P)
				}
			}

			function Re(P) {
				const {
					type: V,
					pair: te,
					autosize: we
				} = e;
				if (!te && we)
					if (V === "textarea") {
						const {
							value: Ce
						} = s;
						Ce && (Ce.textContent = (P ?? "") + `\r
`)
					} else {
						const {
							value: Ce
						} = u;
						Ce && (P ? Ce.textContent = P : Ce.innerHTML = "&nbsp;")
					}
			}

			function We() {
				re()
			}
			const qe = ref({
				top: "0"
			});

			function Xe(P) {
				var V;
				const {
					scrollTop: te
				} = P.target;
				qe.value.top = `${-te}px`, (V = p.value) === null || V === void 0 || V.syncUnifiedContainer()
			}
			let Ve = null;
			watchEffect(() => {
				const {
					autosize: P,
					type: V
				} = e;
				P && V === "textarea" ? Ve = watch(x, te => {
					!Array.isArray(te) && te !== E && Re(te)
				}) : Ve == null || Ve()
			});
			let De = null;
			watchEffect(() => {
				e.type === "textarea" ? De = watch(x, P => {
					var V;
					!Array.isArray(P) && P !== E && ((V = p.value) === null || V === void 0 || V
						.syncUnifiedContainer())
				}) : De == null || De()
			}), provide(inputInjectionKey, {
				mergedValueRef: x,
				maxlengthRef: L,
				mergedClsPrefixRef: t,
				countGraphemesRef: toRef(e, "countGraphemes")
			});
			const Ye = {
					wrapperElRef: a,
					inputElRef: d,
					textareaElRef: l,
					isCompositing: T,
					clear: $e,
					focus: le,
					blur: he,
					select: ce,
					deactivate: ue,
					activate: de,
					scrollTo: ke
				},
				Ze = useRtl("Input", r, t),
				Ge = computed(() => {
					const {
						value: P
					} = w, {
						common: {
							cubicBezierEaseInOut: V
						},
						self: {
							color: te,
							borderRadius: we,
							textColor: Ce,
							caretColor: ye,
							caretColorError: _e,
							caretColorWarning: Ee,
							textDecorationColor: ze,
							border: Ae,
							borderDisabled: Fe,
							borderHover: He,
							borderFocus: Je,
							placeholderColor: Qe,
							placeholderColorDisabled: et,
							lineHeightTextarea: tt,
							colorDisabled: je,
							colorFocus: Ue,
							textColorDisabled: nt,
							boxShadowFocus: ot,
							iconSize: rt,
							colorFocusWarning: it,
							boxShadowFocusWarning: at,
							borderWarning: lt,
							borderFocusWarning: st,
							borderHoverWarning: dt,
							colorFocusError: ct,
							boxShadowFocusError: ut,
							borderError: ft,
							borderFocusError: ht,
							borderHoverError: pt,
							clearSize: vt,
							clearColor: gt,
							clearColorHover: mt,
							clearColorPressed: bt,
							iconColor: yt,
							iconColorDisabled: wt,
							suffixTextColor: xt,
							countTextColor: Ct,
							countTextColorDisabled: St,
							iconColorHover: kt,
							iconColorPressed: Rt,
							loadingColor: Pt,
							loadingColorError: Bt,
							loadingColorWarning: $t,
							[createKey("padding", P)]: Tt,
							[createKey("fontSize", P)]: Nt,
							[createKey("height", P)]: Mt
						}
					} = i.value, {
						left: It,
						right: _t
					} = getMargin(Tt);
					return {
						"--n-bezier": V,
						"--n-count-text-color": Ct,
						"--n-count-text-color-disabled": St,
						"--n-color": te,
						"--n-font-size": Nt,
						"--n-border-radius": we,
						"--n-height": Mt,
						"--n-padding-left": It,
						"--n-padding-right": _t,
						"--n-text-color": Ce,
						"--n-caret-color": ye,
						"--n-text-decoration-color": ze,
						"--n-border": Ae,
						"--n-border-disabled": Fe,
						"--n-border-hover": He,
						"--n-border-focus": Je,
						"--n-placeholder-color": Qe,
						"--n-placeholder-color-disabled": et,
						"--n-icon-size": rt,
						"--n-line-height-textarea": tt,
						"--n-color-disabled": je,
						"--n-color-focus": Ue,
						"--n-text-color-disabled": nt,
						"--n-box-shadow-focus": ot,
						"--n-loading-color": Pt,
						"--n-caret-color-warning": Ee,
						"--n-color-focus-warning": it,
						"--n-box-shadow-focus-warning": at,
						"--n-border-warning": lt,
						"--n-border-focus-warning": st,
						"--n-border-hover-warning": dt,
						"--n-loading-color-warning": $t,
						"--n-caret-color-error": _e,
						"--n-color-focus-error": ct,
						"--n-box-shadow-focus-error": ut,
						"--n-border-error": ft,
						"--n-border-focus-error": ht,
						"--n-border-hover-error": pt,
						"--n-loading-color-error": Bt,
						"--n-clear-color": gt,
						"--n-clear-size": vt,
						"--n-clear-color-hover": mt,
						"--n-clear-color-pressed": bt,
						"--n-icon-color": yt,
						"--n-icon-color-hover": kt,
						"--n-icon-color-pressed": Rt,
						"--n-icon-color-disabled": wt,
						"--n-suffix-text-color": xt
					}
				}),
				Oe = o ? useThemeClass("input", computed(() => {
					const {
						value: P
					} = w;
					return P[0]
				}), Ge, e) : void 0;
			return Object.assign(Object.assign({}, Ye), {
				wrapperElRef: a,
				inputElRef: d,
				inputMirrorElRef: u,
				inputEl2Ref: f,
				textareaElRef: l,
				textareaMirrorElRef: s,
				textareaScrollbarInstRef: p,
				rtlEnabled: Ze,
				uncontrolledValue: C,
				mergedValue: x,
				passwordVisible: j,
				mergedPlaceholder: $,
				showPlaceholder1: _,
				showPlaceholder2: O,
				mergedFocus: N,
				isComposing: T,
				activated: M,
				showClearButton: D,
				mergedSize: w,
				mergedDisabled: y,
				textDecorationStyle: J,
				mergedClsPrefix: t,
				mergedBordered: n,
				mergedShowPasswordOn: F,
				placeholderStyle: qe,
				mergedStatus: R,
				textAreaScrollContainerWidth: Q,
				handleTextAreaScroll: Xe,
				handleCompositionStart: Y,
				handleCompositionEnd: I,
				handleInput: U,
				handleInputBlur: ne,
				handleInputFocus: se,
				handleWrapperBlur: fe,
				handleWrapperFocus: xe,
				handleMouseEnter: Ne,
				handleMouseLeave: Me,
				handleMouseDown: Te,
				handleChange: Z,
				handleClick: be,
				handleClear: Pe,
				handlePasswordToggleClick: Ie,
				handlePasswordToggleMousedown: Ke,
				handleWrapperKeydown: Be,
				handleWrapperKeyup: Le,
				handleTextAreaMirrorResize: We,
				getTextareaScrollContainer: () => l.value,
				mergedTheme: i,
				cssVars: o ? void 0 : Ge,
				themeClass: Oe == null ? void 0 : Oe.themeClass,
				onRender: Oe == null ? void 0 : Oe.onRender
			})
		},
		render() {
			var e, t;
			const {
				mergedClsPrefix: n,
				mergedStatus: o,
				themeClass: r,
				type: i,
				countGraphemes: a,
				onRender: l
			} = this, s = this.$slots;
			return l == null || l(), h("div", {
				ref: "wrapperElRef",
				class: [`${n}-input`, r, o && `${n}-input--${o}-status`, {
					[`${n}-input--rtl`]: this.rtlEnabled,
					[`${n}-input--disabled`]: this.mergedDisabled,
					[`${n}-input--textarea`]: i === "textarea",
					[`${n}-input--resizable`]: this.resizable && !this.autosize,
					[`${n}-input--autosize`]: this.autosize,
					[`${n}-input--round`]: this.round && i !== "textarea",
					[`${n}-input--pair`]: this.pair,
					[`${n}-input--focus`]: this.mergedFocus,
					[`${n}-input--stateful`]: this.stateful
				}],
				style: this.cssVars,
				tabindex: !this.mergedDisabled && this.passivelyActivated && !this.activated ? 0 : void 0,
				onFocus: this.handleWrapperFocus,
				onBlur: this.handleWrapperBlur,
				onClick: this.handleClick,
				onMousedown: this.handleMouseDown,
				onMouseenter: this.handleMouseEnter,
				onMouseleave: this.handleMouseLeave,
				onCompositionstart: this.handleCompositionStart,
				onCompositionend: this.handleCompositionEnd,
				onKeyup: this.handleWrapperKeyup,
				onKeydown: this.handleWrapperKeydown
			}, h("div", {
				class: `${n}-input-wrapper`
			}, resolveWrappedSlot(s.prefix, u => u && h("div", {
				class: `${n}-input__prefix`
			}, u)), i === "textarea" ? h(NScrollbar, {
				ref: "textareaScrollbarInstRef",
				class: `${n}-input__textarea`,
				container: this.getTextareaScrollContainer,
				triggerDisplayManually: !0,
				useUnifiedContainer: !0,
				internalHoistYRail: !0
			}, {
				default: () => {
					var u, d;
					const {
						textAreaScrollContainerWidth: f
					} = this, v = {
						width: this.autosize && f && `${f}px`
					};
					return h(Fragment, null, h("textarea", Object.assign({}, this.inputProps, {
						ref: "textareaElRef",
						class: [`${n}-input__textarea-el`, (u = this
							.inputProps) === null || u === void 0 ? void 0 :
							u.class
						],
						autofocus: this.autofocus,
						rows: Number(this.rows),
						placeholder: this.placeholder,
						value: this.mergedValue,
						disabled: this.mergedDisabled,
						maxlength: a ? void 0 : this.maxlength,
						minlength: a ? void 0 : this.minlength,
						readonly: this.readonly,
						tabindex: this.passivelyActivated && !this.activated ? -
							1 : void 0,
						style: [this.textDecorationStyle[0], (d = this
								.inputProps) === null || d === void 0 ?
							void 0 : d.style, v
						],
						onBlur: this.handleInputBlur,
						onFocus: g => {
							this.handleInputFocus(g, 2)
						},
						onInput: this.handleInput,
						onChange: this.handleChange,
						onScroll: this.handleTextAreaScroll
					})), this.showPlaceholder1 ? h("div", {
						class: `${n}-input__placeholder`,
						style: [this.placeholderStyle, v],
						key: "placeholder"
					}, this.mergedPlaceholder[0]) : null, this.autosize ? h(
						VResizeObserver, {
							onResize: this.handleTextAreaMirrorResize
						}, {
							default: () => h("div", {
								ref: "textareaMirrorElRef",
								class: `${n}-input__textarea-mirror`,
								key: "mirror"
							})
						}) : null)
				}
			}) : h("div", {
				class: `${n}-input__input`
			}, h("input", Object.assign({
				type: i === "password" && this.mergedShowPasswordOn && this
					.passwordVisible ? "text" : i
			}, this.inputProps, {
				ref: "inputElRef",
				class: [`${n}-input__input-el`, (e = this.inputProps) === null || e ===
					void 0 ? void 0 : e.class
				],
				style: [this.textDecorationStyle[0], (t = this.inputProps) === null || t ===
					void 0 ? void 0 : t.style
				],
				tabindex: this.passivelyActivated && !this.activated ? -1 : void 0,
				placeholder: this.mergedPlaceholder[0],
				disabled: this.mergedDisabled,
				maxlength: a ? void 0 : this.maxlength,
				minlength: a ? void 0 : this.minlength,
				value: Array.isArray(this.mergedValue) ? this.mergedValue[0] : this
					.mergedValue,
				readonly: this.readonly,
				autofocus: this.autofocus,
				size: this.attrSize,
				onBlur: this.handleInputBlur,
				onFocus: u => {
					this.handleInputFocus(u, 0)
				},
				onInput: u => {
					this.handleInput(u, 0)
				},
				onChange: u => {
					this.handleChange(u, 0)
				}
			})), this.showPlaceholder1 ? h("div", {
				class: `${n}-input__placeholder`
			}, h("span", null, this.mergedPlaceholder[0])) : null, this.autosize ? h("div", {
				class: `${n}-input__input-mirror`,
				key: "mirror",
				ref: "inputMirrorElRef"
			}, " ") : null), !this.pair && resolveWrappedSlot(s.suffix, u => u || this.clearable || this
				.showCount || this.mergedShowPasswordOn || this.loading !== void 0 ? h("div", {
					class: `${n}-input__suffix`
				}, [resolveWrappedSlot(s["clear-icon-placeholder"], d => (this.clearable || d) && h(
						NBaseClear, {
							clsPrefix: n,
							show: this.showClearButton,
							onClear: this.handleClear
						}, {
							placeholder: () => d,
							icon: () => {
								var f, v;
								return (v = (f = this.$slots)["clear-icon"]) === null ||
									v === void 0 ? void 0 : v.call(f)
							}
						})), this.internalLoadingBeforeSuffix ? null : u, this.loading !== void 0 ?
					h(NBaseSuffix, {
						clsPrefix: n,
						loading: this.loading,
						showArrow: !1,
						showClear: !1,
						style: this.cssVars
					}) : null, this.internalLoadingBeforeSuffix ? u : null, this.showCount && this
					.type !== "textarea" ? h(WordCount, null, {
						default: d => {
							var f;
							return (f = s.count) === null || f === void 0 ? void 0 : f.call(
								s, d)
						}
					}) : null, this.mergedShowPasswordOn && this.type === "password" ? h("div", {
						class: `${n}-input__eye`,
						onMousedown: this.handlePasswordToggleMousedown,
						onClick: this.handlePasswordToggleClick
					}, this.passwordVisible ? resolveSlot(s["password-visible-icon"], () => [h(
						NBaseIcon, {
							clsPrefix: n
						}, {
							default: () => h(EyeIcon, null)
						})]) : resolveSlot(s["password-invisible-icon"], () => [h(NBaseIcon, {
						clsPrefix: n
					}, {
						default: () => h(EyeOffIcon, null)
					})])) : null
				]) : null)), this.pair ? h("span", {
				class: `${n}-input__separator`
			}, resolveSlot(s.separator, () => [this.separator])) : null, this.pair ? h("div", {
				class: `${n}-input-wrapper`
			}, h("div", {
				class: `${n}-input__input`
			}, h("input", {
				ref: "inputEl2Ref",
				type: this.type,
				class: `${n}-input__input-el`,
				tabindex: this.passivelyActivated && !this.activated ? -1 : void 0,
				placeholder: this.mergedPlaceholder[1],
				disabled: this.mergedDisabled,
				maxlength: a ? void 0 : this.maxlength,
				minlength: a ? void 0 : this.minlength,
				value: Array.isArray(this.mergedValue) ? this.mergedValue[1] : void 0,
				readonly: this.readonly,
				style: this.textDecorationStyle[1],
				onBlur: this.handleInputBlur,
				onFocus: u => {
					this.handleInputFocus(u, 1)
				},
				onInput: u => {
					this.handleInput(u, 1)
				},
				onChange: u => {
					this.handleChange(u, 1)
				}
			}), this.showPlaceholder2 ? h("div", {
				class: `${n}-input__placeholder`
			}, h("span", null, this.mergedPlaceholder[1])) : null), resolveWrappedSlot(s.suffix, u => (
				this.clearable || u) && h("div", {
				class: `${n}-input__suffix`
			}, [this.clearable && h(NBaseClear, {
				clsPrefix: n,
				show: this.showClearButton,
				onClear: this.handleClear
			}, {
				icon: () => {
					var d;
					return (d = s["clear-icon"]) === null || d === void 0 ? void 0 :
						d.call(s)
				},
				placeholder: () => {
					var d;
					return (d = s["clear-icon-placeholder"]) === null || d ===
						void 0 ? void 0 : d.call(s)
				}
			}), u]))) : null, this.mergedBordered ? h("div", {
				class: `${n}-input__border`
			}) : null, this.mergedBordered ? h("div", {
				class: `${n}-input__state-border`
			}) : null, this.showCount && i === "textarea" ? h(WordCount, null, {
				default: u => {
					var d;
					const {
						renderCount: f
					} = this;
					return f ? f(u) : (d = s.count) === null || d === void 0 ? void 0 : d.call(s, u)
				}
			}) : null)
		}
	}),
	isImageSupportNativeLazy = isBrowser$1 && "loading" in document.createElement("img"),
	resolveOptionsAndHash = (e = {}) => {
		var t;
		const {
			root: n = null
		} = e;
		return {
			hash: `${e.rootMargin||"0px 0px 0px 0px"}-${Array.isArray(e.threshold)?e.threshold.join(","):(t=e.threshold)!==null&&t!==void 0?t:"0"}`,
			options: Object.assign(Object.assign({}, e), {
				root: (typeof n == "string" ? document.querySelector(n) : n) || document.documentElement
			})
		}
	},
	observers = new WeakMap,
	unobserveHandleMap = new WeakMap,
	shouldStartLoadingRefMap = new WeakMap,
	observeIntersection = (e, t, n) => {
		if (!e) return () => {};
		const o = resolveOptionsAndHash(t),
			{
				root: r
			} = o.options;
		let i;
		const a = observers.get(r);
		a ? i = a : (i = new Map, observers.set(r, i));
		let l, s;
		i.has(o.hash) ? (s = i.get(o.hash), s[1].has(e) || (l = s[0], s[1].add(e), l.observe(e))) : (l =
			new IntersectionObserver(f => {
				f.forEach(v => {
					if (v.isIntersecting) {
						const g = unobserveHandleMap.get(v.target),
							p = shouldStartLoadingRefMap.get(v.target);
						g && g(), p && (p.value = !0)
					}
				})
			}, o.options), l.observe(e), s = [l, new Set([e])], i.set(o.hash, s));
		let u = !1;
		const d = () => {
			u || (unobserveHandleMap.delete(e), shouldStartLoadingRefMap.delete(e), u = !0, s[1].has(e) && (s[0]
					.unobserve(e), s[1].delete(e)), s[1].size <= 0 && i.delete(o.hash), i.size || observers
				.delete(r))
		};
		return unobserveHandleMap.set(e, d), shouldStartLoadingRefMap.set(e, n), d
	},
	style$j = c$1([cB("select", `
 z-index: auto;
 outline: none;
 width: 100%;
 position: relative;
 `), cB("select-menu", `
 margin: 4px 0;
 box-shadow: var(--n-menu-box-shadow);
 `, [fadeInScaleUpTransition({
		originalTransition: "background-color .3s var(--n-bezier), box-shadow .3s var(--n-bezier)"
	})])]),
	selectProps = Object.assign(Object.assign({}, useTheme.props), {
		to: useAdjustedTo.propTo,
		bordered: {
			type: Boolean,
			default: void 0
		},
		clearable: Boolean,
		clearFilterAfterSelect: {
			type: Boolean,
			default: !0
		},
		options: {
			type: Array,
			default: () => []
		},
		defaultValue: {
			type: [String, Number, Array],
			default: null
		},
		keyboard: {
			type: Boolean,
			default: !0
		},
		value: [String, Number, Array],
		placeholder: String,
		menuProps: Object,
		multiple: Boolean,
		size: String,
		filterable: Boolean,
		disabled: {
			type: Boolean,
			default: void 0
		},
		remote: Boolean,
		loading: Boolean,
		filter: Function,
		placement: {
			type: String,
			default: "bottom-start"
		},
		widthMode: {
			type: String,
			default: "trigger"
		},
		tag: Boolean,
		onCreate: Function,
		fallbackOption: {
			type: [Function, Boolean],
			default: void 0
		},
		show: {
			type: Boolean,
			default: void 0
		},
		showArrow: {
			type: Boolean,
			default: !0
		},
		maxTagCount: [Number, String],
		ellipsisTagPopoverProps: Object,
		consistentMenuWidth: {
			type: Boolean,
			default: !0
		},
		virtualScroll: {
			type: Boolean,
			default: !0
		},
		labelField: {
			type: String,
			default: "label"
		},
		valueField: {
			type: String,
			default: "value"
		},
		childrenField: {
			type: String,
			default: "children"
		},
		renderLabel: Function,
		renderOption: Function,
		renderTag: Function,
		"onUpdate:value": [Function, Array],
		inputProps: Object,
		nodeProps: Function,
		ignoreComposition: {
			type: Boolean,
			default: !0
		},
		showOnFocus: Boolean,
		onUpdateValue: [Function, Array],
		onBlur: [Function, Array],
		onClear: [Function, Array],
		onFocus: [Function, Array],
		onScroll: [Function, Array],
		onSearch: [Function, Array],
		onUpdateShow: [Function, Array],
		"onUpdate:show": [Function, Array],
		displayDirective: {
			type: String,
			default: "show"
		},
		resetMenuOnOptionsChange: {
			type: Boolean,
			default: !0
		},
		status: String,
		showCheckmark: {
			type: Boolean,
			default: !0
		},
		onChange: [Function, Array],
		items: Array
	}),
	NSelect = defineComponent({
		name: "Select",
		props: selectProps,
		setup(e) {
			const {
				mergedClsPrefixRef: t,
				mergedBorderedRef: n,
				namespaceRef: o,
				inlineThemeDisabled: r
			} = useConfig(e), i = useTheme("Select", "-select", style$j, selectLight, e, t), a = ref(e
				.defaultValue), l = toRef(e, "value"), s = useMergedState(l, a), u = ref(!1), d = ref(""), f =
				computed(() => {
					const {
						valueField: z,
						childrenField: X
					} = e, le = createTmOptions(z, X);
					return createTreeMate($.value, le)
				}), v = computed(() => createValOptMap(M.value, e.valueField, e.childrenField)), g = ref(!1), p =
				useMergedState(toRef(e, "show"), g), m = ref(null), C = ref(null), b = ref(null), {
					localeRef: x
				} = useLocale("Select"), S = computed(() => {
					var z;
					return (z = e.placeholder) !== null && z !== void 0 ? z : x.value.placeholder
				}), w = useCompitable(e, ["items", "options"]), y = [], R = ref([]), k = ref([]), B = ref(new Map),
				T = computed(() => {
					const {
						fallbackOption: z
					} = e;
					if (z === void 0) {
						const {
							labelField: X,
							valueField: le
						} = e;
						return he => ({
							[X]: String(he),
							[le]: he
						})
					}
					return z === !1 ? !1 : X => Object.assign(z(X), {
						value: X
					})
				}), M = computed(() => k.value.concat(R.value).concat(w.value)), E = computed(() => {
					const {
						filter: z
					} = e;
					if (z) return z;
					const {
						labelField: X,
						valueField: le
					} = e;
					return (he, ce) => {
						if (!ce) return !1;
						const de = ce[X];
						if (typeof de == "string") return patternMatched(he, de);
						const ue = ce[le];
						return typeof ue == "string" ? patternMatched(he, ue) : typeof ue == "number" ?
							patternMatched(he, String(ue)) : !1
					}
				}), $ = computed(() => {
					if (e.remote) return w.value; {
						const {
							value: z
						} = M, {
							value: X
						} = d;
						return !X.length || !e.filterable ? z : filterOptions(z, E.value, X, e.childrenField)
					}
				});

			function _(z) {
				const X = e.remote,
					{
						value: le
					} = B,
					{
						value: he
					} = v,
					{
						value: ce
					} = T,
					de = [];
				return z.forEach(ue => {
					if (he.has(ue)) de.push(he.get(ue));
					else if (X && le.has(ue)) de.push(le.get(ue));
					else if (ce) {
						const ke = ce(ue);
						ke && de.push(ke)
					}
				}), de
			}
			const O = computed(() => {
					if (e.multiple) {
						const {
							value: z
						} = s;
						return Array.isArray(z) ? _(z) : []
					}
					return null
				}),
				N = computed(() => {
					const {
						value: z
					} = s;
					return !e.multiple && !Array.isArray(z) ? z === null ? null : _([z])[0] || null : null
				}),
				D = useFormItem(e),
				{
					mergedSizeRef: F,
					mergedDisabledRef: j,
					mergedStatusRef: J
				} = D;

			function Q(z, X) {
				const {
					onChange: le,
					"onUpdate:value": he,
					onUpdateValue: ce
				} = e, {
					nTriggerFormChange: de,
					nTriggerFormInput: ue
				} = D;
				le && call(le, z, X), ce && call(ce, z, X), he && call(he, z, X), a.value = z, de(), ue()
			}

			function re(z) {
				const {
					onBlur: X
				} = e, {
					nTriggerFormBlur: le
				} = D;
				X && call(X, z), le()
			}

			function L() {
				const {
					onClear: z
				} = e;
				z && call(z)
			}

			function W(z) {
				const {
					onFocus: X,
					showOnFocus: le
				} = e, {
					nTriggerFormFocus: he
				} = D;
				X && call(X, z), he(), le && me()
			}

			function ee(z) {
				const {
					onSearch: X
				} = e;
				X && call(X, z)
			}

			function ie(z) {
				const {
					onScroll: X
				} = e;
				X && call(X, z)
			}

			function pe() {
				var z;
				const {
					remote: X,
					multiple: le
				} = e;
				if (X) {
					const {
						value: he
					} = B;
					if (le) {
						const {
							valueField: ce
						} = e;
						(z = O.value) === null || z === void 0 || z.forEach(de => {
							he.set(de[ce], de)
						})
					} else {
						const ce = N.value;
						ce && he.set(ce[e.valueField], ce)
					}
				}
			}

			function oe(z) {
				const {
					onUpdateShow: X,
					"onUpdate:show": le
				} = e;
				X && call(X, z), le && call(le, z), g.value = z
			}

			function me() {
				j.value || (oe(!0), g.value = !0, e.filterable && Me())
			}

			function ve() {
				oe(!1)
			}

			function Se() {
				d.value = "", k.value = y
			}
			const ge = ref(!1);

			function ae() {
				e.filterable && (ge.value = !0)
			}

			function H() {
				e.filterable && (ge.value = !1, p.value || Se())
			}

			function q() {
				j.value || (p.value ? e.filterable ? Me() : ve() : me())
			}

			function A(z) {
				var X, le;
				!((le = (X = b.value) === null || X === void 0 ? void 0 : X.selfRef) === null || le === void 0) &&
				le.contains(z.relatedTarget) || (u.value = !1, re(z), ve())
			}

			function Y(z) {
				W(z), u.value = !0
			}

			function I(z) {
				u.value = !0
			}

			function U(z) {
				var X;
				!((X = m.value) === null || X === void 0) && X.$el.contains(z.relatedTarget) || (u.value = !1, re(
					z), ve())
			}

			function G() {
				var z;
				(z = m.value) === null || z === void 0 || z.focus(), ve()
			}

			function ne(z) {
				var X;
				p.value && (!((X = m.value) === null || X === void 0) && X.$el.contains(getPreciseEventTarget(z)) ||
					ve())
			}

			function se(z) {
				if (!Array.isArray(z)) return [];
				if (T.value) return Array.from(z); {
					const {
						remote: X
					} = e, {
						value: le
					} = v;
					if (X) {
						const {
							value: he
						} = B;
						return z.filter(ce => le.has(ce) || he.has(ce))
					} else return z.filter(he => le.has(he))
				}
			}

			function fe(z) {
				xe(z.rawNode)
			}

			function xe(z) {
				if (j.value) return;
				const {
					tag: X,
					remote: le,
					clearFilterAfterSelect: he,
					valueField: ce
				} = e;
				if (X && !le) {
					const {
						value: de
					} = k, ue = de[0] || null;
					if (ue) {
						const ke = R.value;
						ke.length ? ke.push(ue) : R.value = [ue], k.value = y
					}
				}
				if (le && B.value.set(z[ce], z), e.multiple) {
					const de = se(s.value),
						ue = de.findIndex(ke => ke === z[ce]);
					if (~ue) {
						if (de.splice(ue, 1), X && !le) {
							const ke = K(z[ce]);
							~ke && (R.value.splice(ke, 1), he && (d.value = ""))
						}
					} else de.push(z[ce]), he && (d.value = "");
					Q(de, _(de))
				} else {
					if (X && !le) {
						const de = K(z[ce]);
						~de ? R.value = [R.value[de]] : R.value = y
					}
					Ne(), ve(), Q(z[ce], z)
				}
			}

			function K(z) {
				return R.value.findIndex(le => le[e.valueField] === z)
			}

			function Z(z) {
				p.value || me();
				const {
					value: X
				} = z.target;
				d.value = X;
				const {
					tag: le,
					remote: he
				} = e;
				if (ee(X), le && !he) {
					if (!X) {
						k.value = y;
						return
					}
					const {
						onCreate: ce
					} = e, de = ce ? ce(X) : {
						[e.labelField]: X,
						[e.valueField]: X
					}, {
						valueField: ue,
						labelField: ke
					} = e;
					w.value.some(Re => Re[ue] === de[ue] || Re[ke] === de[ke]) || R.value.some(Re => Re[ue] === de[
						ue] || Re[ke] === de[ke]) ? k.value = y : k.value = [de]
				}
			}

			function be(z) {
				z.stopPropagation();
				const {
					multiple: X
				} = e;
				!X && e.filterable && ve(), L(), X ? Q([], []) : Q(null, null)
			}

			function Pe(z) {
				!happensIn(z, "action") && !happensIn(z, "empty") && z.preventDefault()
			}

			function $e(z) {
				ie(z)
			}

			function Te(z) {
				var X, le, he, ce, de;
				if (!e.keyboard) {
					z.preventDefault();
					return
				}
				switch (z.key) {
					case " ":
						if (e.filterable) break;
						z.preventDefault();
					case "Enter":
						if (!(!((X = m.value) === null || X === void 0) && X.isComposing)) {
							if (p.value) {
								const ue = (le = b.value) === null || le === void 0 ? void 0 : le
							.getPendingTmNode();
								ue ? fe(ue) : e.filterable || (ve(), Ne())
							} else if (me(), e.tag && ge.value) {
								const ue = k.value[0];
								if (ue) {
									const ke = ue[e.valueField],
										{
											value: Re
										} = s;
									e.multiple && Array.isArray(Re) && Re.some(We => We === ke) || xe(ue)
								}
							}
						}
						z.preventDefault();
						break;
					case "ArrowUp":
						if (z.preventDefault(), e.loading) return;
						p.value && ((he = b.value) === null || he === void 0 || he.prev());
						break;
					case "ArrowDown":
						if (z.preventDefault(), e.loading) return;
						p.value ? (ce = b.value) === null || ce === void 0 || ce.next() : me();
						break;
					case "Escape":
						p.value && (markEventEffectPerformed(z), ve()), (de = m.value) === null || de === void 0 ||
							de.focus();
						break
				}
			}

			function Ne() {
				var z;
				(z = m.value) === null || z === void 0 || z.focus()
			}

			function Me() {
				var z;
				(z = m.value) === null || z === void 0 || z.focusInput()
			}

			function Ie() {
				var z;
				p.value && ((z = C.value) === null || z === void 0 || z.syncPosition())
			}
			pe(), watch(toRef(e, "options"), pe);
			const Ke = {
					focus: () => {
						var z;
						(z = m.value) === null || z === void 0 || z.focus()
					},
					focusInput: () => {
						var z;
						(z = m.value) === null || z === void 0 || z.focusInput()
					},
					blur: () => {
						var z;
						(z = m.value) === null || z === void 0 || z.blur()
					},
					blurInput: () => {
						var z;
						(z = m.value) === null || z === void 0 || z.blurInput()
					}
				},
				Le = computed(() => {
					const {
						self: {
							menuBoxShadow: z
						}
					} = i.value;
					return {
						"--n-menu-box-shadow": z
					}
				}),
				Be = r ? useThemeClass("select", void 0, Le, e) : void 0;
			return Object.assign(Object.assign({}, Ke), {
				mergedStatus: J,
				mergedClsPrefix: t,
				mergedBordered: n,
				namespace: o,
				treeMate: f,
				isMounted: isMounted(),
				triggerRef: m,
				menuRef: b,
				pattern: d,
				uncontrolledShow: g,
				mergedShow: p,
				adjustedTo: useAdjustedTo(e),
				uncontrolledValue: a,
				mergedValue: s,
				followerRef: C,
				localizedPlaceholder: S,
				selectedOption: N,
				selectedOptions: O,
				mergedSize: F,
				mergedDisabled: j,
				focused: u,
				activeWithoutMenuOpen: ge,
				inlineThemeDisabled: r,
				onTriggerInputFocus: ae,
				onTriggerInputBlur: H,
				handleTriggerOrMenuResize: Ie,
				handleMenuFocus: I,
				handleMenuBlur: U,
				handleMenuTabOut: G,
				handleTriggerClick: q,
				handleToggle: fe,
				handleDeleteOption: xe,
				handlePatternInput: Z,
				handleClear: be,
				handleTriggerBlur: A,
				handleTriggerFocus: Y,
				handleKeydown: Te,
				handleMenuAfterLeave: Se,
				handleMenuClickOutside: ne,
				handleMenuScroll: $e,
				handleMenuKeydown: Te,
				handleMenuMousedown: Pe,
				mergedTheme: i,
				cssVars: r ? void 0 : Le,
				themeClass: Be == null ? void 0 : Be.themeClass,
				onRender: Be == null ? void 0 : Be.onRender
			})
		},
		render() {
			return h("div", {
				class: `${this.mergedClsPrefix}-select`
			}, h(VBinder, null, {
				default: () => [h(VTarget, null, {
					default: () => h(NInternalSelection, {
						ref: "triggerRef",
						inlineThemeDisabled: this.inlineThemeDisabled,
						status: this.mergedStatus,
						inputProps: this.inputProps,
						clsPrefix: this.mergedClsPrefix,
						showArrow: this.showArrow,
						maxTagCount: this.maxTagCount,
						ellipsisTagPopoverProps: this.ellipsisTagPopoverProps,
						bordered: this.mergedBordered,
						active: this.activeWithoutMenuOpen || this.mergedShow,
						pattern: this.pattern,
						placeholder: this.localizedPlaceholder,
						selectedOption: this.selectedOption,
						selectedOptions: this.selectedOptions,
						multiple: this.multiple,
						renderTag: this.renderTag,
						renderLabel: this.renderLabel,
						filterable: this.filterable,
						clearable: this.clearable,
						disabled: this.mergedDisabled,
						size: this.mergedSize,
						theme: this.mergedTheme.peers.InternalSelection,
						labelField: this.labelField,
						valueField: this.valueField,
						themeOverrides: this.mergedTheme.peerOverrides
							.InternalSelection,
						loading: this.loading,
						focused: this.focused,
						onClick: this.handleTriggerClick,
						onDeleteOption: this.handleDeleteOption,
						onPatternInput: this.handlePatternInput,
						onClear: this.handleClear,
						onBlur: this.handleTriggerBlur,
						onFocus: this.handleTriggerFocus,
						onKeydown: this.handleKeydown,
						onPatternBlur: this.onTriggerInputBlur,
						onPatternFocus: this.onTriggerInputFocus,
						onResize: this.handleTriggerOrMenuResize,
						ignoreComposition: this.ignoreComposition
					}, {
						arrow: () => {
							var e, t;
							return [(t = (e = this.$slots).arrow) === null ||
								t === void 0 ? void 0 : t.call(e)
							]
						}
					})
				}), h(VFollower, {
					ref: "followerRef",
					show: this.mergedShow,
					to: this.adjustedTo,
					teleportDisabled: this.adjustedTo === useAdjustedTo.tdkey,
					containerClass: this.namespace,
					width: this.consistentMenuWidth ? "target" : void 0,
					minWidth: "target",
					placement: this.placement
				}, {
					default: () => h(Transition, {
						name: "fade-in-scale-up-transition",
						appear: this.isMounted,
						onAfterLeave: this.handleMenuAfterLeave
					}, {
						default: () => {
							var e, t, n;
							return this.mergedShow || this.displayDirective ===
								"show" ? ((e = this.onRender) === null || e ===
									void 0 || e.call(this), withDirectives(h(
											NInternalSelectMenu, Object
											.assign({}, this.menuProps, {
													ref: "menuRef",
													onResize: this
														.handleTriggerOrMenuResize,
													inlineThemeDisabled: this
														.inlineThemeDisabled,
													virtualScroll: this
														.consistentMenuWidth &&
														this.virtualScroll,
													class: [`${this.mergedClsPrefix}-select-menu`,
														this.themeClass, (
															t = this
															.menuProps) ===
														null || t ===
														void 0 ? void 0 : t
														.class
													],
													clsPrefix: this
														.mergedClsPrefix,
													focusable: !0,
													labelField: this.labelField,
													valueField: this.valueField,
													autoPending: !0,
													nodeProps: this.nodeProps,
													theme: this.mergedTheme
														.peers
														.InternalSelectMenu,
													themeOverrides: this
														.mergedTheme
														.peerOverrides
														.InternalSelectMenu,
													treeMate: this.treeMate,
													multiple: this.multiple,
													size: "medium",
													renderOption: this
														.renderOption,
													renderLabel: this
														.renderLabel,
													value: this.mergedValue,
													style: [(n = this
														.menuProps) ===
														null || n ===
														void 0 ? void 0 : n
														.style, this.cssVars
													],
													onToggle: this.handleToggle,
													onScroll: this
														.handleMenuScroll,
													onFocus: this
														.handleMenuFocus,
													onBlur: this.handleMenuBlur,
													onKeydown: this
														.handleMenuKeydown,
													onTabOut: this
														.handleMenuTabOut,
													onMousedown: this
														.handleMenuMousedown,
													show: this.mergedShow,
													showCheckmark: this
														.showCheckmark,
													resetMenuOnOptionsChange: this
														.resetMenuOnOptionsChange
												}), {
												empty: () => {
													var o, r;
													return [(r = (o = this
																.$slots)
															.empty) ===
														null || r ===
														void 0 ?
														void 0 : r.call(
															o)
													]
												},
												header: () => {
													var o, r;
													return [(r = (o = this
																.$slots)
															.header) ===
														null || r ===
														void 0 ?
														void 0 : r.call(
															o)
													]
												},
												action: () => {
													var o, r;
													return [(r = (o = this
																.$slots)
															.action) ===
														null || r ===
														void 0 ?
														void 0 : r.call(
															o)
													]
												}
											}), this.displayDirective ===
										"show" ? [
											[vShow, this.mergedShow],
											[clickoutside, this
												.handleMenuClickOutside, void 0,
												{
													capture: !0
												}
											]
										] : [
											[clickoutside, this
												.handleMenuClickOutside, void 0,
												{
													capture: !0
												}
											]
										])) : null
						}
					})
				})]
			}))
		}
	}),
	tooltipProps = Object.assign(Object.assign({}, popoverBaseProps), useTheme.props),
	NTooltip = defineComponent({
		name: "Tooltip",
		props: tooltipProps,
		__popover__: !0,
		setup(e) {
			const {
				mergedClsPrefixRef: t
			} = useConfig(e), n = useTheme("Tooltip", "-tooltip", void 0, tooltipLight, e, t), o = ref(null);
			return Object.assign(Object.assign({}, {
				syncPosition() {
					o.value.syncPosition()
				},
				setShow(i) {
					o.value.setShow(i)
				}
			}), {
				popoverRef: o,
				mergedTheme: n,
				popoverThemeOverrides: computed(() => n.value.self)
			})
		},
		render() {
			const {
				mergedTheme: e,
				internalExtraClass: t
			} = this;
			return h(NPopover, Object.assign(Object.assign({}, this.$props), {
				theme: e.peers.Popover,
				themeOverrides: e.peerOverrides.Popover,
				builtinThemeOverrides: this.popoverThemeOverrides,
				internalExtraClass: t.concat("tooltip"),
				ref: "popoverRef"
			}), this.$slots)
		}
	}),
	style$i = cB("ellipsis", {
		overflow: "hidden"
	}, [cNotM("line-clamp", `
 white-space: nowrap;
 display: inline-block;
 vertical-align: bottom;
 max-width: 100%;
 `), cM("line-clamp", `
 display: -webkit-inline-box;
 -webkit-box-orient: vertical;
 `), cM("cursor-pointer", `
 cursor: pointer;
 `)]);

function createLineClampClass(e) {
	return `${e}-ellipsis--line-clamp`
}

function createCursorClass(e, t) {
	return `${e}-ellipsis--cursor-${t}`
}
const ellipsisProps = Object.assign(Object.assign({}, useTheme.props), {
		expandTrigger: String,
		lineClamp: [Number, String],
		tooltip: {
			type: [Boolean, Object],
			default: !0
		}
	}),
	NEllipsis = defineComponent({
		name: "Ellipsis",
		inheritAttrs: !1,
		props: ellipsisProps,
		setup(e, {
			slots: t,
			attrs: n
		}) {
			const o = useMergedClsPrefix(),
				r = useTheme("Ellipsis", "-ellipsis", style$i, ellipsisLight, e, o),
				i = ref(null),
				a = ref(null),
				l = ref(null),
				s = ref(!1),
				u = computed(() => {
					const {
						lineClamp: C
					} = e, {
						value: b
					} = s;
					return C !== void 0 ? {
						textOverflow: "",
						"-webkit-line-clamp": b ? "" : C
					} : {
						textOverflow: b ? "" : "ellipsis",
						"-webkit-line-clamp": ""
					}
				});

			function d() {
				let C = !1;
				const {
					value: b
				} = s;
				if (b) return !0;
				const {
					value: x
				} = i;
				if (x) {
					const {
						lineClamp: S
					} = e;
					if (g(x), S !== void 0) C = x.scrollHeight <= x.offsetHeight;
					else {
						const {
							value: w
						} = a;
						w && (C = w.getBoundingClientRect().width <= x.getBoundingClientRect().width)
					}
					p(x, C)
				}
				return C
			}
			const f = computed(() => e.expandTrigger === "click" ? () => {
				var C;
				const {
					value: b
				} = s;
				b && ((C = l.value) === null || C === void 0 || C.setShow(!1)), s.value = !b
			} : void 0);
			onDeactivated(() => {
				var C;
				e.tooltip && ((C = l.value) === null || C === void 0 || C.setShow(!1))
			});
			const v = () => h("span", Object.assign({}, mergeProps(n, {
				class: [`${o.value}-ellipsis`, e.lineClamp !== void 0 ? createLineClampClass(o
					.value) : void 0, e.expandTrigger === "click" ? createCursorClass(o
					.value, "pointer") : void 0],
				style: u.value
			}), {
				ref: "triggerRef",
				onClick: f.value,
				onMouseenter: e.expandTrigger === "click" ? d : void 0
			}), e.lineClamp ? t : h("span", {
				ref: "triggerInnerRef"
			}, t));

			function g(C) {
				if (!C) return;
				const b = u.value,
					x = createLineClampClass(o.value);
				e.lineClamp !== void 0 ? m(C, x, "add") : m(C, x, "remove");
				for (const S in b) C.style[S] !== b[S] && (C.style[S] = b[S])
			}

			function p(C, b) {
				const x = createCursorClass(o.value, "pointer");
				e.expandTrigger === "click" && !b ? m(C, x, "add") : m(C, x, "remove")
			}

			function m(C, b, x) {
				x === "add" ? C.classList.contains(b) || C.classList.add(b) : C.classList.contains(b) && C.classList
					.remove(b)
			}
			return {
				mergedTheme: r,
				triggerRef: i,
				triggerInnerRef: a,
				tooltipRef: l,
				handleClick: f,
				renderTrigger: v,
				getTooltipDisabled: d
			}
		},
		render() {
			var e;
			const {
				tooltip: t,
				renderTrigger: n,
				$slots: o
			} = this;
			if (t) {
				const {
					mergedTheme: r
				} = this;
				return h(NTooltip, Object.assign({
					ref: "tooltipRef",
					placement: "top"
				}, t, {
					getDisabled: this.getTooltipDisabled,
					theme: r.peers.Tooltip,
					themeOverrides: r.peerOverrides.Tooltip
				}), {
					trigger: n,
					default: (e = o.tooltip) !== null && e !== void 0 ? e : o.default
				})
			} else return n()
		}
	}),
	radioBaseProps = {
		name: String,
		value: {
			type: [String, Number, Boolean],
			default: "on"
		},
		checked: {
			type: Boolean,
			default: void 0
		},
		defaultChecked: Boolean,
		disabled: {
			type: Boolean,
			default: void 0
		},
		label: String,
		size: String,
		onUpdateChecked: [Function, Array],
		"onUpdate:checked": [Function, Array],
		checkedValue: {
			type: Boolean,
			default: void 0
		}
	},
	radioGroupInjectionKey = createInjectionKey("n-radio-group");

function setup(e) {
	const t = useFormItem(e, {
			mergedSize(x) {
				const {
					size: S
				} = e;
				if (S !== void 0) return S;
				if (a) {
					const {
						mergedSizeRef: {
							value: w
						}
					} = a;
					if (w !== void 0) return w
				}
				return x ? x.mergedSize.value : "medium"
			},
			mergedDisabled(x) {
				return !!(e.disabled || a != null && a.disabledRef.value || x != null && x.disabled.value)
			}
		}),
		{
			mergedSizeRef: n,
			mergedDisabledRef: o
		} = t,
		r = ref(null),
		i = ref(null),
		a = inject(radioGroupInjectionKey, null),
		l = ref(e.defaultChecked),
		s = toRef(e, "checked"),
		u = useMergedState(s, l),
		d = useMemo(() => a ? a.valueRef.value === e.value : u.value),
		f = useMemo(() => {
			const {
				name: x
			} = e;
			if (x !== void 0) return x;
			if (a) return a.nameRef.value
		}),
		v = ref(!1);

	function g() {
		if (a) {
			const {
				doUpdateValue: x
			} = a, {
				value: S
			} = e;
			call(x, S)
		} else {
			const {
				onUpdateChecked: x,
				"onUpdate:checked": S
			} = e, {
				nTriggerFormInput: w,
				nTriggerFormChange: y
			} = t;
			x && call(x, !0), S && call(S, !0), w(), y(), l.value = !0
		}
	}

	function p() {
		o.value || d.value || g()
	}

	function m() {
		p(), r.value && (r.value.checked = d.value)
	}

	function C() {
		v.value = !1
	}

	function b() {
		v.value = !0
	}
	return {
		mergedClsPrefix: a ? a.mergedClsPrefixRef : useConfig(e).mergedClsPrefixRef,
		inputRef: r,
		labelRef: i,
		mergedName: f,
		mergedDisabled: o,
		renderSafeChecked: d,
		focus: v,
		mergedSize: n,
		handleRadioInputChange: m,
		handleRadioInputBlur: C,
		handleRadioInputFocus: b
	}
}
const style$h = cB("radio", `
 line-height: var(--n-label-line-height);
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 align-items: flex-start;
 flex-wrap: nowrap;
 font-size: var(--n-font-size);
 word-break: break-word;
`, [cM("checked", [cE("dot", `
 background-color: var(--n-color-active);
 `)]), cE("dot-wrapper", `
 position: relative;
 flex-shrink: 0;
 flex-grow: 0;
 width: var(--n-radio-size);
 `), cB("radio-input", `
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 cursor: pointer;
 `), cE("dot", `
 position: absolute;
 top: 50%;
 left: 0;
 transform: translateY(-50%);
 height: var(--n-radio-size);
 width: var(--n-radio-size);
 background: var(--n-color);
 box-shadow: var(--n-box-shadow);
 border-radius: 50%;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `, [c$1("&::before", `
 content: "";
 opacity: 0;
 position: absolute;
 left: 4px;
 top: 4px;
 height: calc(100% - 8px);
 width: calc(100% - 8px);
 border-radius: 50%;
 transform: scale(.8);
 background: var(--n-dot-color-active);
 transition: 
 opacity .3s var(--n-bezier),
 background-color .3s var(--n-bezier),
 transform .3s var(--n-bezier);
 `), cM("checked", {
		boxShadow: "var(--n-box-shadow-active)"
	}, [c$1("&::before", `
 opacity: 1;
 transform: scale(1);
 `)])]), cE("label", `
 color: var(--n-text-color);
 padding: var(--n-label-padding);
 font-weight: var(--n-label-font-weight);
 display: inline-block;
 transition: color .3s var(--n-bezier);
 `), cNotM("disabled", `
 cursor: pointer;
 `, [c$1("&:hover", [cE("dot", {
		boxShadow: "var(--n-box-shadow-hover)"
	})]), cM("focus", [c$1("&:not(:active)", [cE("dot", {
		boxShadow: "var(--n-box-shadow-focus)"
	})])])]), cM("disabled", `
 cursor: not-allowed;
 `, [cE("dot", {
		boxShadow: "var(--n-box-shadow-disabled)",
		backgroundColor: "var(--n-color-disabled)"
	}, [c$1("&::before", {
		backgroundColor: "var(--n-dot-color-disabled)"
	}), cM("checked", `
 opacity: 1;
 `)]), cE("label", {
		color: "var(--n-text-color-disabled)"
	}), cB("radio-input", `
 cursor: not-allowed;
 `)])]),
	radioProps = Object.assign(Object.assign({}, useTheme.props), radioBaseProps),
	NRadio = defineComponent({
		name: "Radio",
		props: radioProps,
		setup(e) {
			const t = setup(e),
				n = useTheme("Radio", "-radio", style$h, radioLight, e, t.mergedClsPrefix),
				o = computed(() => {
					const {
						mergedSize: {
							value: u
						}
					} = t, {
						common: {
							cubicBezierEaseInOut: d
						},
						self: {
							boxShadow: f,
							boxShadowActive: v,
							boxShadowDisabled: g,
							boxShadowFocus: p,
							boxShadowHover: m,
							color: C,
							colorDisabled: b,
							colorActive: x,
							textColor: S,
							textColorDisabled: w,
							dotColorActive: y,
							dotColorDisabled: R,
							labelPadding: k,
							labelLineHeight: B,
							labelFontWeight: T,
							[createKey("fontSize", u)]: M,
							[createKey("radioSize", u)]: E
						}
					} = n.value;
					return {
						"--n-bezier": d,
						"--n-label-line-height": B,
						"--n-label-font-weight": T,
						"--n-box-shadow": f,
						"--n-box-shadow-active": v,
						"--n-box-shadow-disabled": g,
						"--n-box-shadow-focus": p,
						"--n-box-shadow-hover": m,
						"--n-color": C,
						"--n-color-active": x,
						"--n-color-disabled": b,
						"--n-dot-color-active": y,
						"--n-dot-color-disabled": R,
						"--n-font-size": M,
						"--n-radio-size": E,
						"--n-text-color": S,
						"--n-text-color-disabled": w,
						"--n-label-padding": k
					}
				}),
				{
					inlineThemeDisabled: r,
					mergedClsPrefixRef: i,
					mergedRtlRef: a
				} = useConfig(e),
				l = useRtl("Radio", a, i),
				s = r ? useThemeClass("radio", computed(() => t.mergedSize.value[0]), o, e) : void 0;
			return Object.assign(t, {
				rtlEnabled: l,
				cssVars: r ? void 0 : o,
				themeClass: s == null ? void 0 : s.themeClass,
				onRender: s == null ? void 0 : s.onRender
			})
		},
		render() {
			const {
				$slots: e,
				mergedClsPrefix: t,
				onRender: n,
				label: o
			} = this;
			return n == null || n(), h("label", {
				class: [`${t}-radio`, this.themeClass, this.rtlEnabled && `${t}-radio--rtl`, this
					.mergedDisabled && `${t}-radio--disabled`, this.renderSafeChecked &&
					`${t}-radio--checked`, this.focus && `${t}-radio--focus`
				],
				style: this.cssVars
			}, h("input", {
				ref: "inputRef",
				type: "radio",
				class: `${t}-radio-input`,
				value: this.value,
				name: this.mergedName,
				checked: this.renderSafeChecked,
				disabled: this.mergedDisabled,
				onChange: this.handleRadioInputChange,
				onFocus: this.handleRadioInputFocus,
				onBlur: this.handleRadioInputBlur
			}), h("div", {
				class: `${t}-radio__dot-wrapper`
			}, " ", h("div", {
				class: [`${t}-radio__dot`, this.renderSafeChecked && `${t}-radio__dot--checked`]
			})), resolveWrappedSlot(e.default, r => !r && !o ? null : h("div", {
				ref: "labelRef",
				class: `${t}-radio__label`
			}, r || o)))
		}
	}),
	style$g = cB("radio-group", `
 display: inline-block;
 font-size: var(--n-font-size);
`, [cE("splitor", `
 display: inline-block;
 vertical-align: bottom;
 width: 1px;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier);
 background: var(--n-button-border-color);
 `, [cM("checked", {
		backgroundColor: "var(--n-button-border-color-active)"
	}), cM("disabled", {
		opacity: "var(--n-opacity-disabled)"
	})]), cM("button-group", `
 white-space: nowrap;
 height: var(--n-height);
 line-height: var(--n-height);
 `, [cB("radio-button", {
		height: "var(--n-height)",
		lineHeight: "var(--n-height)"
	}), cE("splitor", {
		height: "var(--n-height)"
	})]), cB("radio-button", `
 vertical-align: bottom;
 outline: none;
 position: relative;
 user-select: none;
 -webkit-user-select: none;
 display: inline-block;
 box-sizing: border-box;
 padding-left: 14px;
 padding-right: 14px;
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 background: var(--n-button-color);
 color: var(--n-button-text-color);
 border-top: 1px solid var(--n-button-border-color);
 border-bottom: 1px solid var(--n-button-border-color);
 `, [cB("radio-input", `
 pointer-events: none;
 position: absolute;
 border: 0;
 border-radius: inherit;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 opacity: 0;
 z-index: 1;
 `), cE("state-border", `
 z-index: 1;
 pointer-events: none;
 position: absolute;
 box-shadow: var(--n-button-box-shadow);
 transition: box-shadow .3s var(--n-bezier);
 left: -1px;
 bottom: -1px;
 right: -1px;
 top: -1px;
 `), c$1("&:first-child", `
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 border-left: 1px solid var(--n-button-border-color);
 `, [cE("state-border", `
 border-top-left-radius: var(--n-button-border-radius);
 border-bottom-left-radius: var(--n-button-border-radius);
 `)]), c$1("&:last-child", `
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 border-right: 1px solid var(--n-button-border-color);
 `, [cE("state-border", `
 border-top-right-radius: var(--n-button-border-radius);
 border-bottom-right-radius: var(--n-button-border-radius);
 `)]), cNotM("disabled", `
 cursor: pointer;
 `, [c$1("&:hover", [cE("state-border", `
 transition: box-shadow .3s var(--n-bezier);
 box-shadow: var(--n-button-box-shadow-hover);
 `), cNotM("checked", {
		color: "var(--n-button-text-color-hover)"
	})]), cM("focus", [c$1("&:not(:active)", [cE("state-border", {
		boxShadow: "var(--n-button-box-shadow-focus)"
	})])])]), cM("checked", `
 background: var(--n-button-color-active);
 color: var(--n-button-text-color-active);
 border-color: var(--n-button-border-color-active);
 `), cM("disabled", `
 cursor: not-allowed;
 opacity: var(--n-opacity-disabled);
 `)])]);

function mapSlot(e, t, n) {
	var o;
	const r = [];
	let i = !1;
	for (let a = 0; a < e.length; ++a) {
		const l = e[a],
			s = (o = l.type) === null || o === void 0 ? void 0 : o.name;
		s === "RadioButton" && (i = !0);
		const u = l.props;
		if (s !== "RadioButton") {
			r.push(l);
			continue
		}
		if (a === 0) r.push(l);
		else {
			const d = r[r.length - 1].props,
				f = t === d.value,
				v = d.disabled,
				g = t === u.value,
				p = u.disabled,
				m = (f ? 2 : 0) + (v ? 0 : 1),
				C = (g ? 2 : 0) + (p ? 0 : 1),
				b = {
					[`${n}-radio-group__splitor--disabled`]: v,
					[`${n}-radio-group__splitor--checked`]: f
				},
				x = {
					[`${n}-radio-group__splitor--disabled`]: p,
					[`${n}-radio-group__splitor--checked`]: g
				},
				S = m < C ? x : b;
			r.push(h("div", {
				class: [`${n}-radio-group__splitor`, S]
			}), l)
		}
	}
	return {
		children: r,
		isButtonGroup: i
	}
}
const radioGroupProps = Object.assign(Object.assign({}, useTheme.props), {
		name: String,
		value: [String, Number, Boolean],
		defaultValue: {
			type: [String, Number, Boolean],
			default: null
		},
		size: String,
		disabled: {
			type: Boolean,
			default: void 0
		},
		"onUpdate:value": [Function, Array],
		onUpdateValue: [Function, Array]
	}),
	NRadioGroup = defineComponent({
		name: "RadioGroup",
		props: radioGroupProps,
		setup(e) {
			const t = ref(null),
				{
					mergedSizeRef: n,
					mergedDisabledRef: o,
					nTriggerFormChange: r,
					nTriggerFormInput: i,
					nTriggerFormBlur: a,
					nTriggerFormFocus: l
				} = useFormItem(e),
				{
					mergedClsPrefixRef: s,
					inlineThemeDisabled: u,
					mergedRtlRef: d
				} = useConfig(e),
				f = useTheme("Radio", "-radio-group", style$g, radioLight, e, s),
				v = ref(e.defaultValue),
				g = toRef(e, "value"),
				p = useMergedState(g, v);

			function m(y) {
				const {
					onUpdateValue: R,
					"onUpdate:value": k
				} = e;
				R && call(R, y), k && call(k, y), v.value = y, r(), i()
			}

			function C(y) {
				const {
					value: R
				} = t;
				R && (R.contains(y.relatedTarget) || l())
			}

			function b(y) {
				const {
					value: R
				} = t;
				R && (R.contains(y.relatedTarget) || a())
			}
			provide(radioGroupInjectionKey, {
				mergedClsPrefixRef: s,
				nameRef: toRef(e, "name"),
				valueRef: p,
				disabledRef: o,
				mergedSizeRef: n,
				doUpdateValue: m
			});
			const x = useRtl("Radio", d, s),
				S = computed(() => {
					const {
						value: y
					} = n, {
						common: {
							cubicBezierEaseInOut: R
						},
						self: {
							buttonBorderColor: k,
							buttonBorderColorActive: B,
							buttonBorderRadius: T,
							buttonBoxShadow: M,
							buttonBoxShadowFocus: E,
							buttonBoxShadowHover: $,
							buttonColor: _,
							buttonColorActive: O,
							buttonTextColor: N,
							buttonTextColorActive: D,
							buttonTextColorHover: F,
							opacityDisabled: j,
							[createKey("buttonHeight", y)]: J,
							[createKey("fontSize", y)]: Q
						}
					} = f.value;
					return {
						"--n-font-size": Q,
						"--n-bezier": R,
						"--n-button-border-color": k,
						"--n-button-border-color-active": B,
						"--n-button-border-radius": T,
						"--n-button-box-shadow": M,
						"--n-button-box-shadow-focus": E,
						"--n-button-box-shadow-hover": $,
						"--n-button-color": _,
						"--n-button-color-active": O,
						"--n-button-text-color": N,
						"--n-button-text-color-hover": F,
						"--n-button-text-color-active": D,
						"--n-height": J,
						"--n-opacity-disabled": j
					}
				}),
				w = u ? useThemeClass("radio-group", computed(() => n.value[0]), S, e) : void 0;
			return {
				selfElRef: t,
				rtlEnabled: x,
				mergedClsPrefix: s,
				mergedValue: p,
				handleFocusout: b,
				handleFocusin: C,
				cssVars: u ? void 0 : S,
				themeClass: w == null ? void 0 : w.themeClass,
				onRender: w == null ? void 0 : w.onRender
			}
		},
		render() {
			var e;
			const {
				mergedValue: t,
				mergedClsPrefix: n,
				handleFocusin: o,
				handleFocusout: r
			} = this, {
				children: i,
				isButtonGroup: a
			} = mapSlot(flatten$1(getSlot(this)), t, n);
			return (e = this.onRender) === null || e === void 0 || e.call(this), h("div", {
				onFocusin: o,
				onFocusout: r,
				ref: "selfElRef",
				class: [`${n}-radio-group`, this.rtlEnabled && `${n}-radio-group--rtl`, this.themeClass,
					a && `${n}-radio-group--button-group`
				],
				style: this.cssVars
			}, i)
		}
	}),
	NDropdownDivider = defineComponent({
		name: "DropdownDivider",
		props: {
			clsPrefix: {
				type: String,
				required: !0
			}
		},
		render() {
			return h("div", {
				class: `${this.clsPrefix}-dropdown-divider`
			})
		}
	}),
	style$f = cB("icon", `
 height: 1em;
 width: 1em;
 line-height: 1em;
 text-align: center;
 display: inline-block;
 position: relative;
 fill: currentColor;
 transform: translateZ(0);
`, [cM("color-transition", {
		transition: "color .3s var(--n-bezier)"
	}), cM("depth", {
		color: "var(--n-color)"
	}, [c$1("svg", {
		opacity: "var(--n-opacity)",
		transition: "opacity .3s var(--n-bezier)"
	})]), c$1("svg", {
		height: "1em",
		width: "1em"
	})]),
	iconProps = Object.assign(Object.assign({}, useTheme.props), {
		depth: [String, Number],
		size: [Number, String],
		color: String,
		component: Object
	}),
	NIcon = defineComponent({
		_n_icon__: !0,
		name: "Icon",
		inheritAttrs: !1,
		props: iconProps,
		setup(e) {
			const {
				mergedClsPrefixRef: t,
				inlineThemeDisabled: n
			} = useConfig(e), o = useTheme("Icon", "-icon", style$f, iconLight, e, t), r = computed(() => {
				const {
					depth: a
				} = e, {
					common: {
						cubicBezierEaseInOut: l
					},
					self: s
				} = o.value;
				if (a !== void 0) {
					const {
						color: u,
						[`opacity${a}Depth`]: d
					} = s;
					return {
						"--n-bezier": l,
						"--n-color": u,
						"--n-opacity": d
					}
				}
				return {
					"--n-bezier": l,
					"--n-color": "",
					"--n-opacity": ""
				}
			}), i = n ? useThemeClass("icon", computed(() => `${e.depth||"d"}`), r, e) : void 0;
			return {
				mergedClsPrefix: t,
				mergedStyle: computed(() => {
					const {
						size: a,
						color: l
					} = e;
					return {
						fontSize: formatLength(a),
						color: l
					}
				}),
				cssVars: n ? void 0 : r,
				themeClass: i == null ? void 0 : i.themeClass,
				onRender: i == null ? void 0 : i.onRender
			}
		},
		render() {
			var e;
			const {
				$parent: t,
				depth: n,
				mergedClsPrefix: o,
				component: r,
				onRender: i,
				themeClass: a
			} = this;
			return !((e = t == null ? void 0 : t.$options) === null || e === void 0) && e._n_icon__ && warn("icon",
				"don't wrap `n-icon` inside `n-icon`"), i == null || i(), h("i", mergeProps(this.$attrs, {
				role: "img",
				class: [`${o}-icon`, a, {
					[`${o}-icon--depth`]: n,
					[`${o}-icon--color-transition`]: n !== void 0
				}],
				style: [this.cssVars, this.mergedStyle]
			}), r ? h(r) : this.$slots)
		}
	}),
	dropdownMenuInjectionKey = createInjectionKey("n-dropdown-menu"),
	dropdownInjectionKey = createInjectionKey("n-dropdown"),
	dropdownOptionInjectionKey = createInjectionKey("n-dropdown-option");

function isSubmenuNode(e, t) {
	return e.type === "submenu" || e.type === void 0 && e[t] !== void 0
}

function isGroupNode(e) {
	return e.type === "group"
}

function isDividerNode(e) {
	return e.type === "divider"
}

function isRenderNode(e) {
	return e.type === "render"
}
const NDropdownOption = defineComponent({
		name: "DropdownOption",
		props: {
			clsPrefix: {
				type: String,
				required: !0
			},
			tmNode: {
				type: Object,
				required: !0
			},
			parentKey: {
				type: [String, Number],
				default: null
			},
			placement: {
				type: String,
				default: "right-start"
			},
			props: Object,
			scrollable: Boolean
		},
		setup(e) {
			const t = inject(dropdownInjectionKey),
				{
					hoverKeyRef: n,
					keyboardKeyRef: o,
					lastToggledSubmenuKeyRef: r,
					pendingKeyPathRef: i,
					activeKeyPathRef: a,
					animatedRef: l,
					mergedShowRef: s,
					renderLabelRef: u,
					renderIconRef: d,
					labelFieldRef: f,
					childrenFieldRef: v,
					renderOptionRef: g,
					nodePropsRef: p,
					menuPropsRef: m
				} = t,
				C = inject(dropdownOptionInjectionKey, null),
				b = inject(dropdownMenuInjectionKey),
				x = inject(popoverBodyInjectionKey),
				S = computed(() => e.tmNode.rawNode),
				w = computed(() => {
					const {
						value: F
					} = v;
					return isSubmenuNode(e.tmNode.rawNode, F)
				}),
				y = computed(() => {
					const {
						disabled: F
					} = e.tmNode;
					return F
				}),
				R = computed(() => {
					if (!w.value) return !1;
					const {
						key: F,
						disabled: j
					} = e.tmNode;
					if (j) return !1;
					const {
						value: J
					} = n, {
						value: Q
					} = o, {
						value: re
					} = r, {
						value: L
					} = i;
					return J !== null ? L.includes(F) : Q !== null ? L.includes(F) && L[L.length - 1] !== F :
						re !== null ? L.includes(F) : !1
				}),
				k = computed(() => o.value === null && !l.value),
				B = useDeferredTrue(R, 300, k),
				T = computed(() => !!(C != null && C.enteringSubmenuRef.value)),
				M = ref(!1);
			provide(dropdownOptionInjectionKey, {
				enteringSubmenuRef: M
			});

			function E() {
				M.value = !0
			}

			function $() {
				M.value = !1
			}

			function _() {
				const {
					parentKey: F,
					tmNode: j
				} = e;
				j.disabled || s.value && (r.value = F, o.value = null, n.value = j.key)
			}

			function O() {
				const {
					tmNode: F
				} = e;
				F.disabled || s.value && n.value !== F.key && _()
			}

			function N(F) {
				if (e.tmNode.disabled || !s.value) return;
				const {
					relatedTarget: j
				} = F;
				j && !happensIn({
					target: j
				}, "dropdownOption") && !happensIn({
					target: j
				}, "scrollbarRail") && (n.value = null)
			}

			function D() {
				const {
					value: F
				} = w, {
					tmNode: j
				} = e;
				s.value && !F && !j.disabled && (t.doSelect(j.key, j.rawNode), t.doUpdateShow(!1))
			}
			return {
				labelField: f,
				renderLabel: u,
				renderIcon: d,
				siblingHasIcon: b.showIconRef,
				siblingHasSubmenu: b.hasSubmenuRef,
				menuProps: m,
				popoverBody: x,
				animated: l,
				mergedShowSubmenu: computed(() => B.value && !T.value),
				rawNode: S,
				hasSubmenu: w,
				pending: useMemo(() => {
					const {
						value: F
					} = i, {
						key: j
					} = e.tmNode;
					return F.includes(j)
				}),
				childActive: useMemo(() => {
					const {
						value: F
					} = a, {
						key: j
					} = e.tmNode, J = F.findIndex(Q => j === Q);
					return J === -1 ? !1 : J < F.length - 1
				}),
				active: useMemo(() => {
					const {
						value: F
					} = a, {
						key: j
					} = e.tmNode, J = F.findIndex(Q => j === Q);
					return J === -1 ? !1 : J === F.length - 1
				}),
				mergedDisabled: y,
				renderOption: g,
				nodeProps: p,
				handleClick: D,
				handleMouseMove: O,
				handleMouseEnter: _,
				handleMouseLeave: N,
				handleSubmenuBeforeEnter: E,
				handleSubmenuAfterEnter: $
			}
		},
		render() {
			var e, t;
			const {
				animated: n,
				rawNode: o,
				mergedShowSubmenu: r,
				clsPrefix: i,
				siblingHasIcon: a,
				siblingHasSubmenu: l,
				renderLabel: s,
				renderIcon: u,
				renderOption: d,
				nodeProps: f,
				props: v,
				scrollable: g
			} = this;
			let p = null;
			if (r) {
				const x = (e = this.menuProps) === null || e === void 0 ? void 0 : e.call(this, o, o.children);
				p = h(NDropdownMenu, Object.assign({}, x, {
					clsPrefix: i,
					scrollable: this.scrollable,
					tmNodes: this.tmNode.children,
					parentKey: this.tmNode.key
				}))
			}
			const m = {
					class: [`${i}-dropdown-option-body`, this.pending && `${i}-dropdown-option-body--pending`, this
						.active && `${i}-dropdown-option-body--active`, this.childActive &&
						`${i}-dropdown-option-body--child-active`, this.mergedDisabled &&
						`${i}-dropdown-option-body--disabled`
					],
					onMousemove: this.handleMouseMove,
					onMouseenter: this.handleMouseEnter,
					onMouseleave: this.handleMouseLeave,
					onClick: this.handleClick
				},
				C = f == null ? void 0 : f(o),
				b = h("div", Object.assign({
					class: [`${i}-dropdown-option`, C == null ? void 0 : C.class],
					"data-dropdown-option": !0
				}, C), h("div", mergeProps(m, v), [h("div", {
					class: [`${i}-dropdown-option-body__prefix`, a &&
						`${i}-dropdown-option-body__prefix--show-icon`
					]
				}, [u ? u(o) : render(o.icon)]), h("div", {
					"data-dropdown-option": !0,
					class: `${i}-dropdown-option-body__label`
				}, s ? s(o) : render((t = o[this.labelField]) !== null && t !== void 0 ? t : o
					.title)), h("div", {
					"data-dropdown-option": !0,
					class: [`${i}-dropdown-option-body__suffix`, l &&
						`${i}-dropdown-option-body__suffix--has-submenu`
					]
				}, this.hasSubmenu ? h(NIcon, null, {
					default: () => h(ChevronRightIcon, null)
				}) : null)]), this.hasSubmenu ? h(VBinder, null, {
					default: () => [h(VTarget, null, {
						default: () => h("div", {
							class: `${i}-dropdown-offset-container`
						}, h(VFollower, {
							show: this.mergedShowSubmenu,
							placement: this.placement,
							to: g && this.popoverBody || void 0,
							teleportDisabled: !g
						}, {
							default: () => h("div", {
								class: `${i}-dropdown-menu-wrapper`
							}, n ? h(Transition, {
								onBeforeEnter: this
									.handleSubmenuBeforeEnter,
								onAfterEnter: this
									.handleSubmenuAfterEnter,
								name: "fade-in-scale-up-transition",
								appear: !0
							}, {
								default: () => p
							}) : p)
						}))
					})]
				}) : null);
			return d ? d({
				node: b,
				option: o
			}) : b
		}
	}),
	NDropdownGroupHeader = defineComponent({
		name: "DropdownGroupHeader",
		props: {
			clsPrefix: {
				type: String,
				required: !0
			},
			tmNode: {
				type: Object,
				required: !0
			}
		},
		setup() {
			const {
				showIconRef: e,
				hasSubmenuRef: t
			} = inject(dropdownMenuInjectionKey), {
				renderLabelRef: n,
				labelFieldRef: o,
				nodePropsRef: r,
				renderOptionRef: i
			} = inject(dropdownInjectionKey);
			return {
				labelField: o,
				showIcon: e,
				hasSubmenu: t,
				renderLabel: n,
				nodeProps: r,
				renderOption: i
			}
		},
		render() {
			var e;
			const {
				clsPrefix: t,
				hasSubmenu: n,
				showIcon: o,
				nodeProps: r,
				renderLabel: i,
				renderOption: a
			} = this, {
				rawNode: l
			} = this.tmNode, s = h("div", Object.assign({
				class: `${t}-dropdown-option`
			}, r == null ? void 0 : r(l)), h("div", {
				class: `${t}-dropdown-option-body ${t}-dropdown-option-body--group`
			}, h("div", {
				"data-dropdown-option": !0,
				class: [`${t}-dropdown-option-body__prefix`, o &&
					`${t}-dropdown-option-body__prefix--show-icon`
				]
			}, render(l.icon)), h("div", {
				class: `${t}-dropdown-option-body__label`,
				"data-dropdown-option": !0
			}, i ? i(l) : render((e = l.title) !== null && e !== void 0 ? e : l[this.labelField])), h(
				"div", {
					class: [`${t}-dropdown-option-body__suffix`, n &&
						`${t}-dropdown-option-body__suffix--has-submenu`
					],
					"data-dropdown-option": !0
				})));
			return a ? a({
				node: s,
				option: l
			}) : s
		}
	}),
	NDropdownGroup = defineComponent({
		name: "NDropdownGroup",
		props: {
			clsPrefix: {
				type: String,
				required: !0
			},
			tmNode: {
				type: Object,
				required: !0
			},
			parentKey: {
				type: [String, Number],
				default: null
			}
		},
		render() {
			const {
				tmNode: e,
				parentKey: t,
				clsPrefix: n
			} = this, {
				children: o
			} = e;
			return h(Fragment, null, h(NDropdownGroupHeader, {
				clsPrefix: n,
				tmNode: e,
				key: e.key
			}), o == null ? void 0 : o.map(r => {
				const {
					rawNode: i
				} = r;
				return i.show === !1 ? null : isDividerNode(i) ? h(NDropdownDivider, {
					clsPrefix: n,
					key: r.key
				}) : r.isGroup ? (warn("dropdown",
					"`group` node is not allowed to be put in `group` node."), null) : h(
					NDropdownOption, {
						clsPrefix: n,
						tmNode: r,
						parentKey: t,
						key: r.key
					})
			}))
		}
	}),
	NDropdownRenderOption = defineComponent({
		name: "DropdownRenderOption",
		props: {
			tmNode: {
				type: Object,
				required: !0
			}
		},
		render() {
			const {
				rawNode: {
					render: e,
					props: t
				}
			} = this.tmNode;
			return h("div", t, [e == null ? void 0 : e()])
		}
	}),
	NDropdownMenu = defineComponent({
		name: "DropdownMenu",
		props: {
			scrollable: Boolean,
			showArrow: Boolean,
			arrowStyle: [String, Object],
			clsPrefix: {
				type: String,
				required: !0
			},
			tmNodes: {
				type: Array,
				default: () => []
			},
			parentKey: {
				type: [String, Number],
				default: null
			}
		},
		setup(e) {
			const {
				renderIconRef: t,
				childrenFieldRef: n
			} = inject(dropdownInjectionKey);
			provide(dropdownMenuInjectionKey, {
				showIconRef: computed(() => {
					const r = t.value;
					return e.tmNodes.some(i => {
						var a;
						if (i.isGroup) return (a = i.children) === null || a === void 0 ?
							void 0 : a.some(({
								rawNode: s
							}) => r ? r(s) : s.icon);
						const {
							rawNode: l
						} = i;
						return r ? r(l) : l.icon
					})
				}),
				hasSubmenuRef: computed(() => {
					const {
						value: r
					} = n;
					return e.tmNodes.some(i => {
						var a;
						if (i.isGroup) return (a = i.children) === null || a === void 0 ?
							void 0 : a.some(({
								rawNode: s
							}) => isSubmenuNode(s, r));
						const {
							rawNode: l
						} = i;
						return isSubmenuNode(l, r)
					})
				})
			});
			const o = ref(null);
			return provide(modalBodyInjectionKey, null), provide(drawerBodyInjectionKey, null), provide(
				popoverBodyInjectionKey, o), {
				bodyRef: o
			}
		},
		render() {
			const {
				parentKey: e,
				clsPrefix: t,
				scrollable: n
			} = this, o = this.tmNodes.map(r => {
				const {
					rawNode: i
				} = r;
				return i.show === !1 ? null : isRenderNode(i) ? h(NDropdownRenderOption, {
					tmNode: r,
					key: r.key
				}) : isDividerNode(i) ? h(NDropdownDivider, {
					clsPrefix: t,
					key: r.key
				}) : isGroupNode(i) ? h(NDropdownGroup, {
					clsPrefix: t,
					tmNode: r,
					parentKey: e,
					key: r.key
				}) : h(NDropdownOption, {
					clsPrefix: t,
					tmNode: r,
					parentKey: e,
					key: r.key,
					props: i.props,
					scrollable: n
				})
			});
			return h("div", {
				class: [`${t}-dropdown-menu`, n && `${t}-dropdown-menu--scrollable`],
				ref: "bodyRef"
			}, n ? h(XScrollbar, {
				contentClass: `${t}-dropdown-menu__content`
			}, {
				default: () => o
			}) : o, this.showArrow ? renderArrow({
				clsPrefix: t,
				arrowStyle: this.arrowStyle,
				arrowClass: void 0,
				arrowWrapperClass: void 0,
				arrowWrapperStyle: void 0
			}) : null)
		}
	}),
	style$e = cB("dropdown-menu", `
 transform-origin: var(--v-transform-origin);
 background-color: var(--n-color);
 border-radius: var(--n-border-radius);
 box-shadow: var(--n-box-shadow);
 position: relative;
 transition:
 background-color .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
`, [fadeInScaleUpTransition(), cB("dropdown-option", `
 position: relative;
 `, [c$1("a", `
 text-decoration: none;
 color: inherit;
 outline: none;
 `, [c$1("&::before", `
 content: "";
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 `)]), cB("dropdown-option-body", `
 display: flex;
 cursor: pointer;
 position: relative;
 height: var(--n-option-height);
 line-height: var(--n-option-height);
 font-size: var(--n-font-size);
 color: var(--n-option-text-color);
 transition: color .3s var(--n-bezier);
 `, [c$1("&::before", `
 content: "";
 position: absolute;
 top: 0;
 bottom: 0;
 left: 4px;
 right: 4px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `), cNotM("disabled", [cM("pending", `
 color: var(--n-option-text-color-hover);
 `, [cE("prefix, suffix", `
 color: var(--n-option-text-color-hover);
 `), c$1("&::before", "background-color: var(--n-option-color-hover);")]), cM("active", `
 color: var(--n-option-text-color-active);
 `, [cE("prefix, suffix", `
 color: var(--n-option-text-color-active);
 `), c$1("&::before", "background-color: var(--n-option-color-active);")]), cM("child-active", `
 color: var(--n-option-text-color-child-active);
 `, [cE("prefix, suffix", `
 color: var(--n-option-text-color-child-active);
 `)])]), cM("disabled", `
 cursor: not-allowed;
 opacity: var(--n-option-opacity-disabled);
 `), cM("group", `
 font-size: calc(var(--n-font-size) - 1px);
 color: var(--n-group-header-text-color);
 `, [cE("prefix", `
 width: calc(var(--n-option-prefix-width) / 2);
 `, [cM("show-icon", `
 width: calc(var(--n-option-icon-prefix-width) / 2);
 `)])]), cE("prefix", `
 width: var(--n-option-prefix-width);
 display: flex;
 justify-content: center;
 align-items: center;
 color: var(--n-prefix-color);
 transition: color .3s var(--n-bezier);
 z-index: 1;
 `, [cM("show-icon", `
 width: var(--n-option-icon-prefix-width);
 `), cB("icon", `
 font-size: var(--n-option-icon-size);
 `)]), cE("label", `
 white-space: nowrap;
 flex: 1;
 z-index: 1;
 `), cE("suffix", `
 box-sizing: border-box;
 flex-grow: 0;
 flex-shrink: 0;
 display: flex;
 justify-content: flex-end;
 align-items: center;
 min-width: var(--n-option-suffix-width);
 padding: 0 8px;
 transition: color .3s var(--n-bezier);
 color: var(--n-suffix-color);
 z-index: 1;
 `, [cM("has-submenu", `
 width: var(--n-option-icon-suffix-width);
 `), cB("icon", `
 font-size: var(--n-option-icon-size);
 `)]), cB("dropdown-menu", "pointer-events: all;")]), cB("dropdown-offset-container", `
 pointer-events: none;
 position: absolute;
 left: 0;
 right: 0;
 top: -4px;
 bottom: -4px;
 `)]), cB("dropdown-divider", `
 transition: background-color .3s var(--n-bezier);
 background-color: var(--n-divider-color);
 height: 1px;
 margin: 4px 0;
 `), cB("dropdown-menu-wrapper", `
 transform-origin: var(--v-transform-origin);
 width: fit-content;
 `), c$1(">", [cB("scrollbar", `
 height: inherit;
 max-height: inherit;
 `)]), cNotM("scrollable", `
 padding: var(--n-padding);
 `), cM("scrollable", [cE("content", `
 padding: var(--n-padding);
 `)])]),
	dropdownBaseProps = {
		animated: {
			type: Boolean,
			default: !0
		},
		keyboard: {
			type: Boolean,
			default: !0
		},
		size: {
			type: String,
			default: "medium"
		},
		inverted: Boolean,
		placement: {
			type: String,
			default: "bottom"
		},
		onSelect: [Function, Array],
		options: {
			type: Array,
			default: () => []
		},
		menuProps: Function,
		showArrow: Boolean,
		renderLabel: Function,
		renderIcon: Function,
		renderOption: Function,
		nodeProps: Function,
		labelField: {
			type: String,
			default: "label"
		},
		keyField: {
			type: String,
			default: "key"
		},
		childrenField: {
			type: String,
			default: "children"
		},
		value: [String, Number]
	},
	popoverPropKeys = Object.keys(popoverBaseProps),
	dropdownProps = Object.assign(Object.assign(Object.assign({}, popoverBaseProps), dropdownBaseProps), useTheme
	.props),
	NDropdown = defineComponent({
		name: "Dropdown",
		inheritAttrs: !1,
		props: dropdownProps,
		setup(e) {
			const t = ref(!1),
				n = useMergedState(toRef(e, "show"), t),
				o = computed(() => {
					const {
						keyField: $,
						childrenField: _
					} = e;
					return createTreeMate(e.options, {
						getKey(O) {
							return O[$]
						},
						getDisabled(O) {
							return O.disabled === !0
						},
						getIgnored(O) {
							return O.type === "divider" || O.type === "render"
						},
						getChildren(O) {
							return O[_]
						}
					})
				}),
				r = computed(() => o.value.treeNodes),
				i = ref(null),
				a = ref(null),
				l = ref(null),
				s = computed(() => {
					var $, _, O;
					return (O = (_ = ($ = i.value) !== null && $ !== void 0 ? $ : a.value) !== null && _ !==
						void 0 ? _ : l.value) !== null && O !== void 0 ? O : null
				}),
				u = computed(() => o.value.getPath(s.value).keyPath),
				d = computed(() => o.value.getPath(e.value).keyPath),
				f = useMemo(() => e.keyboard && n.value);
			useKeyboard({
				keydown: {
					ArrowUp: {
						prevent: !0,
						handler: y
					},
					ArrowRight: {
						prevent: !0,
						handler: w
					},
					ArrowDown: {
						prevent: !0,
						handler: R
					},
					ArrowLeft: {
						prevent: !0,
						handler: S
					},
					Enter: {
						prevent: !0,
						handler: k
					},
					Escape: x
				}
			}, f);
			const {
				mergedClsPrefixRef: v,
				inlineThemeDisabled: g
			} = useConfig(e), p = useTheme("Dropdown", "-dropdown", style$e, dropdownLight, e, v);
			provide(dropdownInjectionKey, {
				labelFieldRef: toRef(e, "labelField"),
				childrenFieldRef: toRef(e, "childrenField"),
				renderLabelRef: toRef(e, "renderLabel"),
				renderIconRef: toRef(e, "renderIcon"),
				hoverKeyRef: i,
				keyboardKeyRef: a,
				lastToggledSubmenuKeyRef: l,
				pendingKeyPathRef: u,
				activeKeyPathRef: d,
				animatedRef: toRef(e, "animated"),
				mergedShowRef: n,
				nodePropsRef: toRef(e, "nodeProps"),
				renderOptionRef: toRef(e, "renderOption"),
				menuPropsRef: toRef(e, "menuProps"),
				doSelect: m,
				doUpdateShow: C
			}), watch(n, $ => {
				!e.animated && !$ && b()
			});

			function m($, _) {
				const {
					onSelect: O
				} = e;
				O && call(O, $, _)
			}

			function C($) {
				const {
					"onUpdate:show": _,
					onUpdateShow: O
				} = e;
				_ && call(_, $), O && call(O, $), t.value = $
			}

			function b() {
				i.value = null, a.value = null, l.value = null
			}

			function x() {
				C(!1)
			}

			function S() {
				T("left")
			}

			function w() {
				T("right")
			}

			function y() {
				T("up")
			}

			function R() {
				T("down")
			}

			function k() {
				const $ = B();
				$ != null && $.isLeaf && n.value && (m($.key, $.rawNode), C(!1))
			}

			function B() {
				var $;
				const {
					value: _
				} = o, {
					value: O
				} = s;
				return !_ || O === null ? null : ($ = _.getNode(O)) !== null && $ !== void 0 ? $ : null
			}

			function T($) {
				const {
					value: _
				} = s, {
					value: {
						getFirstAvailableNode: O
					}
				} = o;
				let N = null;
				if (_ === null) {
					const D = O();
					D !== null && (N = D.key)
				} else {
					const D = B();
					if (D) {
						let F;
						switch ($) {
							case "down":
								F = D.getNext();
								break;
							case "up":
								F = D.getPrev();
								break;
							case "right":
								F = D.getChild();
								break;
							case "left":
								F = D.getParent();
								break
						}
						F && (N = F.key)
					}
				}
				N !== null && (i.value = null, a.value = N)
			}
			const M = computed(() => {
					const {
						size: $,
						inverted: _
					} = e, {
						common: {
							cubicBezierEaseInOut: O
						},
						self: N
					} = p.value, {
						padding: D,
						dividerColor: F,
						borderRadius: j,
						optionOpacityDisabled: J,
						[createKey("optionIconSuffixWidth", $)]: Q,
						[createKey("optionSuffixWidth", $)]: re,
						[createKey("optionIconPrefixWidth", $)]: L,
						[createKey("optionPrefixWidth", $)]: W,
						[createKey("fontSize", $)]: ee,
						[createKey("optionHeight", $)]: ie,
						[createKey("optionIconSize", $)]: pe
					} = N, oe = {
						"--n-bezier": O,
						"--n-font-size": ee,
						"--n-padding": D,
						"--n-border-radius": j,
						"--n-option-height": ie,
						"--n-option-prefix-width": W,
						"--n-option-icon-prefix-width": L,
						"--n-option-suffix-width": re,
						"--n-option-icon-suffix-width": Q,
						"--n-option-icon-size": pe,
						"--n-divider-color": F,
						"--n-option-opacity-disabled": J
					};
					return _ ? (oe["--n-color"] = N.colorInverted, oe["--n-option-color-hover"] = N
						.optionColorHoverInverted, oe["--n-option-color-active"] = N
						.optionColorActiveInverted, oe["--n-option-text-color"] = N.optionTextColorInverted,
						oe["--n-option-text-color-hover"] = N.optionTextColorHoverInverted, oe[
							"--n-option-text-color-active"] = N.optionTextColorActiveInverted, oe[
							"--n-option-text-color-child-active"] = N.optionTextColorChildActiveInverted,
						oe["--n-prefix-color"] = N.prefixColorInverted, oe["--n-suffix-color"] = N
						.suffixColorInverted, oe["--n-group-header-text-color"] = N
						.groupHeaderTextColorInverted) : (oe["--n-color"] = N.color, oe[
							"--n-option-color-hover"] = N.optionColorHover, oe["--n-option-color-active"] =
						N.optionColorActive, oe["--n-option-text-color"] = N.optionTextColor, oe[
							"--n-option-text-color-hover"] = N.optionTextColorHover, oe[
							"--n-option-text-color-active"] = N.optionTextColorActive, oe[
							"--n-option-text-color-child-active"] = N.optionTextColorChildActive, oe[
							"--n-prefix-color"] = N.prefixColor, oe["--n-suffix-color"] = N.suffixColor, oe[
							"--n-group-header-text-color"] = N.groupHeaderTextColor), oe
				}),
				E = g ? useThemeClass("dropdown", computed(() => `${e.size[0]}${e.inverted?"i":""}`), M, e) :
				void 0;
			return {
				mergedClsPrefix: v,
				mergedTheme: p,
				tmNodes: r,
				mergedShow: n,
				handleAfterLeave: () => {
					e.animated && b()
				},
				doUpdateShow: C,
				cssVars: g ? void 0 : M,
				themeClass: E == null ? void 0 : E.themeClass,
				onRender: E == null ? void 0 : E.onRender
			}
		},
		render() {
			const e = (o, r, i, a, l) => {
					var s;
					const {
						mergedClsPrefix: u,
						menuProps: d
					} = this;
					(s = this.onRender) === null || s === void 0 || s.call(this);
					const f = (d == null ? void 0 : d(void 0, this.tmNodes.map(g => g.rawNode))) || {},
						v = {
							ref: createRefSetter(r),
							class: [o, `${u}-dropdown`, this.themeClass],
							clsPrefix: u,
							tmNodes: this.tmNodes,
							style: [...i, this.cssVars],
							showArrow: this.showArrow,
							arrowStyle: this.arrowStyle,
							scrollable: this.scrollable,
							onMouseenter: a,
							onMouseleave: l
						};
					return h(NDropdownMenu, mergeProps(this.$attrs, v, f))
				},
				{
					mergedTheme: t
				} = this,
				n = {
					show: this.mergedShow,
					theme: t.peers.Popover,
					themeOverrides: t.peerOverrides.Popover,
					internalOnAfterLeave: this.handleAfterLeave,
					internalRenderBody: e,
					onUpdateShow: this.doUpdateShow,
					"onUpdate:show": void 0
				};
			return h(NPopover, Object.assign({}, keep(this.$props, popoverPropKeys), n), {
				trigger: () => {
					var o, r;
					return (r = (o = this.$slots).default) === null || r === void 0 ? void 0 : r.call(o)
				}
			})
		}
	});

function useDialog() {
	const e = inject(dialogApiInjectionKey, null);
	return e === null && throwError("use-dialog", "No outer <n-dialog-provider /> founded."), e
}
let supportFlexGap;
const ensureSupportFlexGap = () => {
		if (!isBrowser$1) return !0;
		if (supportFlexGap === void 0) {
			const e = document.createElement("div");
			e.style.display = "flex", e.style.flexDirection = "column", e.style.rowGap = "1px", e.appendChild(document
				.createElement("div")), e.appendChild(document.createElement("div")), document.body.appendChild(e);
			const t = e.scrollHeight === 1;
			return document.body.removeChild(e), supportFlexGap = t
		}
		return supportFlexGap
	},
	spaceProps = Object.assign(Object.assign({}, useTheme.props), {
		align: String,
		justify: {
			type: String,
			default: "start"
		},
		inline: Boolean,
		vertical: Boolean,
		reverse: Boolean,
		size: {
			type: [String, Number, Array],
			default: "medium"
		},
		wrapItem: {
			type: Boolean,
			default: !0
		},
		itemClass: String,
		itemStyle: [String, Object],
		wrap: {
			type: Boolean,
			default: !0
		},
		internalUseGap: {
			type: Boolean,
			default: void 0
		}
	}),
	NSpace = defineComponent({
		name: "Space",
		props: spaceProps,
		setup(e) {
			const {
				mergedClsPrefixRef: t,
				mergedRtlRef: n
			} = useConfig(e), o = useTheme("Space", "-space", void 0, spaceLight, e, t), r = useRtl("Space", n, t);
			return {
				useGap: ensureSupportFlexGap(),
				rtlEnabled: r,
				mergedClsPrefix: t,
				margin: computed(() => {
					const {
						size: i
					} = e;
					if (Array.isArray(i)) return {
						horizontal: i[0],
						vertical: i[1]
					};
					if (typeof i == "number") return {
						horizontal: i,
						vertical: i
					};
					const {
						self: {
							[createKey("gap", i)]: a
						}
					} = o.value, {
						row: l,
						col: s
					} = getGap(a);
					return {
						horizontal: depx(s),
						vertical: depx(l)
					}
				})
			}
		},
		render() {
			const {
				vertical: e,
				reverse: t,
				align: n,
				inline: o,
				justify: r,
				itemClass: i,
				itemStyle: a,
				margin: l,
				wrap: s,
				mergedClsPrefix: u,
				rtlEnabled: d,
				useGap: f,
				wrapItem: v,
				internalUseGap: g
			} = this, p = flatten$1(getSlot(this), !1);
			if (!p.length) return null;
			const m = `${l.horizontal}px`,
				C = `${l.horizontal/2}px`,
				b = `${l.vertical}px`,
				x = `${l.vertical/2}px`,
				S = p.length - 1,
				w = r.startsWith("space-");
			return h("div", {
				role: "none",
				class: [`${u}-space`, d && `${u}-space--rtl`],
				style: {
					display: o ? "inline-flex" : "flex",
					flexDirection: (() => e && !t ? "column" : e && t ? "column-reverse" : !e && t ?
						"row-reverse" : "row")(),
					justifyContent: ["start", "end"].includes(r) ? "flex-" + r : r,
					flexWrap: !s || e ? "nowrap" : "wrap",
					marginTop: f || e ? "" : `-${x}`,
					marginBottom: f || e ? "" : `-${x}`,
					alignItems: n,
					gap: f ? `${l.vertical}px ${l.horizontal}px` : ""
				}
			}, !v && (f || g) ? p : p.map((y, R) => y.type === Comment ? y : h("div", {
				role: "none",
				class: i,
				style: [a, {
					maxWidth: "100%"
				}, f ? "" : e ? {
					marginBottom: R !== S ? b : ""
				} : d ? {
					marginLeft: w ? r === "space-between" && R === S ? "" : C : R !== S ?
						m : "",
					marginRight: w ? r === "space-between" && R === 0 ? "" : C : "",
					paddingTop: x,
					paddingBottom: x
				} : {
					marginRight: w ? r === "space-between" && R === S ? "" : C : R !== S ?
						m : "",
					marginLeft: w ? r === "space-between" && R === 0 ? "" : C : "",
					paddingTop: x,
					paddingBottom: x
				}]
			}, y)))
		}
	}),
	style$d = cB("form", [cM("inline", `
 width: 100%;
 display: inline-flex;
 align-items: flex-start;
 align-content: space-around;
 `, [cB("form-item", {
		width: "auto",
		marginRight: "18px"
	}, [c$1("&:last-child", {
		marginRight: 0
	})])])]),
	formInjectionKey = createInjectionKey("n-form"),
	formItemInstsInjectionKey = createInjectionKey("n-form-item-insts");
var __awaiter$4 = globalThis && globalThis.__awaiter || function(e, t, n, o) {
	function r(i) {
		return i instanceof n ? i : new n(function(a) {
			a(i)
		})
	}
	return new(n || (n = Promise))(function(i, a) {
		function l(d) {
			try {
				u(o.next(d))
			} catch (f) {
				a(f)
			}
		}

		function s(d) {
			try {
				u(o.throw(d))
			} catch (f) {
				a(f)
			}
		}

		function u(d) {
			d.done ? i(d.value) : r(d.value).then(l, s)
		}
		u((o = o.apply(e, t || [])).next())
	})
};
const formProps = Object.assign(Object.assign({}, useTheme.props), {
		inline: Boolean,
		labelWidth: [Number, String],
		labelAlign: String,
		labelPlacement: {
			type: String,
			default: "top"
		},
		model: {
			type: Object,
			default: () => {}
		},
		rules: Object,
		disabled: Boolean,
		size: String,
		showRequireMark: {
			type: Boolean,
			default: void 0
		},
		requireMarkPlacement: String,
		showFeedback: {
			type: Boolean,
			default: !0
		},
		onSubmit: {
			type: Function,
			default: e => {
				e.preventDefault()
			}
		},
		showLabel: {
			type: Boolean,
			default: void 0
		},
		validateMessages: Object
	}),
	NForm = defineComponent({
		name: "Form",
		props: formProps,
		setup(e) {
			const {
				mergedClsPrefixRef: t
			} = useConfig(e);
			useTheme("Form", "-form", style$d, formLight, e, t);
			const n = {},
				o = ref(void 0),
				r = s => {
					const u = o.value;
					(u === void 0 || s >= u) && (o.value = s)
				};

			function i(s) {
				return __awaiter$4(this, arguments, void 0, function*(u, d = () => !0) {
					return yield new Promise((f, v) => {
						const g = [];
						for (const p of keysOf(n)) {
							const m = n[p];
							for (const C of m) C.path && g.push(C.internalValidate(null, d))
						}
						Promise.all(g).then(p => {
							const m = p.some(x => !x.valid),
								C = [],
								b = [];
							p.forEach(x => {
								var S, w;
								!((S = x.errors) === null || S === void 0) && S
									.length && C.push(x.errors), !((w = x
										.warnings) === null || w === void 0) &&
									w.length && b.push(x.warnings)
							}), u && u(C.length ? C : void 0, {
								warnings: b.length ? b : void 0
							}), m ? v(C.length ? C : void 0) : f({
								warnings: b.length ? b : void 0
							})
						})
					})
				})
			}

			function a() {
				for (const s of keysOf(n)) {
					const u = n[s];
					for (const d of u) d.restoreValidation()
				}
			}
			return provide(formInjectionKey, {
				props: e,
				maxChildLabelWidthRef: o,
				deriveMaxChildLabelWidth: r
			}), provide(formItemInstsInjectionKey, {
				formItems: n
			}), Object.assign({
				validate: i,
				restoreValidation: a
			}, {
				mergedClsPrefix: t
			})
		},
		render() {
			const {
				mergedClsPrefix: e
			} = this;
			return h("form", {
				class: [`${e}-form`, this.inline && `${e}-form--inline`],
				onSubmit: this.onSubmit
			}, this.$slots)
		}
	});

function _extends() {
	return _extends = Object.assign ? Object.assign.bind() : function(e) {
		for (var t = 1; t < arguments.length; t++) {
			var n = arguments[t];
			for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
		}
		return e
	}, _extends.apply(this, arguments)
}

function _inheritsLoose(e, t) {
	e.prototype = Object.create(t.prototype), e.prototype.constructor = e, _setPrototypeOf(e, t)
}

function _getPrototypeOf(e) {
	return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(n) {
		return n.__proto__ || Object.getPrototypeOf(n)
	}, _getPrototypeOf(e)
}

function _setPrototypeOf(e, t) {
	return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, r) {
		return o.__proto__ = r, o
	}, _setPrototypeOf(e, t)
}

function _isNativeReflectConstruct() {
	if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham) return !1;
	if (typeof Proxy == "function") return !0;
	try {
		return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {})), !0
	} catch {
		return !1
	}
}

function _construct(e, t, n) {
	return _isNativeReflectConstruct() ? _construct = Reflect.construct.bind() : _construct = function(r, i, a) {
		var l = [null];
		l.push.apply(l, i);
		var s = Function.bind.apply(r, l),
			u = new s;
		return a && _setPrototypeOf(u, a.prototype), u
	}, _construct.apply(null, arguments)
}

function _isNativeFunction(e) {
	return Function.toString.call(e).indexOf("[native code]") !== -1
}

function _wrapNativeSuper(e) {
	var t = typeof Map == "function" ? new Map : void 0;
	return _wrapNativeSuper = function(o) {
		if (o === null || !_isNativeFunction(o)) return o;
		if (typeof o != "function") throw new TypeError("Super expression must either be null or a function");
		if (typeof t < "u") {
			if (t.has(o)) return t.get(o);
			t.set(o, r)
		}

		function r() {
			return _construct(o, arguments, _getPrototypeOf(this).constructor)
		}
		return r.prototype = Object.create(o.prototype, {
			constructor: {
				value: r,
				enumerable: !1,
				writable: !0,
				configurable: !0
			}
		}), _setPrototypeOf(r, o)
	}, _wrapNativeSuper(e)
}
var formatRegExp = /%[sdj%]/g,
	warning = function() {};
typeof process < "u" && process.env;

function convertFieldsError(e) {
	if (!e || !e.length) return null;
	var t = {};
	return e.forEach(function(n) {
		var o = n.field;
		t[o] = t[o] || [], t[o].push(n)
	}), t
}

function format$1(e) {
	for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) n[o - 1] = arguments[o];
	var r = 0,
		i = n.length;
	if (typeof e == "function") return e.apply(null, n);
	if (typeof e == "string") {
		var a = e.replace(formatRegExp, function(l) {
			if (l === "%%") return "%";
			if (r >= i) return l;
			switch (l) {
				case "%s":
					return String(n[r++]);
				case "%d":
					return Number(n[r++]);
				case "%j":
					try {
						return JSON.stringify(n[r++])
					} catch {
						return "[Circular]"
					}
					break;
				default:
					return l
			}
		});
		return a
	}
	return e
}

function isNativeStringType(e) {
	return e === "string" || e === "url" || e === "hex" || e === "email" || e === "date" || e === "pattern"
}

function isEmptyValue(e, t) {
	return !!(e == null || t === "array" && Array.isArray(e) && !e.length || isNativeStringType(t) && typeof e ==
		"string" && !e)
}

function asyncParallelArray(e, t, n) {
	var o = [],
		r = 0,
		i = e.length;

	function a(l) {
		o.push.apply(o, l || []), r++, r === i && n(o)
	}
	e.forEach(function(l) {
		t(l, a)
	})
}

function asyncSerialArray(e, t, n) {
	var o = 0,
		r = e.length;

	function i(a) {
		if (a && a.length) {
			n(a);
			return
		}
		var l = o;
		o = o + 1, l < r ? t(e[l], i) : n([])
	}
	i([])
}

function flattenObjArr(e) {
	var t = [];
	return Object.keys(e).forEach(function(n) {
		t.push.apply(t, e[n] || [])
	}), t
}
var AsyncValidationError = function(e) {
	_inheritsLoose(t, e);

	function t(n, o) {
		var r;
		return r = e.call(this, "Async Validation Error") || this, r.errors = n, r.fields = o, r
	}
	return t
}(_wrapNativeSuper(Error));

function asyncMap(e, t, n, o, r) {
	if (t.first) {
		var i = new Promise(function(v, g) {
			var p = function(b) {
					return o(b), b.length ? g(new AsyncValidationError(b, convertFieldsError(b))) : v(r)
				},
				m = flattenObjArr(e);
			asyncSerialArray(m, n, p)
		});
		return i.catch(function(v) {
			return v
		}), i
	}
	var a = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [],
		l = Object.keys(e),
		s = l.length,
		u = 0,
		d = [],
		f = new Promise(function(v, g) {
			var p = function(C) {
				if (d.push.apply(d, C), u++, u === s) return o(d), d.length ? g(new AsyncValidationError(d,
					convertFieldsError(d))) : v(r)
			};
			l.length || (o(d), v(r)), l.forEach(function(m) {
				var C = e[m];
				a.indexOf(m) !== -1 ? asyncSerialArray(C, n, p) : asyncParallelArray(C, n, p)
			})
		});
	return f.catch(function(v) {
		return v
	}), f
}

function isErrorObj(e) {
	return !!(e && e.message !== void 0)
}

function getValue(e, t) {
	for (var n = e, o = 0; o < t.length; o++) {
		if (n == null) return n;
		n = n[t[o]]
	}
	return n
}

function complementError(e, t) {
	return function(n) {
		var o;
		return e.fullFields ? o = getValue(t, e.fullFields) : o = t[n.field || e.fullField], isErrorObj(n) ? (n
			.field = n.field || e.fullField, n.fieldValue = o, n) : {
			message: typeof n == "function" ? n() : n,
			fieldValue: o,
			field: n.field || e.fullField
		}
	}
}

function deepMerge(e, t) {
	if (t) {
		for (var n in t)
			if (t.hasOwnProperty(n)) {
				var o = t[n];
				typeof o == "object" && typeof e[n] == "object" ? e[n] = _extends({}, e[n], o) : e[n] = o
			}
	}
	return e
}
var required$1 = function(t, n, o, r, i, a) {
		t.required && (!o.hasOwnProperty(t.field) || isEmptyValue(n, a || t.type)) && r.push(format$1(i.messages
			.required, t.fullField))
	},
	whitespace = function(t, n, o, r, i) {
		(/^\s+$/.test(n) || n === "") && r.push(format$1(i.messages.whitespace, t.fullField))
	},
	urlReg, getUrlRegex = function() {
		if (urlReg) return urlReg;
		var e = "[a-fA-F\\d:]",
			t = function(w) {
				return w && w.includeBoundaries ? "(?:(?<=\\s|^)(?=" + e + ")|(?<=" + e + ")(?=\\s|$))" : ""
			},
			n = "(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",
			o = "[a-fA-F\\d]{1,4}",
			r = (`
(?:
(?:` + o + ":){7}(?:" + o + `|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:` + o + ":){6}(?:" + n + "|:" + o + `|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:` + o + ":){5}(?::" + n + "|(?::" + o + `){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:` + o + ":){4}(?:(?::" + o + "){0,1}:" + n + "|(?::" + o + `){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:` + o + ":){3}(?:(?::" + o + "){0,2}:" + n + "|(?::" + o + `){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:` + o + ":){2}(?:(?::" + o + "){0,3}:" + n + "|(?::" + o + `){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:` + o + ":){1}(?:(?::" + o + "){0,4}:" + n + "|(?::" + o + `){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::` + o + "){0,5}:" + n + "|(?::" + o + `){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm, "").replace(/\n/g, "").trim(),
			i = new RegExp("(?:^" + n + "$)|(?:^" + r + "$)"),
			a = new RegExp("^" + n + "$"),
			l = new RegExp("^" + r + "$"),
			s = function(w) {
				return w && w.exact ? i : new RegExp("(?:" + t(w) + n + t(w) + ")|(?:" + t(w) + r + t(w) + ")", "g")
			};
		s.v4 = function(S) {
			return S && S.exact ? a : new RegExp("" + t(S) + n + t(S), "g")
		}, s.v6 = function(S) {
			return S && S.exact ? l : new RegExp("" + t(S) + r + t(S), "g")
		};
		var u = "(?:(?:[a-z]+:)?//)",
			d = "(?:\\S+(?::\\S*)?@)?",
			f = s.v4().source,
			v = s.v6().source,
			g = "(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",
			p = "(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",
			m = "(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",
			C = "(?::\\d{2,5})?",
			b = '(?:[/?#][^\\s"]*)?',
			x = "(?:" + u + "|www\\.)" + d + "(?:localhost|" + f + "|" + v + "|" + g + p + m + ")" + C + b;
		return urlReg = new RegExp("(?:^" + x + "$)", "i"), urlReg
	},
	pattern$2 = {
		email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
		hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i
	},
	types = {
		integer: function(t) {
			return types.number(t) && parseInt(t, 10) === t
		},
		float: function(t) {
			return types.number(t) && !types.integer(t)
		},
		array: function(t) {
			return Array.isArray(t)
		},
		regexp: function(t) {
			if (t instanceof RegExp) return !0;
			try {
				return !!new RegExp(t)
			} catch {
				return !1
			}
		},
		date: function(t) {
			return typeof t.getTime == "function" && typeof t.getMonth == "function" && typeof t.getYear ==
				"function" && !isNaN(t.getTime())
		},
		number: function(t) {
			return isNaN(t) ? !1 : typeof t == "number"
		},
		object: function(t) {
			return typeof t == "object" && !types.array(t)
		},
		method: function(t) {
			return typeof t == "function"
		},
		email: function(t) {
			return typeof t == "string" && t.length <= 320 && !!t.match(pattern$2.email)
		},
		url: function(t) {
			return typeof t == "string" && t.length <= 2048 && !!t.match(getUrlRegex())
		},
		hex: function(t) {
			return typeof t == "string" && !!t.match(pattern$2.hex)
		}
	},
	type$1 = function(t, n, o, r, i) {
		if (t.required && n === void 0) {
			required$1(t, n, o, r, i);
			return
		}
		var a = ["integer", "float", "array", "regexp", "object", "method", "email", "number", "date", "url", "hex"],
			l = t.type;
		a.indexOf(l) > -1 ? types[l](n) || r.push(format$1(i.messages.types[l], t.fullField, t.type)) : l &&
			typeof n !== t.type && r.push(format$1(i.messages.types[l], t.fullField, t.type))
	},
	range = function(t, n, o, r, i) {
		var a = typeof t.len == "number",
			l = typeof t.min == "number",
			s = typeof t.max == "number",
			u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
			d = n,
			f = null,
			v = typeof n == "number",
			g = typeof n == "string",
			p = Array.isArray(n);
		if (v ? f = "number" : g ? f = "string" : p && (f = "array"), !f) return !1;
		p && (d = n.length), g && (d = n.replace(u, "_").length), a ? d !== t.len && r.push(format$1(i.messages[f].len,
				t.fullField, t.len)) : l && !s && d < t.min ? r.push(format$1(i.messages[f].min, t.fullField, t.min)) :
			s && !l && d > t.max ? r.push(format$1(i.messages[f].max, t.fullField, t.max)) : l && s && (d < t.min || d >
				t.max) && r.push(format$1(i.messages[f].range, t.fullField, t.min, t.max))
	},
	ENUM$1 = "enum",
	enumerable$1 = function(t, n, o, r, i) {
		t[ENUM$1] = Array.isArray(t[ENUM$1]) ? t[ENUM$1] : [], t[ENUM$1].indexOf(n) === -1 && r.push(format$1(i
			.messages[ENUM$1], t.fullField, t[ENUM$1].join(", ")))
	},
	pattern$1 = function(t, n, o, r, i) {
		if (t.pattern) {
			if (t.pattern instanceof RegExp) t.pattern.lastIndex = 0, t.pattern.test(n) || r.push(format$1(i.messages
				.pattern.mismatch, t.fullField, n, t.pattern));
			else if (typeof t.pattern == "string") {
				var a = new RegExp(t.pattern);
				a.test(n) || r.push(format$1(i.messages.pattern.mismatch, t.fullField, n, t.pattern))
			}
		}
	},
	rules = {
		required: required$1,
		whitespace,
		type: type$1,
		range,
		enum: enumerable$1,
		pattern: pattern$1
	},
	string = function(t, n, o, r, i) {
		var a = [],
			l = t.required || !t.required && r.hasOwnProperty(t.field);
		if (l) {
			if (isEmptyValue(n, "string") && !t.required) return o();
			rules.required(t, n, r, a, i, "string"), isEmptyValue(n, "string") || (rules.type(t, n, r, a, i), rules
				.range(t, n, r, a, i), rules.pattern(t, n, r, a, i), t.whitespace === !0 && rules.whitespace(t, n,
					r, a, i))
		}
		o(a)
	},
	method = function(t, n, o, r, i) {
		var a = [],
			l = t.required || !t.required && r.hasOwnProperty(t.field);
		if (l) {
			if (isEmptyValue(n) && !t.required) return o();
			rules.required(t, n, r, a, i), n !== void 0 && rules.type(t, n, r, a, i)
		}
		o(a)
	},
	number = function(t, n, o, r, i) {
		var a = [],
			l = t.required || !t.required && r.hasOwnProperty(t.field);
		if (l) {
			if (n === "" && (n = void 0), isEmptyValue(n) && !t.required) return o();
			rules.required(t, n, r, a, i), n !== void 0 && (rules.type(t, n, r, a, i), rules.range(t, n, r, a, i))
		}
		o(a)
	},
	_boolean = function(t, n, o, r, i) {
		var a = [],
			l = t.required || !t.required && r.hasOwnProperty(t.field);
		if (l) {
			if (isEmptyValue(n) && !t.required) return o();
			rules.required(t, n, r, a, i), n !== void 0 && rules.type(t, n, r, a, i)
		}
		o(a)
	},
	regexp = function(t, n, o, r, i) {
		var a = [],
			l = t.required || !t.required && r.hasOwnProperty(t.field);
		if (l) {
			if (isEmptyValue(n) && !t.required) return o();
			rules.required(t, n, r, a, i), isEmptyValue(n) || rules.type(t, n, r, a, i)
		}
		o(a)
	},
	integer = function(t, n, o, r, i) {
		var a = [],
			l = t.required || !t.required && r.hasOwnProperty(t.field);
		if (l) {
			if (isEmptyValue(n) && !t.required) return o();
			rules.required(t, n, r, a, i), n !== void 0 && (rules.type(t, n, r, a, i), rules.range(t, n, r, a, i))
		}
		o(a)
	},
	floatFn = function(t, n, o, r, i) {
		var a = [],
			l = t.required || !t.required && r.hasOwnProperty(t.field);
		if (l) {
			if (isEmptyValue(n) && !t.required) return o();
			rules.required(t, n, r, a, i), n !== void 0 && (rules.type(t, n, r, a, i), rules.range(t, n, r, a, i))
		}
		o(a)
	},
	array = function(t, n, o, r, i) {
		var a = [],
			l = t.required || !t.required && r.hasOwnProperty(t.field);
		if (l) {
			if (n == null && !t.required) return o();
			rules.required(t, n, r, a, i, "array"), n != null && (rules.type(t, n, r, a, i), rules.range(t, n, r, a, i))
		}
		o(a)
	},
	object = function(t, n, o, r, i) {
		var a = [],
			l = t.required || !t.required && r.hasOwnProperty(t.field);
		if (l) {
			if (isEmptyValue(n) && !t.required) return o();
			rules.required(t, n, r, a, i), n !== void 0 && rules.type(t, n, r, a, i)
		}
		o(a)
	},
	ENUM = "enum",
	enumerable = function(t, n, o, r, i) {
		var a = [],
			l = t.required || !t.required && r.hasOwnProperty(t.field);
		if (l) {
			if (isEmptyValue(n) && !t.required) return o();
			rules.required(t, n, r, a, i), n !== void 0 && rules[ENUM](t, n, r, a, i)
		}
		o(a)
	},
	pattern = function(t, n, o, r, i) {
		var a = [],
			l = t.required || !t.required && r.hasOwnProperty(t.field);
		if (l) {
			if (isEmptyValue(n, "string") && !t.required) return o();
			rules.required(t, n, r, a, i), isEmptyValue(n, "string") || rules.pattern(t, n, r, a, i)
		}
		o(a)
	},
	date = function(t, n, o, r, i) {
		var a = [],
			l = t.required || !t.required && r.hasOwnProperty(t.field);
		if (l) {
			if (isEmptyValue(n, "date") && !t.required) return o();
			if (rules.required(t, n, r, a, i), !isEmptyValue(n, "date")) {
				var s;
				n instanceof Date ? s = n : s = new Date(n), rules.type(t, s, r, a, i), s && rules.range(t, s.getTime(),
					r, a, i)
			}
		}
		o(a)
	},
	required = function(t, n, o, r, i) {
		var a = [],
			l = Array.isArray(n) ? "array" : typeof n;
		rules.required(t, n, r, a, i, l), o(a)
	},
	type = function(t, n, o, r, i) {
		var a = t.type,
			l = [],
			s = t.required || !t.required && r.hasOwnProperty(t.field);
		if (s) {
			if (isEmptyValue(n, a) && !t.required) return o();
			rules.required(t, n, r, l, i, a), isEmptyValue(n, a) || rules.type(t, n, r, l, i)
		}
		o(l)
	},
	any = function(t, n, o, r, i) {
		var a = [],
			l = t.required || !t.required && r.hasOwnProperty(t.field);
		if (l) {
			if (isEmptyValue(n) && !t.required) return o();
			rules.required(t, n, r, a, i)
		}
		o(a)
	},
	validators = {
		string,
		method,
		number,
		boolean: _boolean,
		regexp,
		integer,
		float: floatFn,
		array,
		object,
		enum: enumerable,
		pattern,
		date,
		url: type,
		hex: type,
		email: type,
		required,
		any
	};

function newMessages() {
	return {
		default: "Validation error on field %s",
		required: "%s is required",
		enum: "%s must be one of %s",
		whitespace: "%s cannot be empty",
		date: {
			format: "%s date %s is invalid for format %s",
			parse: "%s date could not be parsed, %s is invalid ",
			invalid: "%s date %s is invalid"
		},
		types: {
			string: "%s is not a %s",
			method: "%s is not a %s (function)",
			array: "%s is not an %s",
			object: "%s is not an %s",
			number: "%s is not a %s",
			date: "%s is not a %s",
			boolean: "%s is not a %s",
			integer: "%s is not an %s",
			float: "%s is not a %s",
			regexp: "%s is not a valid %s",
			email: "%s is not a valid %s",
			url: "%s is not a valid %s",
			hex: "%s is not a valid %s"
		},
		string: {
			len: "%s must be exactly %s characters",
			min: "%s must be at least %s characters",
			max: "%s cannot be longer than %s characters",
			range: "%s must be between %s and %s characters"
		},
		number: {
			len: "%s must equal %s",
			min: "%s cannot be less than %s",
			max: "%s cannot be greater than %s",
			range: "%s must be between %s and %s"
		},
		array: {
			len: "%s must be exactly %s in length",
			min: "%s cannot be less than %s in length",
			max: "%s cannot be greater than %s in length",
			range: "%s must be between %s and %s in length"
		},
		pattern: {
			mismatch: "%s value %s does not match pattern %s"
		},
		clone: function() {
			var t = JSON.parse(JSON.stringify(this));
			return t.clone = this.clone, t
		}
	}
}
var messages = newMessages(),
	Schema = function() {
		function e(n) {
			this.rules = null, this._messages = messages, this.define(n)
		}
		var t = e.prototype;
		return t.define = function(o) {
			var r = this;
			if (!o) throw new Error("Cannot configure a schema with no rules");
			if (typeof o != "object" || Array.isArray(o)) throw new Error("Rules must be an object");
			this.rules = {}, Object.keys(o).forEach(function(i) {
				var a = o[i];
				r.rules[i] = Array.isArray(a) ? a : [a]
			})
		}, t.messages = function(o) {
			return o && (this._messages = deepMerge(newMessages(), o)), this._messages
		}, t.validate = function(o, r, i) {
			var a = this;
			r === void 0 && (r = {}), i === void 0 && (i = function() {});
			var l = o,
				s = r,
				u = i;
			if (typeof s == "function" && (u = s, s = {}), !this.rules || Object.keys(this.rules).length === 0)
				return u && u(null, l), Promise.resolve(l);

			function d(m) {
				var C = [],
					b = {};

				function x(w) {
					if (Array.isArray(w)) {
						var y;
						C = (y = C).concat.apply(y, w)
					} else C.push(w)
				}
				for (var S = 0; S < m.length; S++) x(m[S]);
				C.length ? (b = convertFieldsError(C), u(C, b)) : u(null, l)
			}
			if (s.messages) {
				var f = this.messages();
				f === messages && (f = newMessages()), deepMerge(f, s.messages), s.messages = f
			} else s.messages = this.messages();
			var v = {},
				g = s.keys || Object.keys(this.rules);
			g.forEach(function(m) {
				var C = a.rules[m],
					b = l[m];
				C.forEach(function(x) {
					var S = x;
					typeof S.transform == "function" && (l === o && (l = _extends({}, l)), b = l[
							m] = S.transform(b)), typeof S == "function" ? S = {
							validator: S
						} : S = _extends({}, S), S.validator = a.getValidationMethod(S), S
						.validator && (S.field = m, S.fullField = S.fullField || m, S.type = a
							.getType(S), v[m] = v[m] || [], v[m].push({
								rule: S,
								value: b,
								source: l,
								field: m
							}))
				})
			});
			var p = {};
			return asyncMap(v, s, function(m, C) {
				var b = m.rule,
					x = (b.type === "object" || b.type === "array") && (typeof b.fields == "object" ||
						typeof b.defaultField == "object");
				x = x && (b.required || !b.required && m.value), b.field = m.field;

				function S(R, k) {
					return _extends({}, k, {
						fullField: b.fullField + "." + R,
						fullFields: b.fullFields ? [].concat(b.fullFields, [R]) : [R]
					})
				}

				function w(R) {
					R === void 0 && (R = []);
					var k = Array.isArray(R) ? R : [R];
					!s.suppressWarning && k.length && e.warning("async-validator:", k), k.length && b
						.message !== void 0 && (k = [].concat(b.message));
					var B = k.map(complementError(b, l));
					if (s.first && B.length) return p[b.field] = 1, C(B);
					if (!x) C(B);
					else {
						if (b.required && !m.value) return b.message !== void 0 ? B = [].concat(b.message)
							.map(complementError(b, l)) : s.error && (B = [s.error(b, format$1(s
								.messages.required, b.field))]), C(B);
						var T = {};
						b.defaultField && Object.keys(m.value).map(function($) {
							T[$] = b.defaultField
						}), T = _extends({}, T, m.rule.fields);
						var M = {};
						Object.keys(T).forEach(function($) {
							var _ = T[$],
								O = Array.isArray(_) ? _ : [_];
							M[$] = O.map(S.bind(null, $))
						});
						var E = new e(M);
						E.messages(s.messages), m.rule.options && (m.rule.options.messages = s.messages, m
							.rule.options.error = s.error), E.validate(m.value, m.rule.options || s,
							function($) {
								var _ = [];
								B && B.length && _.push.apply(_, B), $ && $.length && _.push.apply(_,
									$), C(_.length ? _ : null)
							})
					}
				}
				var y;
				if (b.asyncValidator) y = b.asyncValidator(b, m.value, w, m.source, s);
				else if (b.validator) {
					try {
						y = b.validator(b, m.value, w, m.source, s)
					} catch (R) {
						console.error == null || console.error(R), s.suppressValidatorError || setTimeout(
							function() {
								throw R
							}, 0), w(R.message)
					}
					y === !0 ? w() : y === !1 ? w(typeof b.message == "function" ? b.message(b.fullField ||
							b.field) : b.message || (b.fullField || b.field) + " fails") :
						y instanceof Array ? w(y) : y instanceof Error && w(y.message)
				}
				y && y.then && y.then(function() {
					return w()
				}, function(R) {
					return w(R)
				})
			}, function(m) {
				d(m)
			}, l)
		}, t.getType = function(o) {
			if (o.type === void 0 && o.pattern instanceof RegExp && (o.type = "pattern"), typeof o.validator !=
				"function" && o.type && !validators.hasOwnProperty(o.type)) throw new Error(format$1(
				"Unknown rule type %s", o.type));
			return o.type || "string"
		}, t.getValidationMethod = function(o) {
			if (typeof o.validator == "function") return o.validator;
			var r = Object.keys(o),
				i = r.indexOf("message");
			return i !== -1 && r.splice(i, 1), r.length === 1 && r[0] === "required" ? validators.required :
				validators[this.getType(o)] || void 0
		}, e
	}();
Schema.register = function(t, n) {
	if (typeof n != "function") throw new Error("Cannot register a validator by type, validator is not a function");
	validators[t] = n
};
Schema.warning = warning;
Schema.messages = messages;
Schema.validators = validators;

function formItemSize(e) {
	const t = inject(formInjectionKey, null);
	return {
		mergedSize: computed(() => e.size !== void 0 ? e.size : (t == null ? void 0 : t.props.size) !== void 0 ? t.props
			.size : "medium")
	}
}

function formItemMisc(e) {
	const t = inject(formInjectionKey, null),
		n = computed(() => {
			const {
				labelPlacement: p
			} = e;
			return p !== void 0 ? p : t != null && t.props.labelPlacement ? t.props.labelPlacement : "top"
		}),
		o = computed(() => n.value === "left" && (e.labelWidth === "auto" || (t == null ? void 0 : t.props
			.labelWidth) === "auto")),
		r = computed(() => {
			if (n.value === "top") return;
			const {
				labelWidth: p
			} = e;
			if (p !== void 0 && p !== "auto") return formatLength(p);
			if (o.value) {
				const m = t == null ? void 0 : t.maxChildLabelWidthRef.value;
				return m !== void 0 ? formatLength(m) : void 0
			}
			if ((t == null ? void 0 : t.props.labelWidth) !== void 0) return formatLength(t.props.labelWidth)
		}),
		i = computed(() => {
			const {
				labelAlign: p
			} = e;
			if (p) return p;
			if (t != null && t.props.labelAlign) return t.props.labelAlign
		}),
		a = computed(() => {
			var p;
			return [(p = e.labelProps) === null || p === void 0 ? void 0 : p.style, e.labelStyle, {
				width: r.value
			}]
		}),
		l = computed(() => {
			const {
				showRequireMark: p
			} = e;
			return p !== void 0 ? p : t == null ? void 0 : t.props.showRequireMark
		}),
		s = computed(() => {
			const {
				requireMarkPlacement: p
			} = e;
			return p !== void 0 ? p : (t == null ? void 0 : t.props.requireMarkPlacement) || "right"
		}),
		u = ref(!1),
		d = ref(!1),
		f = computed(() => {
			const {
				validationStatus: p
			} = e;
			if (p !== void 0) return p;
			if (u.value) return "error";
			if (d.value) return "warning"
		}),
		v = computed(() => {
			const {
				showFeedback: p
			} = e;
			return p !== void 0 ? p : (t == null ? void 0 : t.props.showFeedback) !== void 0 ? t.props
				.showFeedback : !0
		}),
		g = computed(() => {
			const {
				showLabel: p
			} = e;
			return p !== void 0 ? p : (t == null ? void 0 : t.props.showLabel) !== void 0 ? t.props.showLabel : !0
		});
	return {
		validationErrored: u,
		validationWarned: d,
		mergedLabelStyle: a,
		mergedLabelPlacement: n,
		mergedLabelAlign: i,
		mergedShowRequireMark: l,
		mergedRequireMarkPlacement: s,
		mergedValidationStatus: f,
		mergedShowFeedback: v,
		mergedShowLabel: g,
		isAutoLabelWidth: o
	}
}

function formItemRule(e) {
	const t = inject(formInjectionKey, null),
		n = computed(() => {
			const {
				rulePath: a
			} = e;
			if (a !== void 0) return a;
			const {
				path: l
			} = e;
			if (l !== void 0) return l
		}),
		o = computed(() => {
			const a = [],
				{
					rule: l
				} = e;
			if (l !== void 0 && (Array.isArray(l) ? a.push(...l) : a.push(l)), t) {
				const {
					rules: s
				} = t.props, {
					value: u
				} = n;
				if (s !== void 0 && u !== void 0) {
					const d = get(s, u);
					d !== void 0 && (Array.isArray(d) ? a.push(...d) : a.push(d))
				}
			}
			return a
		}),
		r = computed(() => o.value.some(a => a.required)),
		i = computed(() => r.value || e.required);
	return {
		mergedRules: o,
		mergedRequired: i
	}
}
const {
	cubicBezierEaseInOut
} = commonVariables;

function fadeDownTransition({
	name: e = "fade-down",
	fromOffset: t = "-4px",
	enterDuration: n = ".3s",
	leaveDuration: o = ".3s",
	enterCubicBezier: r = cubicBezierEaseInOut,
	leaveCubicBezier: i = cubicBezierEaseInOut
} = {}) {
	return [c$1(`&.${e}-transition-enter-from, &.${e}-transition-leave-to`, {
		opacity: 0,
		transform: `translateY(${t})`
	}), c$1(`&.${e}-transition-enter-to, &.${e}-transition-leave-from`, {
		opacity: 1,
		transform: "translateY(0)"
	}), c$1(`&.${e}-transition-leave-active`, {
		transition: `opacity ${o} ${i}, transform ${o} ${i}`
	}), c$1(`&.${e}-transition-enter-active`, {
		transition: `opacity ${n} ${r}, transform ${n} ${r}`
	})]
}
const style$c = cB("form-item", `
 display: grid;
 line-height: var(--n-line-height);
`, [cB("form-item-label", `
 grid-area: label;
 align-items: center;
 line-height: 1.25;
 text-align: var(--n-label-text-align);
 font-size: var(--n-label-font-size);
 min-height: var(--n-label-height);
 padding: var(--n-label-padding);
 color: var(--n-label-text-color);
 transition: color .3s var(--n-bezier);
 box-sizing: border-box;
 font-weight: var(--n-label-font-weight);
 `, [cE("asterisk", `
 white-space: nowrap;
 user-select: none;
 -webkit-user-select: none;
 color: var(--n-asterisk-color);
 transition: color .3s var(--n-bezier);
 `), cE("asterisk-placeholder", `
 grid-area: mark;
 user-select: none;
 -webkit-user-select: none;
 visibility: hidden; 
 `)]), cB("form-item-blank", `
 grid-area: blank;
 min-height: var(--n-blank-height);
 `), cM("auto-label-width", [cB("form-item-label", "white-space: nowrap;")]), cM("left-labelled", `
 grid-template-areas:
 "label blank"
 "label feedback";
 grid-template-columns: auto minmax(0, 1fr);
 grid-template-rows: auto 1fr;
 align-items: flex-start;
 `, [cB("form-item-label", `
 display: grid;
 grid-template-columns: 1fr auto;
 min-height: var(--n-blank-height);
 height: auto;
 box-sizing: border-box;
 flex-shrink: 0;
 flex-grow: 0;
 `, [cM("reverse-columns-space", `
 grid-template-columns: auto 1fr;
 `), cM("left-mark", `
 grid-template-areas:
 "mark text"
 ". text";
 `), cM("right-mark", `
 grid-template-areas: 
 "text mark"
 "text .";
 `), cM("right-hanging-mark", `
 grid-template-areas: 
 "text mark"
 "text .";
 `), cE("text", `
 grid-area: text; 
 `), cE("asterisk", `
 grid-area: mark; 
 align-self: end;
 `)])]), cM("top-labelled", `
 grid-template-areas:
 "label"
 "blank"
 "feedback";
 grid-template-rows: minmax(var(--n-label-height), auto) 1fr;
 grid-template-columns: minmax(0, 100%);
 `, [cM("no-label", `
 grid-template-areas:
 "blank"
 "feedback";
 grid-template-rows: 1fr;
 `), cB("form-item-label", `
 display: flex;
 align-items: flex-start;
 justify-content: var(--n-label-text-align);
 `)]), cB("form-item-blank", `
 box-sizing: border-box;
 display: flex;
 align-items: center;
 position: relative;
 `), cB("form-item-feedback-wrapper", `
 grid-area: feedback;
 box-sizing: border-box;
 min-height: var(--n-feedback-height);
 font-size: var(--n-feedback-font-size);
 line-height: 1.25;
 transform-origin: top left;
 `, [c$1("&:not(:empty)", `
 padding: var(--n-feedback-padding);
 `), cB("form-item-feedback", {
	transition: "color .3s var(--n-bezier)",
	color: "var(--n-feedback-text-color)"
}, [cM("warning", {
	color: "var(--n-feedback-text-color-warning)"
}), cM("error", {
	color: "var(--n-feedback-text-color-error)"
}), fadeDownTransition({
	fromOffset: "-3px",
	enterDuration: ".3s",
	leaveDuration: ".2s"
})])])]);
var __awaiter$3 = globalThis && globalThis.__awaiter || function(e, t, n, o) {
	function r(i) {
		return i instanceof n ? i : new n(function(a) {
			a(i)
		})
	}
	return new(n || (n = Promise))(function(i, a) {
		function l(d) {
			try {
				u(o.next(d))
			} catch (f) {
				a(f)
			}
		}

		function s(d) {
			try {
				u(o.throw(d))
			} catch (f) {
				a(f)
			}
		}

		function u(d) {
			d.done ? i(d.value) : r(d.value).then(l, s)
		}
		u((o = o.apply(e, t || [])).next())
	})
};
const formItemProps = Object.assign(Object.assign({}, useTheme.props), {
	label: String,
	labelWidth: [Number, String],
	labelStyle: [String, Object],
	labelAlign: String,
	labelPlacement: String,
	path: String,
	first: Boolean,
	rulePath: String,
	required: Boolean,
	showRequireMark: {
		type: Boolean,
		default: void 0
	},
	requireMarkPlacement: String,
	showFeedback: {
		type: Boolean,
		default: void 0
	},
	rule: [Object, Array],
	size: String,
	ignorePathChange: Boolean,
	validationStatus: String,
	feedback: String,
	feedbackClass: String,
	feedbackStyle: [String, Object],
	showLabel: {
		type: Boolean,
		default: void 0
	},
	labelProps: Object
});

function wrapValidator(e, t) {
	return (...n) => {
		try {
			const o = e(...n);
			return !t && (typeof o == "boolean" || o instanceof Error || Array.isArray(o)) || o != null && o.then ?
				o : (o === void 0 || warn("form-item/validate",
					`You return a ${typeof o} typed value in the validator method, which is not recommended. Please use ` +
					(t ? "`Promise`" : "`boolean`, `Error` or `Promise`") + " typed value instead."), !0)
		} catch (o) {
			warn("form-item/validate",
				"An error is catched in the validation, so the validation won't be done. Your callback in `validate` method of `n-form` or `n-form-item` won't be called in this validation."
				), console.error(o);
			return
		}
	}
}
const NFormItem = defineComponent({
		name: "FormItem",
		props: formItemProps,
		setup(e) {
			useInjectionInstanceCollection(formItemInstsInjectionKey, "formItems", toRef(e, "path"));
			const {
				mergedClsPrefixRef: t,
				inlineThemeDisabled: n
			} = useConfig(e), o = inject(formInjectionKey, null), r = formItemSize(e), i = formItemMisc(e), {
				validationErrored: a,
				validationWarned: l
			} = i, {
				mergedRequired: s,
				mergedRules: u
			} = formItemRule(e), {
				mergedSize: d
			} = r, {
				mergedLabelPlacement: f,
				mergedLabelAlign: v,
				mergedRequireMarkPlacement: g
			} = i, p = ref([]), m = ref(createId()), C = o ? toRef(o.props, "disabled") : ref(!1), b = useTheme(
				"Form", "-form-item", style$c, formLight, e, t);
			watch(toRef(e, "path"), () => {
				e.ignorePathChange || x()
			});

			function x() {
				p.value = [], a.value = !1, l.value = !1, e.feedback && (m.value = createId())
			}

			function S() {
				B("blur")
			}

			function w() {
				B("change")
			}

			function y() {
				B("focus")
			}

			function R() {
				B("input")
			}

			function k(O, N) {
				return __awaiter$3(this, void 0, void 0, function*() {
					let D, F, j, J;
					return typeof O == "string" ? (D = O, F = N) : O !== null && typeof O == "object" && (
						D = O.trigger, F = O.callback, j = O.shouldRuleBeApplied, J = O.options),
					yield new Promise((Q, re) => {
							B(D, j, J).then(({
								valid: L,
								errors: W,
								warnings: ee
							}) => {
								L ? (F && F(void 0, {
									warnings: ee
								}), Q({
									warnings: ee
								})) : (F && F(W, {
									warnings: ee
								}), re(W))
							})
						})
				})
			}
			const B = (...O) => __awaiter$3(this, [...O], void 0, function*(N = null, D = () => !0, F = {
				suppressWarning: !0
			}) {
				const {
					path: j
				} = e;
				F ? F.first || (F.first = e.first) : F = {};
				const {
					value: J
				} = u, Q = o ? get(o.props.model, j || "") : void 0, re = {}, L = {}, W = (N ? J.filter(
						ae => Array.isArray(ae.trigger) ? ae.trigger.includes(N) : ae.trigger === N) :
					J).filter(D).map((ae, H) => {
					const q = Object.assign({}, ae);
					if (q.validator && (q.validator = wrapValidator(q.validator, !1)), q
						.asyncValidator && (q.asyncValidator = wrapValidator(q.asyncValidator, !0)),
						q.renderMessage) {
						const A = `__renderMessage__${H}`;
						L[A] = q.message, q.message = A, re[A] = q.renderMessage
					}
					return q
				}), ee = W.filter(ae => ae.level !== "warning"), ie = W.filter(ae => ae.level ===
					"warning"), pe = j ?? "__n_no_path__", oe = new Schema({
					[pe]: ee
				}), me = new Schema({
					[pe]: ie
				}), {
					validateMessages: ve
				} = (o == null ? void 0 : o.props) || {};
				ve && (oe.messages(ve), me.messages(ve));
				const Se = ae => {
						p.value = ae.map(H => {
							const q = (H == null ? void 0 : H.message) || "";
							return {
								key: q,
								render: () => q.startsWith("__renderMessage__") ? re[q]() : q
							}
						}), ae.forEach(H => {
							var q;
							!((q = H.message) === null || q === void 0) && q.startsWith(
								"__renderMessage__") && (H.message = L[H.message])
						})
					},
					ge = {
						valid: !0,
						errors: void 0,
						warnings: void 0
					};
				if (ee.length) {
					const ae = yield new Promise(H => {
						oe.validate({
							[pe]: Q
						}, F, H)
					});
					ae != null && ae.length && (a.value = !0, ge.valid = !1, ge.errors = ae, Se(ae))
				}
				if (ie.length && !ge.errors) {
					const ae = yield new Promise(H => {
						me.validate({
							[pe]: Q
						}, F, H)
					});
					ae != null && ae.length && (Se(ae), l.value = !0, ge.warnings = ae)
				}
				return ee.length + ie.length > 0 && !ge.errors && !ge.warnings && x(), ge
			});
			provide(formItemInjectionKey, {
				path: toRef(e, "path"),
				disabled: C,
				mergedSize: r.mergedSize,
				mergedValidationStatus: i.mergedValidationStatus,
				restoreValidation: x,
				handleContentBlur: S,
				handleContentChange: w,
				handleContentFocus: y,
				handleContentInput: R
			});
			const T = {
					validate: k,
					restoreValidation: x,
					internalValidate: B
				},
				M = ref(null);
			onMounted(() => {
				if (!i.isAutoLabelWidth.value) return;
				const O = M.value;
				if (O !== null) {
					const N = O.style.whiteSpace;
					O.style.whiteSpace = "nowrap", O.style.width = "", o == null || o
						.deriveMaxChildLabelWidth(Number(getComputedStyle(O).width.slice(0, -2))), O.style
						.whiteSpace = N
				}
			});
			const E = computed(() => {
					var O;
					const {
						value: N
					} = d, {
						value: D
					} = f, F = D === "top" ? "vertical" : "horizontal", {
						common: {
							cubicBezierEaseInOut: j
						},
						self: {
							labelTextColor: J,
							asteriskColor: Q,
							lineHeight: re,
							feedbackTextColor: L,
							feedbackTextColorWarning: W,
							feedbackTextColorError: ee,
							feedbackPadding: ie,
							labelFontWeight: pe,
							[createKey("labelHeight", N)]: oe,
							[createKey("blankHeight", N)]: me,
							[createKey("feedbackFontSize", N)]: ve,
							[createKey("feedbackHeight", N)]: Se,
							[createKey("labelPadding", F)]: ge,
							[createKey("labelTextAlign", F)]: ae,
							[createKey(createKey("labelFontSize", D), N)]: H
						}
					} = b.value;
					let q = (O = v.value) !== null && O !== void 0 ? O : ae;
					return D === "top" && (q = q === "right" ? "flex-end" : "flex-start"), {
						"--n-bezier": j,
						"--n-line-height": re,
						"--n-blank-height": me,
						"--n-label-font-size": H,
						"--n-label-text-align": q,
						"--n-label-height": oe,
						"--n-label-padding": ge,
						"--n-label-font-weight": pe,
						"--n-asterisk-color": Q,
						"--n-label-text-color": J,
						"--n-feedback-padding": ie,
						"--n-feedback-font-size": ve,
						"--n-feedback-height": Se,
						"--n-feedback-text-color": L,
						"--n-feedback-text-color-warning": W,
						"--n-feedback-text-color-error": ee
					}
				}),
				$ = n ? useThemeClass("form-item", computed(() => {
					var O;
					return `${d.value[0]}${f.value[0]}${((O=v.value)===null||O===void 0?void 0:O[0])||""}`
				}), E, e) : void 0,
				_ = computed(() => f.value === "left" && g.value === "left" && v.value === "left");
			return Object.assign(Object.assign(Object.assign(Object.assign({
				labelElementRef: M,
				mergedClsPrefix: t,
				mergedRequired: s,
				feedbackId: m,
				renderExplains: p,
				reverseColSpace: _
			}, i), r), T), {
				cssVars: n ? void 0 : E,
				themeClass: $ == null ? void 0 : $.themeClass,
				onRender: $ == null ? void 0 : $.onRender
			})
		},
		render() {
			const {
				$slots: e,
				mergedClsPrefix: t,
				mergedShowLabel: n,
				mergedShowRequireMark: o,
				mergedRequireMarkPlacement: r,
				onRender: i
			} = this, a = o !== void 0 ? o : this.mergedRequired;
			i == null || i();
			const l = () => {
				const s = this.$slots.label ? this.$slots.label() : this.label;
				if (!s) return null;
				const u = h("span", {
						class: `${t}-form-item-label__text`
					}, s),
					d = a ? h("span", {
						class: `${t}-form-item-label__asterisk`
					}, r !== "left" ? " *" : "* ") : r === "right-hanging" && h("span", {
						class: `${t}-form-item-label__asterisk-placeholder`
					}, " *"),
					{
						labelProps: f
					} = this;
				return h("label", Object.assign({}, f, {
					class: [f == null ? void 0 : f.class, `${t}-form-item-label`,
						`${t}-form-item-label--${r}-mark`, this.reverseColSpace &&
						`${t}-form-item-label--reverse-columns-space`
					],
					style: this.mergedLabelStyle,
					ref: "labelElementRef"
				}), r === "left" ? [d, u] : [u, d])
			};
			return h("div", {
				class: [`${t}-form-item`, this.themeClass, `${t}-form-item--${this.mergedSize}-size`,
					`${t}-form-item--${this.mergedLabelPlacement}-labelled`, this.isAutoLabelWidth &&
					`${t}-form-item--auto-label-width`, !n && `${t}-form-item--no-label`
				],
				style: this.cssVars
			}, n && l(), h("div", {
				class: [`${t}-form-item-blank`, this.mergedValidationStatus &&
					`${t}-form-item-blank--${this.mergedValidationStatus}`
				]
			}, e), this.mergedShowFeedback ? h("div", {
				key: this.feedbackId,
				style: this.feedbackStyle,
				class: [`${t}-form-item-feedback-wrapper`, this.feedbackClass]
			}, h(Transition, {
				name: "fade-down-transition",
				mode: "out-in"
			}, {
				default: () => {
					const {
						mergedValidationStatus: s
					} = this;
					return resolveWrappedSlot(e.feedback, u => {
						var d;
						const {
							feedback: f
						} = this, v = u || f ? h("div", {
								key: "__feedback__",
								class: `${t}-form-item-feedback__line`
							}, u || f) : this.renderExplains.length ? (d = this
								.renderExplains) === null || d === void 0 ? void 0 : d
							.map(({
								key: g,
								render: p
							}) => h("div", {
								key: g,
								class: `${t}-form-item-feedback__line`
							}, p())) : null;
						return v ? s === "warning" ? h("div", {
							key: "controlled-warning",
							class: `${t}-form-item-feedback ${t}-form-item-feedback--warning`
						}, v) : s === "error" ? h("div", {
							key: "controlled-error",
							class: `${t}-form-item-feedback ${t}-form-item-feedback--error`
						}, v) : s === "success" ? h("div", {
							key: "controlled-success",
							class: `${t}-form-item-feedback ${t}-form-item-feedback--success`
						}, v) : h("div", {
							key: "controlled-default",
							class: `${t}-form-item-feedback`
						}, v) : null
					})
				}
			})) : null)
		}
	}),
	defaultSpan$1 = 1,
	gridInjectionKey = createInjectionKey("n-grid"),
	defaultSpan = 1,
	gridItemProps = {
		span: {
			type: [Number, String],
			default: defaultSpan
		},
		offset: {
			type: [Number, String],
			default: 0
		},
		suffix: Boolean,
		privateOffset: Number,
		privateSpan: Number,
		privateColStart: Number,
		privateShow: {
			type: Boolean,
			default: !0
		}
	},
	NGridItem = defineComponent({
		__GRID_ITEM__: !0,
		name: "GridItem",
		alias: ["Gi"],
		props: gridItemProps,
		setup() {
			const {
				isSsrRef: e,
				xGapRef: t,
				itemStyleRef: n,
				overflowRef: o,
				layoutShiftDisabledRef: r
			} = inject(gridInjectionKey), i = getCurrentInstance();
			return {
				overflow: o,
				itemStyle: n,
				layoutShiftDisabled: r,
				mergedXGap: computed(() => pxfy(t.value || 0)),
				deriveStyle: () => {
					e.value;
					const {
						privateSpan: a = defaultSpan,
						privateShow: l = !0,
						privateColStart: s = void 0,
						privateOffset: u = 0
					} = i.vnode.props, {
						value: d
					} = t, f = pxfy(d || 0);
					return {
						display: l ? "" : "none",
						gridColumn: `${s??`span ${a}`} / span ${a}`,
						marginLeft: u ? `calc((100% - (${a} - 1) * ${f}) / ${a} * ${u} + ${f} * ${u})` : ""
					}
				}
			}
		},
		render() {
			var e, t;
			if (this.layoutShiftDisabled) {
				const {
					span: n,
					offset: o,
					mergedXGap: r
				} = this;
				return h("div", {
					style: {
						gridColumn: `span ${n} / span ${n}`,
						marginLeft: o ? `calc((100% - (${n} - 1) * ${r}) / ${n} * ${o} + ${r} * ${o})` : ""
					}
				}, this.$slots)
			}
			return h("div", {
				style: [this.itemStyle, this.deriveStyle()]
			}, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e, {
				overflow: this.overflow
			}))
		}
	}),
	defaultBreakpoints = {
		xs: 0,
		s: 640,
		m: 1024,
		l: 1280,
		xl: 1536,
		xxl: 1920
	},
	defaultCols = 24,
	SSR_ATTR_NAME = "__ssr__",
	gridProps = {
		layoutShiftDisabled: Boolean,
		responsive: {
			type: [String, Boolean],
			default: "self"
		},
		cols: {
			type: [Number, String],
			default: defaultCols
		},
		itemResponsive: Boolean,
		collapsed: Boolean,
		collapsedRows: {
			type: Number,
			default: 1
		},
		itemStyle: [Object, String],
		xGap: {
			type: [Number, String],
			default: 0
		},
		yGap: {
			type: [Number, String],
			default: 0
		}
	},
	NGrid = defineComponent({
		name: "Grid",
		inheritAttrs: !1,
		props: gridProps,
		setup(e) {
			const {
				mergedClsPrefixRef: t,
				mergedBreakpointsRef: n
			} = useConfig(e), o = /^\d+$/, r = ref(void 0), i = useBreakpoints((n == null ? void 0 : n.value) ||
				defaultBreakpoints), a = useMemo(() => !!(e.itemResponsive || !o.test(e.cols.toString()) || !o
				.test(e.xGap.toString()) || !o.test(e.yGap.toString()))), l = computed(() => {
				if (a.value) return e.responsive === "self" ? r.value : i.value
			}), s = useMemo(() => {
				var b;
				return (b = Number(parseResponsivePropValue(e.cols.toString(), l.value))) !== null && b !==
					void 0 ? b : defaultCols
			}), u = useMemo(() => parseResponsivePropValue(e.xGap.toString(), l.value)), d = useMemo(() =>
				parseResponsivePropValue(e.yGap.toString(), l.value)), f = b => {
				r.value = b.contentRect.width
			}, v = b => {
				beforeNextFrameOnce(f, b)
			}, g = ref(!1), p = computed(() => {
				if (e.responsive === "self") return v
			}), m = ref(!1), C = ref();
			return onMounted(() => {
				const {
					value: b
				} = C;
				b && b.hasAttribute(SSR_ATTR_NAME) && (b.removeAttribute(SSR_ATTR_NAME), m.value = !0)
			}), provide(gridInjectionKey, {
				layoutShiftDisabledRef: toRef(e, "layoutShiftDisabled"),
				isSsrRef: m,
				itemStyleRef: toRef(e, "itemStyle"),
				xGapRef: u,
				overflowRef: g
			}), {
				isSsr: !isBrowser$1,
				contentEl: C,
				mergedClsPrefix: t,
				style: computed(() => e.layoutShiftDisabled ? {
					width: "100%",
					display: "grid",
					gridTemplateColumns: `repeat(${e.cols}, minmax(0, 1fr))`,
					columnGap: pxfy(e.xGap),
					rowGap: pxfy(e.yGap)
				} : {
					width: "100%",
					display: "grid",
					gridTemplateColumns: `repeat(${s.value}, minmax(0, 1fr))`,
					columnGap: pxfy(u.value),
					rowGap: pxfy(d.value)
				}),
				isResponsive: a,
				responsiveQuery: l,
				responsiveCols: s,
				handleResize: p,
				overflow: g
			}
		},
		render() {
			if (this.layoutShiftDisabled) return h("div", mergeProps({
				ref: "contentEl",
				class: `${this.mergedClsPrefix}-grid`,
				style: this.style
			}, this.$attrs), this.$slots);
			const e = () => {
				var t, n, o, r, i, a, l;
				this.overflow = !1;
				const s = flatten$1(getSlot(this)),
					u = [],
					{
						collapsed: d,
						collapsedRows: f,
						responsiveCols: v,
						responsiveQuery: g
					} = this;
				s.forEach(x => {
					var S, w, y, R, k;
					if (((S = x == null ? void 0 : x.type) === null || S === void 0 ? void 0 : S
							.__GRID_ITEM__) !== !0) return;
					if (isNodeVShowFalse(x)) {
						const M = cloneVNode(x);
						M.props ? M.props.privateShow = !1 : M.props = {
							privateShow: !1
						}, u.push({
							child: M,
							rawChildSpan: 0
						});
						return
					}
					x.dirs = ((w = x.dirs) === null || w === void 0 ? void 0 : w.filter(({
						dir: M
					}) => M !== vShow)) || null, ((y = x.dirs) === null || y === void 0 ? void 0 : y
						.length) === 0 && (x.dirs = null);
					const B = cloneVNode(x),
						T = Number((k = parseResponsivePropValue((R = B.props) === null || R ===
								void 0 ? void 0 : R.span, g)) !== null && k !== void 0 ? k :
							defaultSpan$1);
					T !== 0 && u.push({
						child: B,
						rawChildSpan: T
					})
				});
				let p = 0;
				const m = (t = u[u.length - 1]) === null || t === void 0 ? void 0 : t.child;
				if (m != null && m.props) {
					const x = (n = m.props) === null || n === void 0 ? void 0 : n.suffix;
					x !== void 0 && x !== !1 && (p = Number((r = parseResponsivePropValue((o = m.props) ===
								null || o === void 0 ? void 0 : o.span, g)) !== null && r !== void 0 ? r :
							defaultSpan$1), m.props.privateSpan = p, m.props.privateColStart = v + 1 - p, m
						.props.privateShow = (i = m.props.privateShow) !== null && i !== void 0 ? i : !0)
				}
				let C = 0,
					b = !1;
				for (const {
						child: x,
						rawChildSpan: S
					}
					of u) {
					if (b && (this.overflow = !0), !b) {
						const w = Number((l = parseResponsivePropValue((a = x.props) === null || a === void 0 ?
								void 0 : a.offset, g)) !== null && l !== void 0 ? l : 0),
							y = Math.min(S + w, v);
						if (x.props ? (x.props.privateSpan = y, x.props.privateOffset = w) : x.props = {
								privateSpan: y,
								privateOffset: w
							}, d) {
							const R = C % v;
							y + R > v && (C += v - R), y + C + p > f * v ? b = !0 : C += y
						}
					}
					b && (x.props ? x.props.privateShow !== !0 && (x.props.privateShow = !1) : x.props = {
						privateShow: !1
					})
				}
				return h("div", mergeProps({
					ref: "contentEl",
					class: `${this.mergedClsPrefix}-grid`,
					style: this.style,
					[SSR_ATTR_NAME]: this.isSsr || void 0
				}, this.$attrs), u.map(({
					child: x
				}) => x))
			};
			return this.isResponsive && this.responsive === "self" ? h(VResizeObserver, {
				onResize: this.handleResize
			}, {
				default: e
			}) : e()
		}
	}),
	imagePreviewSharedProps = Object.assign(Object.assign({}, useTheme.props), {
		onPreviewPrev: Function,
		onPreviewNext: Function,
		showToolbar: {
			type: Boolean,
			default: !0
		},
		showToolbarTooltip: Boolean,
		renderToolbar: Function
	}),
	imageContextKey = createInjectionKey("n-image"),
	prevIcon = h("svg", {
		viewBox: "0 0 20 20",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, h("path", {
		d: "M6 5C5.75454 5 5.55039 5.17688 5.50806 5.41012L5.5 5.5V14.5C5.5 14.7761 5.72386 15 6 15C6.24546 15 6.44961 14.8231 6.49194 14.5899L6.5 14.5V5.5C6.5 5.22386 6.27614 5 6 5ZM13.8536 5.14645C13.68 4.97288 13.4106 4.9536 13.2157 5.08859L13.1464 5.14645L8.64645 9.64645C8.47288 9.82001 8.4536 10.0894 8.58859 10.2843L8.64645 10.3536L13.1464 14.8536C13.3417 15.0488 13.6583 15.0488 13.8536 14.8536C14.0271 14.68 14.0464 14.4106 13.9114 14.2157L13.8536 14.1464L9.70711 10L13.8536 5.85355C14.0488 5.65829 14.0488 5.34171 13.8536 5.14645Z",
		fill: "currentColor"
	})),
	nextIcon = h("svg", {
		viewBox: "0 0 20 20",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, h("path", {
		d: "M13.5 5C13.7455 5 13.9496 5.17688 13.9919 5.41012L14 5.5V14.5C14 14.7761 13.7761 15 13.5 15C13.2545 15 13.0504 14.8231 13.0081 14.5899L13 14.5V5.5C13 5.22386 13.2239 5 13.5 5ZM5.64645 5.14645C5.82001 4.97288 6.08944 4.9536 6.28431 5.08859L6.35355 5.14645L10.8536 9.64645C11.0271 9.82001 11.0464 10.0894 10.9114 10.2843L10.8536 10.3536L6.35355 14.8536C6.15829 15.0488 5.84171 15.0488 5.64645 14.8536C5.47288 14.68 5.4536 14.4106 5.58859 14.2157L5.64645 14.1464L9.79289 10L5.64645 5.85355C5.45118 5.65829 5.45118 5.34171 5.64645 5.14645Z",
		fill: "currentColor"
	})),
	closeIcon = h("svg", {
		viewBox: "0 0 20 20",
		fill: "none",
		xmlns: "http://www.w3.org/2000/svg"
	}, h("path", {
		d: "M4.089 4.216l.057-.07a.5.5 0 0 1 .638-.057l.07.057L10 9.293l5.146-5.147a.5.5 0 0 1 .638-.057l.07.057a.5.5 0 0 1 .057.638l-.057.07L10.707 10l5.147 5.146a.5.5 0 0 1 .057.638l-.057.07a.5.5 0 0 1-.638.057l-.07-.057L10 10.707l-5.146 5.147a.5.5 0 0 1-.638.057l-.07-.057a.5.5 0 0 1-.057-.638l.057-.07L9.293 10L4.146 4.854a.5.5 0 0 1-.057-.638l.057-.07l-.057.07z",
		fill: "currentColor"
	})),
	style$b = c$1([c$1("body >", [cB("image-container", "position: fixed;")]), cB("image-preview-container", `
 position: fixed;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 `), cB("image-preview-overlay", `
 z-index: -1;
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 background: rgba(0, 0, 0, .3);
 `, [fadeInTransition()]), cB("image-preview-toolbar", `
 z-index: 1;
 position: absolute;
 left: 50%;
 transform: translateX(-50%);
 border-radius: var(--n-toolbar-border-radius);
 height: 48px;
 bottom: 40px;
 padding: 0 12px;
 background: var(--n-toolbar-color);
 box-shadow: var(--n-toolbar-box-shadow);
 color: var(--n-toolbar-icon-color);
 transition: color .3s var(--n-bezier);
 display: flex;
 align-items: center;
 `, [cB("base-icon", `
 padding: 0 8px;
 font-size: 28px;
 cursor: pointer;
 `), fadeInTransition()]), cB("image-preview-wrapper", `
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 pointer-events: none;
 `, [fadeInScaleUpTransition()]), cB("image-preview", `
 user-select: none;
 -webkit-user-select: none;
 pointer-events: all;
 margin: auto;
 max-height: calc(100vh - 32px);
 max-width: calc(100vw - 32px);
 transition: transform .3s var(--n-bezier);
 `), cB("image", `
 display: inline-flex;
 max-height: 100%;
 max-width: 100%;
 `, [cNotM("preview-disabled", `
 cursor: pointer;
 `), c$1("img", `
 border-radius: inherit;
 `)])]),
	BLEEDING = 32,
	NImagePreview = defineComponent({
		name: "ImagePreview",
		props: Object.assign(Object.assign({}, imagePreviewSharedProps), {
			onNext: Function,
			onPrev: Function,
			clsPrefix: {
				type: String,
				required: !0
			}
		}),
		setup(e) {
			const t = useTheme("Image", "-image", style$b, imageLight, e, toRef(e, "clsPrefix"));
			let n = null;
			const o = ref(null),
				r = ref(null),
				i = ref(void 0),
				a = ref(!1),
				l = ref(!1),
				{
					localeRef: s
				} = useLocale("Image");

			function u() {
				const {
					value: H
				} = r;
				if (!n || !H) return;
				const {
					style: q
				} = H, A = n.getBoundingClientRect(), Y = A.left + A.width / 2, I = A.top + A.height / 2;
				q.transformOrigin = `${Y}px ${I}px`
			}

			function d(H) {
				var q, A;
				switch (H.key) {
					case " ":
						H.preventDefault();
						break;
					case "ArrowLeft":
						(q = e.onPrev) === null || q === void 0 || q.call(e);
						break;
					case "ArrowRight":
						(A = e.onNext) === null || A === void 0 || A.call(e);
						break;
					case "Escape":
						pe();
						break
				}
			}
			watch(a, H => {
				H ? on("keydown", document, d) : off("keydown", document, d)
			}), onBeforeUnmount(() => {
				off("keydown", document, d)
			});
			let f = 0,
				v = 0,
				g = 0,
				p = 0,
				m = 0,
				C = 0,
				b = 0,
				x = 0,
				S = !1;

			function w(H) {
				const {
					clientX: q,
					clientY: A
				} = H;
				g = q - f, p = A - v, beforeNextFrameOnce(ie)
			}

			function y(H) {
				const {
					mouseUpClientX: q,
					mouseUpClientY: A,
					mouseDownClientX: Y,
					mouseDownClientY: I
				} = H, U = Y - q, G = I - A, ne = `vertical${G>0?"Top":"Bottom"}`, se =
					`horizontal${U>0?"Left":"Right"}`;
				return {
					moveVerticalDirection: ne,
					moveHorizontalDirection: se,
					deltaHorizontal: U,
					deltaVertical: G
				}
			}

			function R(H) {
				const {
					value: q
				} = o;
				if (!q) return {
					offsetX: 0,
					offsetY: 0
				};
				const A = q.getBoundingClientRect(),
					{
						moveVerticalDirection: Y,
						moveHorizontalDirection: I,
						deltaHorizontal: U,
						deltaVertical: G
					} = H || {};
				let ne = 0,
					se = 0;
				return A.width <= window.innerWidth ? ne = 0 : A.left > 0 ? ne = (A.width - window.innerWidth) / 2 :
					A.right < window.innerWidth ? ne = -(A.width - window.innerWidth) / 2 : I ===
					"horizontalRight" ? ne = Math.min((A.width - window.innerWidth) / 2, m - (U ?? 0)) : ne = Math
					.max(-((A.width - window.innerWidth) / 2), m - (U ?? 0)), A.height <= window.innerHeight ? se =
					0 : A.top > 0 ? se = (A.height - window.innerHeight) / 2 : A.bottom < window.innerHeight ?
					se = -(A.height - window.innerHeight) / 2 : Y === "verticalBottom" ? se = Math.min((A.height -
						window.innerHeight) / 2, C - (G ?? 0)) : se = Math.max(-((A.height - window.innerHeight) /
						2), C - (G ?? 0)), {
						offsetX: ne,
						offsetY: se
					}
			}

			function k(H) {
				off("mousemove", document, w), off("mouseup", document, k);
				const {
					clientX: q,
					clientY: A
				} = H;
				S = !1;
				const Y = y({
						mouseUpClientX: q,
						mouseUpClientY: A,
						mouseDownClientX: b,
						mouseDownClientY: x
					}),
					I = R(Y);
				g = I.offsetX, p = I.offsetY, ie()
			}
			const B = inject(imageContextKey, null);

			function T(H) {
				var q, A;
				if ((A = (q = B == null ? void 0 : B.previewedImgPropsRef.value) === null || q === void 0 ? void 0 :
						q.onMousedown) === null || A === void 0 || A.call(q, H), H.button !== 0) return;
				const {
					clientX: Y,
					clientY: I
				} = H;
				S = !0, f = Y - g, v = I - p, m = g, C = p, b = Y, x = I, ie(), on("mousemove", document, w), on(
					"mouseup", document, k)
			}

			function M(H) {
				var q, A;
				(A = (q = B == null ? void 0 : B.previewedImgPropsRef.value) === null || q === void 0 ? void 0 : q
					.onDblclick) === null || A === void 0 || A.call(q, H);
				const Y = re();
				_ = _ === Y ? 1 : Y, ie()
			}
			const E = 1.5;
			let $ = 0,
				_ = 1,
				O = 0;

			function N() {
				_ = 1, $ = 0
			}

			function D() {
				var H;
				N(), O = 0, (H = e.onPrev) === null || H === void 0 || H.call(e)
			}

			function F() {
				var H;
				N(), O = 0, (H = e.onNext) === null || H === void 0 || H.call(e)
			}

			function j() {
				O -= 90, ie()
			}

			function J() {
				O += 90, ie()
			}

			function Q() {
				const {
					value: H
				} = o;
				if (!H) return 1;
				const {
					innerWidth: q,
					innerHeight: A
				} = window, Y = Math.max(1, H.naturalHeight / (A - BLEEDING)), I = Math.max(1, H.naturalWidth / (q -
					BLEEDING));
				return Math.max(3, Y * 2, I * 2)
			}

			function re() {
				const {
					value: H
				} = o;
				if (!H) return 1;
				const {
					innerWidth: q,
					innerHeight: A
				} = window, Y = H.naturalHeight / (A - BLEEDING), I = H.naturalWidth / (q - BLEEDING);
				return Y < 1 && I < 1 ? 1 : Math.max(Y, I)
			}

			function L() {
				const H = Q();
				_ < H && ($ += 1, _ = Math.min(H, Math.pow(E, $)), ie())
			}

			function W() {
				if (_ > .5) {
					const H = _;
					$ -= 1, _ = Math.max(.5, Math.pow(E, $));
					const q = H - _;
					ie(!1);
					const A = R();
					_ += q, ie(!1), _ -= q, g = A.offsetX, p = A.offsetY, ie()
				}
			}

			function ee() {
				const H = i.value;
				H && download(H, void 0)
			}

			function ie(H = !0) {
				var q;
				const {
					value: A
				} = o;
				if (!A) return;
				const {
					style: Y
				} = A, I = normalizeStyle((q = B == null ? void 0 : B.previewedImgPropsRef.value) === null || q ===
					void 0 ? void 0 : q.style);
				let U = "";
				if (typeof I == "string") U = I + ";";
				else
					for (const ne in I) U += `${kebabCase$1(ne)}: ${I[ne]};`;
				const G =
					`transform-origin: center; transform: translateX(${g}px) translateY(${p}px) rotate(${O}deg) scale(${_});`;
				S ? Y.cssText = U + "cursor: grabbing; transition: none;" + G : Y.cssText = U + "cursor: grab;" +
					G + (H ? "" : "transition: none;"), H || A.offsetHeight
			}

			function pe() {
				a.value = !a.value, l.value = !0
			}

			function oe() {
				_ = re(), $ = Math.ceil(Math.log(_) / Math.log(E)), g = 0, p = 0, ie()
			}
			const me = {
				setPreviewSrc: H => {
					i.value = H
				},
				setThumbnailEl: H => {
					n = H
				},
				toggleShow: pe
			};

			function ve(H, q) {
				if (e.showToolbarTooltip) {
					const {
						value: A
					} = t;
					return h(NTooltip, {
						to: !1,
						theme: A.peers.Tooltip,
						themeOverrides: A.peerOverrides.Tooltip,
						keepAliveOnHover: !1
					}, {
						default: () => s.value[q],
						trigger: () => H
					})
				} else return H
			}
			const Se = computed(() => {
					const {
						common: {
							cubicBezierEaseInOut: H
						},
						self: {
							toolbarIconColor: q,
							toolbarBorderRadius: A,
							toolbarBoxShadow: Y,
							toolbarColor: I
						}
					} = t.value;
					return {
						"--n-bezier": H,
						"--n-toolbar-icon-color": q,
						"--n-toolbar-color": I,
						"--n-toolbar-border-radius": A,
						"--n-toolbar-box-shadow": Y
					}
				}),
				{
					inlineThemeDisabled: ge
				} = useConfig(),
				ae = ge ? useThemeClass("image-preview", void 0, Se, e) : void 0;
			return Object.assign({
				previewRef: o,
				previewWrapperRef: r,
				previewSrc: i,
				show: a,
				appear: isMounted(),
				displayed: l,
				previewedImgProps: B == null ? void 0 : B.previewedImgPropsRef,
				handleWheel(H) {
					H.preventDefault()
				},
				handlePreviewMousedown: T,
				handlePreviewDblclick: M,
				syncTransformOrigin: u,
				handleAfterLeave: () => {
					N(), O = 0, l.value = !1
				},
				handleDragStart: H => {
					var q, A;
					(A = (q = B == null ? void 0 : B.previewedImgPropsRef.value) === null || q ===
						void 0 ? void 0 : q.onDragstart) === null || A === void 0 || A.call(q, H), H
						.preventDefault()
				},
				zoomIn: L,
				zoomOut: W,
				handleDownloadClick: ee,
				rotateCounterclockwise: j,
				rotateClockwise: J,
				handleSwitchPrev: D,
				handleSwitchNext: F,
				withTooltip: ve,
				resizeToOrignalImageSize: oe,
				cssVars: ge ? void 0 : Se,
				themeClass: ae == null ? void 0 : ae.themeClass,
				onRender: ae == null ? void 0 : ae.onRender
			}, me)
		},
		render() {
			var e, t;
			const {
				clsPrefix: n,
				renderToolbar: o,
				withTooltip: r
			} = this, i = r(h(NBaseIcon, {
				clsPrefix: n,
				onClick: this.handleSwitchPrev
			}, {
				default: () => prevIcon
			}), "tipPrevious"), a = r(h(NBaseIcon, {
				clsPrefix: n,
				onClick: this.handleSwitchNext
			}, {
				default: () => nextIcon
			}), "tipNext"), l = r(h(NBaseIcon, {
				clsPrefix: n,
				onClick: this.rotateCounterclockwise
			}, {
				default: () => h(RotateCounterclockwiseIcon, null)
			}), "tipCounterclockwise"), s = r(h(NBaseIcon, {
				clsPrefix: n,
				onClick: this.rotateClockwise
			}, {
				default: () => h(RotateClockwiseIcon, null)
			}), "tipClockwise"), u = r(h(NBaseIcon, {
				clsPrefix: n,
				onClick: this.resizeToOrignalImageSize
			}, {
				default: () => h(ResizeSmallIcon, null)
			}), "tipOriginalSize"), d = r(h(NBaseIcon, {
				clsPrefix: n,
				onClick: this.zoomOut
			}, {
				default: () => h(ZoomOutIcon, null)
			}), "tipZoomOut"), f = r(h(NBaseIcon, {
				clsPrefix: n,
				onClick: this.handleDownloadClick
			}, {
				default: () => h(DownloadIcon, null)
			}), "tipDownload"), v = r(h(NBaseIcon, {
				clsPrefix: n,
				onClick: this.toggleShow
			}, {
				default: () => closeIcon
			}), "tipClose"), g = r(h(NBaseIcon, {
				clsPrefix: n,
				onClick: this.zoomIn
			}, {
				default: () => h(ZoomInIcon, null)
			}), "tipZoomIn");
			return h(Fragment, null, (t = (e = this.$slots).default) === null || t === void 0 ? void 0 : t.call(e),
				h(LazyTeleport, {
					show: this.show
				}, {
					default: () => {
						var p;
						return this.show || this.displayed ? ((p = this.onRender) === null || p ===
							void 0 || p.call(this), withDirectives(h("div", {
								class: [`${n}-image-preview-container`, this.themeClass],
								style: this.cssVars,
								onWheel: this.handleWheel
							}, h(Transition, {
								name: "fade-in-transition",
								appear: this.appear
							}, {
								default: () => this.show ? h("div", {
									class: `${n}-image-preview-overlay`,
									onClick: this.toggleShow
								}) : null
							}), this.showToolbar ? h(Transition, {
								name: "fade-in-transition",
								appear: this.appear
							}, {
								default: () => this.show ? h("div", {
									class: `${n}-image-preview-toolbar`
								}, o ? o({
									nodes: {
										prev: i,
										next: a,
										rotateCounterclockwise: l,
										rotateClockwise: s,
										resizeToOriginalSize: u,
										zoomOut: d,
										zoomIn: g,
										download: f,
										close: v
									}
								}) : h(Fragment, null, this.onPrev ? h(Fragment,
									null, i, a) : null, l, s, u, d, g, f, v)) : null
							}) : null, h(Transition, {
								name: "fade-in-scale-up-transition",
								onAfterLeave: this.handleAfterLeave,
								appear: this.appear,
								onEnter: this.syncTransformOrigin,
								onBeforeLeave: this.syncTransformOrigin
							}, {
								default: () => {
									const {
										previewedImgProps: m = {}
									} = this;
									return withDirectives(h("div", {
										class: `${n}-image-preview-wrapper`,
										ref: "previewWrapperRef"
									}, h("img", Object.assign({}, m, {
										draggable: !1,
										onMousedown: this
											.handlePreviewMousedown,
										onDblclick: this
											.handlePreviewDblclick,
										class: [`${n}-image-preview`,
											m.class
										],
										key: this.previewSrc,
										src: this.previewSrc,
										ref: "previewRef",
										onDragstart: this
											.handleDragStart
									}))), [
										[vShow, this.show]
									])
								}
							})), [
								[zindexable, {
									enabled: this.show
								}]
							])) : null
					}
				}))
		}
	}),
	imageGroupInjectionKey = createInjectionKey("n-image-group"),
	imageGroupProps = imagePreviewSharedProps,
	NImageGroup = defineComponent({
		name: "ImageGroup",
		props: imageGroupProps,
		setup(e) {
			let t;
			const {
				mergedClsPrefixRef: n
			} = useConfig(e), o = `c${createId()}`, r = getCurrentInstance(), i = s => {
				var u;
				t = s, (u = l.value) === null || u === void 0 || u.setPreviewSrc(s)
			};

			function a(s) {
				var u, d;
				if (!(r != null && r.proxy)) return;
				const v = r.proxy.$el.parentElement.querySelectorAll(`[data-group-id=${o}]:not([data-error=true])`);
				if (!v.length) return;
				const g = Array.from(v).findIndex(p => p.dataset.previewSrc === t);
				~g ? i(v[(g + s + v.length) % v.length].dataset.previewSrc) : i(v[0].dataset.previewSrc), s === 1 ?
					(u = e.onPreviewNext) === null || u === void 0 || u.call(e) : (d = e.onPreviewPrev) === null ||
					d === void 0 || d.call(e)
			}
			provide(imageGroupInjectionKey, {
				mergedClsPrefixRef: n,
				setPreviewSrc: i,
				setThumbnailEl: s => {
					var u;
					(u = l.value) === null || u === void 0 || u.setThumbnailEl(s)
				},
				toggleShow: () => {
					var s;
					(s = l.value) === null || s === void 0 || s.toggleShow()
				},
				groupId: o,
				renderToolbarRef: toRef(e, "renderToolbar")
			});
			const l = ref(null);
			return {
				mergedClsPrefix: n,
				previewInstRef: l,
				next: () => {
					a(1)
				},
				prev: () => {
					a(-1)
				}
			}
		},
		render() {
			return h(NImagePreview, {
				theme: this.theme,
				themeOverrides: this.themeOverrides,
				clsPrefix: this.mergedClsPrefix,
				ref: "previewInstRef",
				onPrev: this.prev,
				onNext: this.next,
				showToolbar: this.showToolbar,
				showToolbarTooltip: this.showToolbarTooltip,
				renderToolbar: this.renderToolbar
			}, this.$slots)
		}
	}),
	imageProps = Object.assign({
		alt: String,
		height: [String, Number],
		imgProps: Object,
		previewedImgProps: Object,
		lazy: Boolean,
		intersectionObserverOptions: Object,
		objectFit: {
			type: String,
			default: "fill"
		},
		previewSrc: String,
		fallbackSrc: String,
		width: [String, Number],
		src: String,
		previewDisabled: Boolean,
		loadDescription: String,
		onError: Function,
		onLoad: Function
	}, imagePreviewSharedProps),
	NImage = defineComponent({
		name: "Image",
		props: imageProps,
		inheritAttrs: !1,
		setup(e) {
			const t = ref(null),
				n = ref(!1),
				o = ref(null),
				r = inject(imageGroupInjectionKey, null),
				{
					mergedClsPrefixRef: i
				} = r || useConfig(e),
				a = {
					click: () => {
						if (e.previewDisabled || n.value) return;
						const u = e.previewSrc || e.src;
						if (r) {
							r.setPreviewSrc(u), r.setThumbnailEl(t.value), r.toggleShow();
							return
						}
						const {
							value: d
						} = o;
						d && (d.setPreviewSrc(u), d.setThumbnailEl(t.value), d.toggleShow())
					}
				},
				l = ref(!e.lazy);
			onMounted(() => {
				var u;
				(u = t.value) === null || u === void 0 || u.setAttribute("data-group-id", (r == null ?
					void 0 : r.groupId) || "")
			}), onMounted(() => {
				if (e.lazy && e.intersectionObserverOptions) {
					let u;
					const d = watchEffect(() => {
						u == null || u(), u = void 0, u = observeIntersection(t.value, e
							.intersectionObserverOptions, l)
					});
					onBeforeUnmount(() => {
						d(), u == null || u()
					})
				}
			}), watchEffect(() => {
				var u;
				e.src || ((u = e.imgProps) === null || u === void 0 || u.src), n.value = !1
			});
			const s = ref(!1);
			return provide(imageContextKey, {
				previewedImgPropsRef: toRef(e, "previewedImgProps")
			}), Object.assign({
				mergedClsPrefix: i,
				groupId: r == null ? void 0 : r.groupId,
				previewInstRef: o,
				imageRef: t,
				showError: n,
				shouldStartLoading: l,
				loaded: s,
				mergedOnClick: u => {
					var d, f;
					a.click(), (f = (d = e.imgProps) === null || d === void 0 ? void 0 : d.onClick) ===
						null || f === void 0 || f.call(d, u)
				},
				mergedOnError: u => {
					if (!l.value) return;
					n.value = !0;
					const {
						onError: d,
						imgProps: {
							onError: f
						} = {}
					} = e;
					d == null || d(u), f == null || f(u)
				},
				mergedOnLoad: u => {
					const {
						onLoad: d,
						imgProps: {
							onLoad: f
						} = {}
					} = e;
					d == null || d(u), f == null || f(u), s.value = !0
				}
			}, a)
		},
		render() {
			var e, t;
			const {
				mergedClsPrefix: n,
				imgProps: o = {},
				loaded: r,
				$attrs: i,
				lazy: a
			} = this, l = (t = (e = this.$slots).placeholder) === null || t === void 0 ? void 0 : t.call(e), s =
				this.src || o.src, u = h("img", Object.assign(Object.assign({}, o), {
					ref: "imageRef",
					width: this.width || o.width,
					height: this.height || o.height,
					src: this.showError ? this.fallbackSrc : a && this.intersectionObserverOptions ? this
						.shouldStartLoading ? s : void 0 : s,
					alt: this.alt || o.alt,
					"aria-label": this.alt || o.alt,
					onClick: this.mergedOnClick,
					onError: this.mergedOnError,
					onLoad: this.mergedOnLoad,
					loading: isImageSupportNativeLazy && a && !this.intersectionObserverOptions ? "lazy" :
						"eager",
					style: [o.style || "", l && !r ? {
						height: "0",
						width: "0",
						visibility: "hidden"
					} : "", {
						objectFit: this.objectFit
					}],
					"data-error": this.showError,
					"data-preview-src": this.previewSrc || this.src
				}));
			return h("div", Object.assign({}, i, {
				role: "none",
				class: [i.class, `${n}-image`, (this.previewDisabled || this.showError) &&
					`${n}-image--preview-disabled`
				]
			}), this.groupId ? u : h(NImagePreview, {
				theme: this.theme,
				themeOverrides: this.themeOverrides,
				clsPrefix: n,
				ref: "previewInstRef",
				showToolbar: this.showToolbar,
				showToolbarTooltip: this.showToolbarTooltip,
				renderToolbar: this.renderToolbar
			}, {
				default: () => u,
				toolbar: () => {
					var d, f;
					return (f = (d = this.$slots).toolbar) === null || f === void 0 ? void 0 : f
						.call(d)
				}
			}), !r && l)
		}
	});

function parse(e) {
	return e == null || typeof e == "string" && e.trim() === "" ? null : Number(e)
}

function isWipValue(e) {
	return e.includes(".") && (/^(-)?\d+.*(\.|0)$/.test(e) || /^\.\d+$/.test(e))
}

function validator(e) {
	return e == null ? !0 : !Number.isNaN(e)
}

function format(e, t) {
	return e == null ? "" : t === void 0 ? String(e) : e.toFixed(t)
}

function parseNumber(e) {
	if (e === null) return null;
	if (typeof e == "number") return e; {
		const t = Number(e);
		return Number.isNaN(t) ? null : t
	}
}
const style$a = c$1([cB("input-number-suffix", `
 display: inline-block;
 margin-right: 10px;
 `), cB("input-number-prefix", `
 display: inline-block;
 margin-left: 10px;
 `)]),
	HOLDING_CHANGE_THRESHOLD = 800,
	HOLDING_CHANGE_INTERVAL = 100,
	inputNumberProps = Object.assign(Object.assign({}, useTheme.props), {
		autofocus: Boolean,
		loading: {
			type: Boolean,
			default: void 0
		},
		placeholder: String,
		defaultValue: {
			type: Number,
			default: null
		},
		value: Number,
		step: {
			type: [Number, String],
			default: 1
		},
		min: [Number, String],
		max: [Number, String],
		size: String,
		disabled: {
			type: Boolean,
			default: void 0
		},
		validator: Function,
		bordered: {
			type: Boolean,
			default: void 0
		},
		showButton: {
			type: Boolean,
			default: !0
		},
		buttonPlacement: {
			type: String,
			default: "right"
		},
		inputProps: Object,
		readonly: Boolean,
		clearable: Boolean,
		keyboard: {
			type: Object,
			default: {}
		},
		updateValueOnInput: {
			type: Boolean,
			default: !0
		},
		parse: Function,
		format: Function,
		precision: Number,
		status: String,
		"onUpdate:value": [Function, Array],
		onUpdateValue: [Function, Array],
		onFocus: [Function, Array],
		onBlur: [Function, Array],
		onClear: [Function, Array],
		onChange: [Function, Array]
	}),
	NInputNumber = defineComponent({
		name: "InputNumber",
		props: inputNumberProps,
		setup(e) {
			const {
				mergedBorderedRef: t,
				mergedClsPrefixRef: n,
				mergedRtlRef: o
			} = useConfig(e), r = useTheme("InputNumber", "-input-number", style$a, inputNumberLight, e, n), {
					localeRef: i
				} = useLocale("InputNumber"), a = useFormItem(e), {
					mergedSizeRef: l,
					mergedDisabledRef: s,
					mergedStatusRef: u
				} = a, d = ref(null), f = ref(null), v = ref(null), g = ref(e.defaultValue), p = toRef(e, "value"),
				m = useMergedState(p, g), C = ref(""), b = I => {
					const U = String(I).split(".")[1];
					return U ? U.length : 0
				}, x = I => {
					const U = [e.min, e.max, e.step, I].map(G => G === void 0 ? 0 : b(G));
					return Math.max(...U)
				}, S = useMemo(() => {
					const {
						placeholder: I
					} = e;
					return I !== void 0 ? I : i.value.placeholder
				}), w = useMemo(() => {
					const I = parseNumber(e.step);
					return I !== null ? I === 0 ? 1 : Math.abs(I) : 1
				}), y = useMemo(() => {
					const I = parseNumber(e.min);
					return I !== null ? I : null
				}), R = useMemo(() => {
					const I = parseNumber(e.max);
					return I !== null ? I : null
				}), k = I => {
					const {
						value: U
					} = m;
					if (I === U) {
						T();
						return
					}
					const {
						"onUpdate:value": G,
						onUpdateValue: ne,
						onChange: se
					} = e, {
						nTriggerFormInput: fe,
						nTriggerFormChange: xe
					} = a;
					se && call(se, I), ne && call(ne, I), G && call(G, I), g.value = I, fe(), xe()
				}, B = ({
					offset: I,
					doUpdateIfValid: U,
					fixPrecision: G,
					isInputing: ne
				}) => {
					const {
						value: se
					} = C;
					if (ne && isWipValue(se)) return !1;
					const fe = (e.parse || parse)(se);
					if (fe === null) return U && k(null), null;
					if (validator(fe)) {
						const xe = b(fe),
							{
								precision: K
							} = e;
						if (K !== void 0 && K < xe && !G) return !1;
						let Z = parseFloat((fe + I).toFixed(K ?? x(fe)));
						if (validator(Z)) {
							const {
								value: be
							} = R, {
								value: Pe
							} = y;
							if (be !== null && Z > be) {
								if (!U || ne) return !1;
								Z = be
							}
							if (Pe !== null && Z < Pe) {
								if (!U || ne) return !1;
								Z = Pe
							}
							return e.validator && !e.validator(Z) ? !1 : (U && k(Z), Z)
						}
					}
					return !1
				}, T = () => {
					const {
						value: I
					} = m;
					if (validator(I)) {
						const {
							format: U,
							precision: G
						} = e;
						U ? C.value = U(I) : I === null || G === void 0 || b(I) > G ? C.value = format(I, void 0) :
							C.value = format(I, G)
					} else C.value = String(I)
				};
			T();
			const M = useMemo(() => B({
					offset: 0,
					doUpdateIfValid: !1,
					isInputing: !1,
					fixPrecision: !1
				}) === !1),
				E = useMemo(() => {
					const {
						value: I
					} = m;
					if (e.validator && I === null) return !1;
					const {
						value: U
					} = w;
					return B({
						offset: -U,
						doUpdateIfValid: !1,
						isInputing: !1,
						fixPrecision: !1
					}) !== !1
				}),
				$ = useMemo(() => {
					const {
						value: I
					} = m;
					if (e.validator && I === null) return !1;
					const {
						value: U
					} = w;
					return B({
						offset: +U,
						doUpdateIfValid: !1,
						isInputing: !1,
						fixPrecision: !1
					}) !== !1
				});

			function _(I) {
				const {
					onFocus: U
				} = e, {
					nTriggerFormFocus: G
				} = a;
				U && call(U, I), G()
			}

			function O(I) {
				var U, G;
				if (I.target === ((U = d.value) === null || U === void 0 ? void 0 : U.wrapperElRef)) return;
				const ne = B({
					offset: 0,
					doUpdateIfValid: !0,
					isInputing: !1,
					fixPrecision: !0
				});
				if (ne !== !1) {
					const xe = (G = d.value) === null || G === void 0 ? void 0 : G.inputElRef;
					xe && (xe.value = String(ne || "")), m.value === ne && T()
				} else T();
				const {
					onBlur: se
				} = e, {
					nTriggerFormBlur: fe
				} = a;
				se && call(se, I), fe(), nextTick(() => {
					T()
				})
			}

			function N(I) {
				const {
					onClear: U
				} = e;
				U && call(U, I)
			}

			function D() {
				const {
					value: I
				} = $;
				if (!I) {
					oe();
					return
				}
				const {
					value: U
				} = m;
				if (U === null) e.validator || k(Q());
				else {
					const {
						value: G
					} = w;
					B({
						offset: G,
						doUpdateIfValid: !0,
						isInputing: !1,
						fixPrecision: !0
					})
				}
			}

			function F() {
				const {
					value: I
				} = E;
				if (!I) {
					pe();
					return
				}
				const {
					value: U
				} = m;
				if (U === null) e.validator || k(Q());
				else {
					const {
						value: G
					} = w;
					B({
						offset: -G,
						doUpdateIfValid: !0,
						isInputing: !1,
						fixPrecision: !0
					})
				}
			}
			const j = _,
				J = O;

			function Q() {
				if (e.validator) return null;
				const {
					value: I
				} = y, {
					value: U
				} = R;
				return I !== null ? Math.max(0, I) : U !== null ? Math.min(0, U) : 0
			}

			function re(I) {
				N(I), k(null)
			}

			function L(I) {
				var U, G, ne;
				!((U = v.value) === null || U === void 0) && U.$el.contains(I.target) && I.preventDefault(), !((G =
					f.value) === null || G === void 0) && G.$el.contains(I.target) && I.preventDefault(), (ne =
					d.value) === null || ne === void 0 || ne.activate()
			}
			let W = null,
				ee = null,
				ie = null;

			function pe() {
				ie && (window.clearTimeout(ie), ie = null), W && (window.clearInterval(W), W = null)
			}

			function oe() {
				ve && (window.clearTimeout(ve), ve = null), ee && (window.clearInterval(ee), ee = null)
			}

			function me() {
				pe(), ie = window.setTimeout(() => {
					W = window.setInterval(() => {
						F()
					}, HOLDING_CHANGE_INTERVAL)
				}, HOLDING_CHANGE_THRESHOLD), on("mouseup", document, pe, {
					once: !0
				})
			}
			let ve = null;

			function Se() {
				oe(), ve = window.setTimeout(() => {
					ee = window.setInterval(() => {
						D()
					}, HOLDING_CHANGE_INTERVAL)
				}, HOLDING_CHANGE_THRESHOLD), on("mouseup", document, oe, {
					once: !0
				})
			}
			const ge = () => {
					ee || D()
				},
				ae = () => {
					W || F()
				};

			function H(I) {
				var U, G;
				if (I.key === "Enter") {
					if (I.target === ((U = d.value) === null || U === void 0 ? void 0 : U.wrapperElRef)) return;
					B({
						offset: 0,
						doUpdateIfValid: !0,
						isInputing: !1,
						fixPrecision: !0
					}) !== !1 && ((G = d.value) === null || G === void 0 || G.deactivate())
				} else if (I.key === "ArrowUp") {
					if (!$.value || e.keyboard.ArrowUp === !1) return;
					I.preventDefault(), B({
						offset: 0,
						doUpdateIfValid: !0,
						isInputing: !1,
						fixPrecision: !0
					}) !== !1 && D()
				} else if (I.key === "ArrowDown") {
					if (!E.value || e.keyboard.ArrowDown === !1) return;
					I.preventDefault(), B({
						offset: 0,
						doUpdateIfValid: !0,
						isInputing: !1,
						fixPrecision: !0
					}) !== !1 && F()
				}
			}

			function q(I) {
				C.value = I, e.updateValueOnInput && !e.format && !e.parse && e.precision === void 0 && B({
					offset: 0,
					doUpdateIfValid: !0,
					isInputing: !0,
					fixPrecision: !1
				})
			}
			watch(m, () => {
				T()
			});
			const A = {
					focus: () => {
						var I;
						return (I = d.value) === null || I === void 0 ? void 0 : I.focus()
					},
					blur: () => {
						var I;
						return (I = d.value) === null || I === void 0 ? void 0 : I.blur()
					},
					select: () => {
						var I;
						return (I = d.value) === null || I === void 0 ? void 0 : I.select()
					}
				},
				Y = useRtl("InputNumber", o, n);
			return Object.assign(Object.assign({}, A), {
				rtlEnabled: Y,
				inputInstRef: d,
				minusButtonInstRef: f,
				addButtonInstRef: v,
				mergedClsPrefix: n,
				mergedBordered: t,
				uncontrolledValue: g,
				mergedValue: m,
				mergedPlaceholder: S,
				displayedValueInvalid: M,
				mergedSize: l,
				mergedDisabled: s,
				displayedValue: C,
				addable: $,
				minusable: E,
				mergedStatus: u,
				handleFocus: j,
				handleBlur: J,
				handleClear: re,
				handleMouseDown: L,
				handleAddClick: ge,
				handleMinusClick: ae,
				handleAddMousedown: Se,
				handleMinusMousedown: me,
				handleKeyDown: H,
				handleUpdateDisplayedValue: q,
				mergedTheme: r,
				inputThemeOverrides: {
					paddingSmall: "0 8px 0 10px",
					paddingMedium: "0 8px 0 12px",
					paddingLarge: "0 8px 0 14px"
				},
				buttonThemeOverrides: computed(() => {
					const {
						self: {
							iconColorDisabled: I
						}
					} = r.value, [U, G, ne, se] = rgba(I);
					return {
						textColorTextDisabled: `rgb(${U}, ${G}, ${ne})`,
						opacityDisabled: `${se}`
					}
				})
			})
		},
		render() {
			const {
				mergedClsPrefix: e,
				$slots: t
			} = this, n = () => h(XButton, {
				text: !0,
				disabled: !this.minusable || this.mergedDisabled || this.readonly,
				focusable: !1,
				theme: this.mergedTheme.peers.Button,
				themeOverrides: this.mergedTheme.peerOverrides.Button,
				builtinThemeOverrides: this.buttonThemeOverrides,
				onClick: this.handleMinusClick,
				onMousedown: this.handleMinusMousedown,
				ref: "minusButtonInstRef"
			}, {
				icon: () => resolveSlot(t["minus-icon"], () => [h(NBaseIcon, {
					clsPrefix: e
				}, {
					default: () => h(RemoveIcon, null)
				})])
			}), o = () => h(XButton, {
				text: !0,
				disabled: !this.addable || this.mergedDisabled || this.readonly,
				focusable: !1,
				theme: this.mergedTheme.peers.Button,
				themeOverrides: this.mergedTheme.peerOverrides.Button,
				builtinThemeOverrides: this.buttonThemeOverrides,
				onClick: this.handleAddClick,
				onMousedown: this.handleAddMousedown,
				ref: "addButtonInstRef"
			}, {
				icon: () => resolveSlot(t["add-icon"], () => [h(NBaseIcon, {
					clsPrefix: e
				}, {
					default: () => h(AddIcon, null)
				})])
			});
			return h("div", {
				class: [`${e}-input-number`, this.rtlEnabled && `${e}-input-number--rtl`]
			}, h(NInput, {
				ref: "inputInstRef",
				autofocus: this.autofocus,
				status: this.mergedStatus,
				bordered: this.mergedBordered,
				loading: this.loading,
				value: this.displayedValue,
				onUpdateValue: this.handleUpdateDisplayedValue,
				theme: this.mergedTheme.peers.Input,
				themeOverrides: this.mergedTheme.peerOverrides.Input,
				builtinThemeOverrides: this.inputThemeOverrides,
				size: this.mergedSize,
				placeholder: this.mergedPlaceholder,
				disabled: this.mergedDisabled,
				readonly: this.readonly,
				textDecoration: this.displayedValueInvalid ? "line-through" : void 0,
				onFocus: this.handleFocus,
				onBlur: this.handleBlur,
				onKeydown: this.handleKeyDown,
				onMousedown: this.handleMouseDown,
				onClear: this.handleClear,
				clearable: this.clearable,
				inputProps: this.inputProps,
				internalLoadingBeforeSuffix: !0
			}, {
				prefix: () => {
					var r;
					return this.showButton && this.buttonPlacement === "both" ? [n(),
						resolveWrappedSlot(t.prefix, i => i ? h("span", {
							class: `${e}-input-number-prefix`
						}, i) : null)
					] : (r = t.prefix) === null || r === void 0 ? void 0 : r.call(t)
				},
				suffix: () => {
					var r;
					return this.showButton ? [resolveWrappedSlot(t.suffix, i => i ? h("span", {
						class: `${e}-input-number-suffix`
					}, i) : null), this.buttonPlacement === "right" ? n() : null, o()] : (r = t
						.suffix) === null || r === void 0 ? void 0 : r.call(t)
				}
			}))
		}
	}),
	style$9 = c$1([cB("list", `
 --n-merged-border-color: var(--n-border-color);
 --n-merged-color: var(--n-color);
 --n-merged-color-hover: var(--n-color-hover);
 margin: 0;
 font-size: var(--n-font-size);
 transition:
 background-color .3s var(--n-bezier),
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 padding: 0;
 list-style-type: none;
 color: var(--n-text-color);
 background-color: var(--n-merged-color);
 `, [cM("show-divider", [cB("list-item", [c$1("&:not(:last-child)", [cE("divider", `
 background-color: var(--n-merged-border-color);
 `)])])]), cM("clickable", [cB("list-item", `
 cursor: pointer;
 `)]), cM("bordered", `
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `), cM("hoverable", [cB("list-item", `
 border-radius: var(--n-border-radius);
 `, [c$1("&:hover", `
 background-color: var(--n-merged-color-hover);
 `, [cE("divider", `
 background-color: transparent;
 `)])])]), cM("bordered, hoverable", [cB("list-item", `
 padding: 12px 20px;
 `), cE("header, footer", `
 padding: 12px 20px;
 `)]), cE("header, footer", `
 padding: 12px 0;
 box-sizing: border-box;
 transition: border-color .3s var(--n-bezier);
 `, [c$1("&:not(:last-child)", `
 border-bottom: 1px solid var(--n-merged-border-color);
 `)]), cB("list-item", `
 position: relative;
 padding: 12px 0; 
 box-sizing: border-box;
 display: flex;
 flex-wrap: nowrap;
 align-items: center;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier);
 `, [cE("prefix", `
 margin-right: 20px;
 flex: 0;
 `), cE("suffix", `
 margin-left: 20px;
 flex: 0;
 `), cE("main", `
 flex: 1;
 `), cE("divider", `
 height: 1px;
 position: absolute;
 bottom: 0;
 left: 0;
 right: 0;
 background-color: transparent;
 transition: background-color .3s var(--n-bezier);
 pointer-events: none;
 `)])]), insideModal(cB("list", `
 --n-merged-color-hover: var(--n-color-hover-modal);
 --n-merged-color: var(--n-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `)), insidePopover(cB("list", `
 --n-merged-color-hover: var(--n-color-hover-popover);
 --n-merged-color: var(--n-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `))]),
	listProps = Object.assign(Object.assign({}, useTheme.props), {
		size: {
			type: String,
			default: "medium"
		},
		bordered: Boolean,
		clickable: Boolean,
		hoverable: Boolean,
		showDivider: {
			type: Boolean,
			default: !0
		}
	}),
	listInjectionKey = createInjectionKey("n-list"),
	NList = defineComponent({
		name: "List",
		props: listProps,
		setup(e) {
			const {
				mergedClsPrefixRef: t,
				inlineThemeDisabled: n,
				mergedRtlRef: o
			} = useConfig(e), r = useRtl("List", o, t), i = useTheme("List", "-list", style$9, listLight, e, t);
			provide(listInjectionKey, {
				showDividerRef: toRef(e, "showDivider"),
				mergedClsPrefixRef: t
			});
			const a = computed(() => {
					const {
						common: {
							cubicBezierEaseInOut: s
						},
						self: {
							fontSize: u,
							textColor: d,
							color: f,
							colorModal: v,
							colorPopover: g,
							borderColor: p,
							borderColorModal: m,
							borderColorPopover: C,
							borderRadius: b,
							colorHover: x,
							colorHoverModal: S,
							colorHoverPopover: w
						}
					} = i.value;
					return {
						"--n-font-size": u,
						"--n-bezier": s,
						"--n-text-color": d,
						"--n-color": f,
						"--n-border-radius": b,
						"--n-border-color": p,
						"--n-border-color-modal": m,
						"--n-border-color-popover": C,
						"--n-color-modal": v,
						"--n-color-popover": g,
						"--n-color-hover": x,
						"--n-color-hover-modal": S,
						"--n-color-hover-popover": w
					}
				}),
				l = n ? useThemeClass("list", void 0, a, e) : void 0;
			return {
				mergedClsPrefix: t,
				rtlEnabled: r,
				cssVars: n ? void 0 : a,
				themeClass: l == null ? void 0 : l.themeClass,
				onRender: l == null ? void 0 : l.onRender
			}
		},
		render() {
			var e;
			const {
				$slots: t,
				mergedClsPrefix: n,
				onRender: o
			} = this;
			return o == null || o(), h("ul", {
					class: [`${n}-list`, this.rtlEnabled && `${n}-list--rtl`, this.bordered &&
						`${n}-list--bordered`, this.showDivider && `${n}-list--show-divider`, this
						.hoverable && `${n}-list--hoverable`, this.clickable && `${n}-list--clickable`, this
						.themeClass
					],
					style: this.cssVars
				}, t.header ? h("div", {
					class: `${n}-list__header`
				}, t.header()) : null, (e = t.default) === null || e === void 0 ? void 0 : e.call(t), t.footer ?
				h("div", {
					class: `${n}-list__footer`
				}, t.footer()) : null)
		}
	}),
	NListItem = defineComponent({
		name: "ListItem",
		setup() {
			const e = inject(listInjectionKey, null);
			return e || throwError("list-item", "`n-list-item` must be placed in `n-list`."), {
				showDivider: e.showDividerRef,
				mergedClsPrefix: e.mergedClsPrefixRef
			}
		},
		render() {
			const {
				$slots: e,
				mergedClsPrefix: t
			} = this;
			return h("li", {
				class: `${t}-list-item`
			}, e.prefix ? h("div", {
				class: `${t}-list-item__prefix`
			}, e.prefix()) : null, e.default ? h("div", {
				class: `${t}-list-item__main`
			}, e) : null, e.suffix ? h("div", {
				class: `${t}-list-item__suffix`
			}, e.suffix()) : null, this.showDivider && h("div", {
				class: `${t}-list-item__divider`
			}))
		}
	});

function useMessage() {
	const e = inject(messageApiInjectionKey, null);
	return e === null && throwError("use-message",
		"No outer <n-message-provider /> founded. See prerequisite in https://www.naiveui.com/en-US/os-theme/components/message for more details. If you want to use `useMessage` outside setup, please check https://www.naiveui.com/zh-CN/os-theme/components/message#Q-&-A."
		), e
}
const style$8 = c$1([cB("progress", {
		display: "inline-block"
	}, [cB("progress-icon", `
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 `), cM("line", `
 width: 100%;
 display: block;
 `, [cB("progress-content", `
 display: flex;
 align-items: center;
 `, [cB("progress-graph", {
		flex: 1
	})]), cB("progress-custom-content", {
		marginLeft: "14px"
	}), cB("progress-icon", `
 width: 30px;
 padding-left: 14px;
 height: var(--n-icon-size-line);
 line-height: var(--n-icon-size-line);
 font-size: var(--n-icon-size-line);
 `, [cM("as-text", `
 color: var(--n-text-color-line-outer);
 text-align: center;
 width: 40px;
 font-size: var(--n-font-size);
 padding-left: 4px;
 transition: color .3s var(--n-bezier);
 `)])]), cM("circle, dashboard", {
		width: "120px"
	}, [cB("progress-custom-content", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 `), cB("progress-text", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: inherit;
 font-size: var(--n-font-size-circle);
 color: var(--n-text-color-circle);
 font-weight: var(--n-font-weight-circle);
 transition: color .3s var(--n-bezier);
 white-space: nowrap;
 `), cB("progress-icon", `
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 color: var(--n-icon-color);
 font-size: var(--n-icon-size-circle);
 `)]), cM("multiple-circle", `
 width: 200px;
 color: inherit;
 `, [cB("progress-text", `
 font-weight: var(--n-font-weight-circle);
 color: var(--n-text-color-circle);
 position: absolute;
 left: 50%;
 top: 50%;
 transform: translateX(-50%) translateY(-50%);
 display: flex;
 align-items: center;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `)]), cB("progress-content", {
		position: "relative"
	}), cB("progress-graph", {
		position: "relative"
	}, [cB("progress-graph-circle", [c$1("svg", {
		verticalAlign: "bottom"
	}), cB("progress-graph-circle-fill", `
 stroke: var(--n-fill-color);
 transition:
 opacity .3s var(--n-bezier),
 stroke .3s var(--n-bezier),
 stroke-dasharray .3s var(--n-bezier);
 `, [cM("empty", {
		opacity: 0
	})]), cB("progress-graph-circle-rail", `
 transition: stroke .3s var(--n-bezier);
 overflow: hidden;
 stroke: var(--n-rail-color);
 `)]), cB("progress-graph-line", [cM("indicator-inside", [cB("progress-graph-line-rail", `
 height: 16px;
 line-height: 16px;
 border-radius: 10px;
 `, [cB("progress-graph-line-fill", `
 height: inherit;
 border-radius: 10px;
 `), cB("progress-graph-line-indicator", `
 background: #0000;
 white-space: nowrap;
 text-align: right;
 margin-left: 14px;
 margin-right: 14px;
 height: inherit;
 font-size: 12px;
 color: var(--n-text-color-line-inner);
 transition: color .3s var(--n-bezier);
 `)])]), cM("indicator-inside-label", `
 height: 16px;
 display: flex;
 align-items: center;
 `, [cB("progress-graph-line-rail", `
 flex: 1;
 transition: background-color .3s var(--n-bezier);
 `), cB("progress-graph-line-indicator", `
 background: var(--n-fill-color);
 font-size: 12px;
 transform: translateZ(0);
 display: flex;
 vertical-align: middle;
 height: 16px;
 line-height: 16px;
 padding: 0 10px;
 border-radius: 10px;
 position: absolute;
 white-space: nowrap;
 color: var(--n-text-color-line-inner);
 transition:
 right .2s var(--n-bezier),
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]), cB("progress-graph-line-rail", `
 position: relative;
 overflow: hidden;
 height: var(--n-rail-height);
 border-radius: 5px;
 background-color: var(--n-rail-color);
 transition: background-color .3s var(--n-bezier);
 `, [cB("progress-graph-line-fill", `
 background: var(--n-fill-color);
 position: relative;
 border-radius: 5px;
 height: inherit;
 width: 100%;
 max-width: 0%;
 transition:
 background-color .3s var(--n-bezier),
 max-width .2s var(--n-bezier);
 `, [cM("processing", [c$1("&::after", `
 content: "";
 background-image: var(--n-line-bg-processing);
 animation: progress-processing-animation 2s var(--n-bezier) infinite;
 `)])])])])])]), c$1("@keyframes progress-processing-animation", `
 0% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 100%;
 opacity: 1;
 }
 66% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 100% {
 position: absolute;
 left: 0;
 top: 0;
 bottom: 0;
 right: 0;
 opacity: 0;
 }
 `)]),
	iconMap$1 = {
		success: h(SuccessIcon, null),
		error: h(ErrorIcon, null),
		warning: h(WarningIcon, null),
		info: h(InfoIcon, null)
	},
	Line = defineComponent({
		name: "ProgressLine",
		props: {
			clsPrefix: {
				type: String,
				required: !0
			},
			percentage: {
				type: Number,
				default: 0
			},
			railColor: String,
			railStyle: [String, Object],
			fillColor: String,
			status: {
				type: String,
				required: !0
			},
			indicatorPlacement: {
				type: String,
				required: !0
			},
			indicatorTextColor: String,
			unit: {
				type: String,
				default: "%"
			},
			processing: {
				type: Boolean,
				required: !0
			},
			showIndicator: {
				type: Boolean,
				required: !0
			},
			height: [String, Number],
			railBorderRadius: [String, Number],
			fillBorderRadius: [String, Number]
		},
		setup(e, {
			slots: t
		}) {
			const n = computed(() => formatLength(e.height)),
				o = computed(() => e.railBorderRadius !== void 0 ? formatLength(e.railBorderRadius) : e.height !==
					void 0 ? formatLength(e.height, {
						c: .5
					}) : ""),
				r = computed(() => e.fillBorderRadius !== void 0 ? formatLength(e.fillBorderRadius) : e
					.railBorderRadius !== void 0 ? formatLength(e.railBorderRadius) : e.height !== void 0 ?
					formatLength(e.height, {
						c: .5
					}) : "");
			return () => {
				const {
					indicatorPlacement: i,
					railColor: a,
					railStyle: l,
					percentage: s,
					unit: u,
					indicatorTextColor: d,
					status: f,
					showIndicator: v,
					fillColor: g,
					processing: p,
					clsPrefix: m
				} = e;
				return h("div", {
					class: `${m}-progress-content`,
					role: "none"
				}, h("div", {
					class: `${m}-progress-graph`,
					"aria-hidden": !0
				}, h("div", {
					class: [`${m}-progress-graph-line`, {
						[`${m}-progress-graph-line--indicator-${i}`]: !0
					}]
				}, h("div", {
					class: `${m}-progress-graph-line-rail`,
					style: [{
						backgroundColor: a,
						height: n.value,
						borderRadius: o.value
					}, l]
				}, h("div", {
					class: [`${m}-progress-graph-line-fill`, p &&
						`${m}-progress-graph-line-fill--processing`
					],
					style: {
						maxWidth: `${e.percentage}%`,
						backgroundColor: g,
						height: n.value,
						lineHeight: n.value,
						borderRadius: r.value
					}
				}, i === "inside" ? h("div", {
					class: `${m}-progress-graph-line-indicator`,
					style: {
						color: d
					}
				}, t.default ? t.default() : `${s}${u}`) : null)))), v && i === "outside" ? h("div",
					null, t.default ? h("div", {
						class: `${m}-progress-custom-content`,
						style: {
							color: d
						},
						role: "none"
					}, t.default()) : f === "default" ? h("div", {
						role: "none",
						class: `${m}-progress-icon ${m}-progress-icon--as-text`,
						style: {
							color: d
						}
					}, s, u) : h("div", {
						class: `${m}-progress-icon`,
						"aria-hidden": !0
					}, h(NBaseIcon, {
						clsPrefix: m
					}, {
						default: () => iconMap$1[f]
					}))) : null)
			}
		}
	}),
	iconMap = {
		success: h(SuccessIcon, null),
		error: h(ErrorIcon, null),
		warning: h(WarningIcon, null),
		info: h(InfoIcon, null)
	},
	Circle = defineComponent({
		name: "ProgressCircle",
		props: {
			clsPrefix: {
				type: String,
				required: !0
			},
			status: {
				type: String,
				required: !0
			},
			strokeWidth: {
				type: Number,
				required: !0
			},
			fillColor: String,
			railColor: String,
			railStyle: [String, Object],
			percentage: {
				type: Number,
				default: 0
			},
			offsetDegree: {
				type: Number,
				default: 0
			},
			showIndicator: {
				type: Boolean,
				required: !0
			},
			indicatorTextColor: String,
			unit: String,
			viewBoxWidth: {
				type: Number,
				required: !0
			},
			gapDegree: {
				type: Number,
				required: !0
			},
			gapOffsetDegree: {
				type: Number,
				default: 0
			}
		},
		setup(e, {
			slots: t
		}) {
			function n(o, r, i) {
				const {
					gapDegree: a,
					viewBoxWidth: l,
					strokeWidth: s
				} = e, u = 50, d = 0, f = u, v = 0, g = 2 * u, p = 50 + s / 2, m = `M ${p},${p} m ${d},${f}
      a ${u},${u} 0 1 1 ${v},${-g}
      a ${u},${u} 0 1 1 ${-v},${g}`, C = Math.PI * 2 * u, b = {
					stroke: i,
					strokeDasharray: `${o/100*(C-a)}px ${l*8}px`,
					strokeDashoffset: `-${a/2}px`,
					transformOrigin: r ? "center" : void 0,
					transform: r ? `rotate(${r}deg)` : void 0
				};
				return {
					pathString: m,
					pathStyle: b
				}
			}
			return () => {
				const {
					fillColor: o,
					railColor: r,
					strokeWidth: i,
					offsetDegree: a,
					status: l,
					percentage: s,
					showIndicator: u,
					indicatorTextColor: d,
					unit: f,
					gapOffsetDegree: v,
					clsPrefix: g
				} = e, {
					pathString: p,
					pathStyle: m
				} = n(100, 0, r), {
					pathString: C,
					pathStyle: b
				} = n(s, a, o), x = 100 + i;
				return h("div", {
					class: `${g}-progress-content`,
					role: "none"
				}, h("div", {
					class: `${g}-progress-graph`,
					"aria-hidden": !0
				}, h("div", {
					class: `${g}-progress-graph-circle`,
					style: {
						transform: v ? `rotate(${v}deg)` : void 0
					}
				}, h("svg", {
					viewBox: `0 0 ${x} ${x}`
				}, h("g", null, h("path", {
					class: `${g}-progress-graph-circle-rail`,
					d: p,
					"stroke-width": i,
					"stroke-linecap": "round",
					fill: "none",
					style: m
				})), h("g", null, h("path", {
					class: [`${g}-progress-graph-circle-fill`, s === 0 &&
						`${g}-progress-graph-circle-fill--empty`
					],
					d: C,
					"stroke-width": i,
					"stroke-linecap": "round",
					fill: "none",
					style: b
				}))))), u ? h("div", null, t.default ? h("div", {
					class: `${g}-progress-custom-content`,
					role: "none"
				}, t.default()) : l !== "default" ? h("div", {
					class: `${g}-progress-icon`,
					"aria-hidden": !0
				}, h(NBaseIcon, {
					clsPrefix: g
				}, {
					default: () => iconMap[l]
				})) : h("div", {
					class: `${g}-progress-text`,
					style: {
						color: d
					},
					role: "none"
				}, h("span", {
					class: `${g}-progress-text__percentage`
				}, s), h("span", {
					class: `${g}-progress-text__unit`
				}, f))) : null)
			}
		}
	});

function circlePath(e, t, n = 100) {
	return `m ${n/2} ${n/2-e} a ${e} ${e} 0 1 1 0 ${2*e} a ${e} ${e} 0 1 1 0 -${2*e}`
}
const MultipleCircle = defineComponent({
		name: "ProgressMultipleCircle",
		props: {
			clsPrefix: {
				type: String,
				required: !0
			},
			viewBoxWidth: {
				type: Number,
				required: !0
			},
			percentage: {
				type: Array,
				default: [0]
			},
			strokeWidth: {
				type: Number,
				required: !0
			},
			circleGap: {
				type: Number,
				required: !0
			},
			showIndicator: {
				type: Boolean,
				required: !0
			},
			fillColor: {
				type: Array,
				default: () => []
			},
			railColor: {
				type: Array,
				default: () => []
			},
			railStyle: {
				type: Array,
				default: () => []
			}
		},
		setup(e, {
			slots: t
		}) {
			const n = computed(() => e.percentage.map((r, i) =>
				`${Math.PI*r/100*(e.viewBoxWidth/2-e.strokeWidth/2*(1+2*i)-e.circleGap*i)*2}, ${e.viewBoxWidth*8}`
				));
			return () => {
				const {
					viewBoxWidth: o,
					strokeWidth: r,
					circleGap: i,
					showIndicator: a,
					fillColor: l,
					railColor: s,
					railStyle: u,
					percentage: d,
					clsPrefix: f
				} = e;
				return h("div", {
					class: `${f}-progress-content`,
					role: "none"
				}, h("div", {
					class: `${f}-progress-graph`,
					"aria-hidden": !0
				}, h("div", {
					class: `${f}-progress-graph-circle`
				}, h("svg", {
					viewBox: `0 0 ${o} ${o}`
				}, d.map((v, g) => h("g", {
					key: g
				}, h("path", {
					class: `${f}-progress-graph-circle-rail`,
					d: circlePath(o / 2 - r / 2 * (1 + 2 * g) - i * g, r, o),
					"stroke-width": r,
					"stroke-linecap": "round",
					fill: "none",
					style: [{
						strokeDashoffset: 0,
						stroke: s[g]
					}, u[g]]
				}), h("path", {
					class: [`${f}-progress-graph-circle-fill`, v === 0 &&
						`${f}-progress-graph-circle-fill--empty`
					],
					d: circlePath(o / 2 - r / 2 * (1 + 2 * g) - i * g, r, o),
					"stroke-width": r,
					"stroke-linecap": "round",
					fill: "none",
					style: {
						strokeDasharray: n.value[g],
						strokeDashoffset: 0,
						stroke: l[g]
					}
				})))))), a && t.default ? h("div", null, h("div", {
					class: `${f}-progress-text`
				}, t.default())) : null)
			}
		}
	}),
	progressProps = Object.assign(Object.assign({}, useTheme.props), {
		processing: Boolean,
		type: {
			type: String,
			default: "line"
		},
		gapDegree: Number,
		gapOffsetDegree: Number,
		status: {
			type: String,
			default: "default"
		},
		railColor: [String, Array],
		railStyle: [String, Array],
		color: [String, Array],
		viewBoxWidth: {
			type: Number,
			default: 100
		},
		strokeWidth: {
			type: Number,
			default: 7
		},
		percentage: [Number, Array],
		unit: {
			type: String,
			default: "%"
		},
		showIndicator: {
			type: Boolean,
			default: !0
		},
		indicatorPosition: {
			type: String,
			default: "outside"
		},
		indicatorPlacement: {
			type: String,
			default: "outside"
		},
		indicatorTextColor: String,
		circleGap: {
			type: Number,
			default: 1
		},
		height: Number,
		borderRadius: [String, Number],
		fillBorderRadius: [String, Number],
		offsetDegree: Number
	}),
	NProgress = defineComponent({
		name: "Progress",
		props: progressProps,
		setup(e) {
			const t = computed(() => e.indicatorPlacement || e.indicatorPosition),
				n = computed(() => {
					if (e.gapDegree || e.gapDegree === 0) return e.gapDegree;
					if (e.type === "dashboard") return 75
				}),
				{
					mergedClsPrefixRef: o,
					inlineThemeDisabled: r
				} = useConfig(e),
				i = useTheme("Progress", "-progress", style$8, progressLight, e, o),
				a = computed(() => {
					const {
						status: s
					} = e, {
						common: {
							cubicBezierEaseInOut: u
						},
						self: {
							fontSize: d,
							fontSizeCircle: f,
							railColor: v,
							railHeight: g,
							iconSizeCircle: p,
							iconSizeLine: m,
							textColorCircle: C,
							textColorLineInner: b,
							textColorLineOuter: x,
							lineBgProcessing: S,
							fontWeightCircle: w,
							[createKey("iconColor", s)]: y,
							[createKey("fillColor", s)]: R
						}
					} = i.value;
					return {
						"--n-bezier": u,
						"--n-fill-color": R,
						"--n-font-size": d,
						"--n-font-size-circle": f,
						"--n-font-weight-circle": w,
						"--n-icon-color": y,
						"--n-icon-size-circle": p,
						"--n-icon-size-line": m,
						"--n-line-bg-processing": S,
						"--n-rail-color": v,
						"--n-rail-height": g,
						"--n-text-color-circle": C,
						"--n-text-color-line-inner": b,
						"--n-text-color-line-outer": x
					}
				}),
				l = r ? useThemeClass("progress", computed(() => e.status[0]), a, e) : void 0;
			return {
				mergedClsPrefix: o,
				mergedIndicatorPlacement: t,
				gapDeg: n,
				cssVars: r ? void 0 : a,
				themeClass: l == null ? void 0 : l.themeClass,
				onRender: l == null ? void 0 : l.onRender
			}
		},
		render() {
			const {
				type: e,
				cssVars: t,
				indicatorTextColor: n,
				showIndicator: o,
				status: r,
				railColor: i,
				railStyle: a,
				color: l,
				percentage: s,
				viewBoxWidth: u,
				strokeWidth: d,
				mergedIndicatorPlacement: f,
				unit: v,
				borderRadius: g,
				fillBorderRadius: p,
				height: m,
				processing: C,
				circleGap: b,
				mergedClsPrefix: x,
				gapDeg: S,
				gapOffsetDegree: w,
				themeClass: y,
				$slots: R,
				onRender: k
			} = this;
			return k == null || k(), h("div", {
				class: [y, `${x}-progress`, `${x}-progress--${e}`, `${x}-progress--${r}`],
				style: t,
				"aria-valuemax": 100,
				"aria-valuemin": 0,
				"aria-valuenow": s,
				role: e === "circle" || e === "line" || e === "dashboard" ? "progressbar" : "none"
			}, e === "circle" || e === "dashboard" ? h(Circle, {
				clsPrefix: x,
				status: r,
				showIndicator: o,
				indicatorTextColor: n,
				railColor: i,
				fillColor: l,
				railStyle: a,
				offsetDegree: this.offsetDegree,
				percentage: s,
				viewBoxWidth: u,
				strokeWidth: d,
				gapDegree: S === void 0 ? e === "dashboard" ? 75 : 0 : S,
				gapOffsetDegree: w,
				unit: v
			}, R) : e === "line" ? h(Line, {
				clsPrefix: x,
				status: r,
				showIndicator: o,
				indicatorTextColor: n,
				railColor: i,
				fillColor: l,
				railStyle: a,
				percentage: s,
				processing: C,
				indicatorPlacement: f,
				unit: v,
				fillBorderRadius: p,
				railBorderRadius: g,
				height: m
			}, R) : e === "multiple-circle" ? h(MultipleCircle, {
				clsPrefix: x,
				strokeWidth: d,
				railColor: i,
				fillColor: l,
				railStyle: a,
				viewBoxWidth: u,
				percentage: s,
				showIndicator: o,
				circleGap: b
			}, R) : null)
		}
	}),
	image404 = h("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 36 36"
	}, h("circle", {
		fill: "#FFCB4C",
		cx: "18",
		cy: "17.018",
		r: "17"
	}), h("path", {
		fill: "#65471B",
		d: "M14.524 21.036c-.145-.116-.258-.274-.312-.464-.134-.46.13-.918.59-1.021 4.528-1.021 7.577 1.363 7.706 1.465.384.306.459.845.173 1.205-.286.358-.828.401-1.211.097-.11-.084-2.523-1.923-6.182-1.098-.274.061-.554-.016-.764-.184z"
	}), h("ellipse", {
		fill: "#65471B",
		cx: "13.119",
		cy: "11.174",
		rx: "2.125",
		ry: "2.656"
	}), h("ellipse", {
		fill: "#65471B",
		cx: "24.375",
		cy: "12.236",
		rx: "2.125",
		ry: "2.656"
	}), h("path", {
		fill: "#F19020",
		d: "M17.276 35.149s1.265-.411 1.429-1.352c.173-.972-.624-1.167-.624-1.167s1.041-.208 1.172-1.376c.123-1.101-.861-1.363-.861-1.363s.97-.4 1.016-1.539c.038-.959-.995-1.428-.995-1.428s5.038-1.221 5.556-1.341c.516-.12 1.32-.615 1.069-1.694-.249-1.08-1.204-1.118-1.697-1.003-.494.115-6.744 1.566-8.9 2.068l-1.439.334c-.54.127-.785-.11-.404-.512.508-.536.833-1.129.946-2.113.119-1.035-.232-2.313-.433-2.809-.374-.921-1.005-1.649-1.734-1.899-1.137-.39-1.945.321-1.542 1.561.604 1.854.208 3.375-.833 4.293-2.449 2.157-3.588 3.695-2.83 6.973.828 3.575 4.377 5.876 7.952 5.048l3.152-.681z"
	}), h("path", {
		fill: "#65471B",
		d: "M9.296 6.351c-.164-.088-.303-.224-.391-.399-.216-.428-.04-.927.393-1.112 4.266-1.831 7.699-.043 7.843.034.433.231.608.747.391 1.154-.216.405-.74.546-1.173.318-.123-.063-2.832-1.432-6.278.047-.257.109-.547.085-.785-.042zm12.135 3.75c-.156-.098-.286-.243-.362-.424-.187-.442.023-.927.468-1.084 4.381-1.536 7.685.48 7.823.567.415.26.555.787.312 1.178-.242.39-.776.495-1.191.238-.12-.072-2.727-1.621-6.267-.379-.266.091-.553.046-.783-.096z"
	})),
	image500 = h("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 36 36"
	}, h("path", {
		fill: "#FFCC4D",
		d: "M36 18c0 9.941-8.059 18-18 18-9.94 0-18-8.059-18-18C0 8.06 8.06 0 18 0c9.941 0 18 8.06 18 18"
	}), h("ellipse", {
		fill: "#664500",
		cx: "18",
		cy: "27",
		rx: "5",
		ry: "6"
	}), h("path", {
		fill: "#664500",
		d: "M5.999 11c-.208 0-.419-.065-.599-.2-.442-.331-.531-.958-.2-1.4C8.462 5.05 12.816 5 13 5c.552 0 1 .448 1 1 0 .551-.445.998-.996 1-.155.002-3.568.086-6.204 3.6-.196.262-.497.4-.801.4zm24.002 0c-.305 0-.604-.138-.801-.4-2.64-3.521-6.061-3.598-6.206-3.6-.55-.006-.994-.456-.991-1.005C22.006 5.444 22.45 5 23 5c.184 0 4.537.05 7.8 4.4.332.442.242 1.069-.2 1.4-.18.135-.39.2-.599.2zm-16.087 4.5l1.793-1.793c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0L12.5 14.086l-1.793-1.793c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414l1.793 1.793-1.793 1.793c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l1.793-1.793 1.793 1.793c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023 0-1.414L13.914 15.5zm11 0l1.793-1.793c.391-.391.391-1.023 0-1.414s-1.023-.391-1.414 0L23.5 14.086l-1.793-1.793c-.391-.391-1.023-.391-1.414 0s-.391 1.023 0 1.414l1.793 1.793-1.793 1.793c-.391.391-.391 1.023 0 1.414.195.195.451.293.707.293s.512-.098.707-.293l1.793-1.793 1.793 1.793c.195.195.451.293.707.293s.512-.098.707-.293c.391-.391.391-1.023 0-1.414L24.914 15.5z"
	})),
	image418 = h("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 36 36"
	}, h("ellipse", {
		fill: "#292F33",
		cx: "18",
		cy: "26",
		rx: "18",
		ry: "10"
	}), h("ellipse", {
		fill: "#66757F",
		cx: "18",
		cy: "24",
		rx: "18",
		ry: "10"
	}), h("path", {
		fill: "#E1E8ED",
		d: "M18 31C3.042 31 1 16 1 12h34c0 2-1.958 19-17 19z"
	}), h("path", {
		fill: "#77B255",
		d: "M35 12.056c0 5.216-7.611 9.444-17 9.444S1 17.271 1 12.056C1 6.84 8.611 3.611 18 3.611s17 3.229 17 8.445z"
	}), h("ellipse", {
		fill: "#A6D388",
		cx: "18",
		cy: "13",
		rx: "15",
		ry: "7"
	}), h("path", {
		d: "M21 17c-.256 0-.512-.098-.707-.293-2.337-2.337-2.376-4.885-.125-8.262.739-1.109.9-2.246.478-3.377-.461-1.236-1.438-1.996-1.731-2.077-.553 0-.958-.443-.958-.996 0-.552.491-.995 1.043-.995.997 0 2.395 1.153 3.183 2.625 1.034 1.933.91 4.039-.351 5.929-1.961 2.942-1.531 4.332-.125 5.738.391.391.391 1.023 0 1.414-.195.196-.451.294-.707.294zm-6-2c-.256 0-.512-.098-.707-.293-2.337-2.337-2.376-4.885-.125-8.262.727-1.091.893-2.083.494-2.947-.444-.961-1.431-1.469-1.684-1.499-.552 0-.989-.447-.989-1 0-.552.458-1 1.011-1 .997 0 2.585.974 3.36 2.423.481.899 1.052 2.761-.528 5.131-1.961 2.942-1.531 4.332-.125 5.738.391.391.391 1.023 0 1.414-.195.197-.451.295-.707.295z",
		fill: "#5C913B"
	})),
	image403 = h("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 36 36"
	}, h("path", {
		fill: "#EF9645",
		d: "M15.5 2.965c1.381 0 2.5 1.119 2.5 2.5v.005L20.5.465c1.381 0 2.5 1.119 2.5 2.5V4.25l2.5-1.535c1.381 0 2.5 1.119 2.5 2.5V8.75L29 18H15.458L15.5 2.965z"
	}), h("path", {
		fill: "#FFDC5D",
		d: "M4.625 16.219c1.381-.611 3.354.208 4.75 2.188.917 1.3 1.187 3.151 2.391 3.344.46.073 1.234-.313 1.234-1.397V4.5s0-2 2-2 2 2 2 2v11.633c0-.029 1-.064 1-.082V2s0-2 2-2 2 2 2 2v14.053c0 .017 1 .041 1 .069V4.25s0-2 2-2 2 2 2 2v12.638c0 .118 1 .251 1 .398V8.75s0-2 2-2 2 2 2 2V24c0 6.627-5.373 12-12 12-4.775 0-8.06-2.598-9.896-5.292C8.547 28.423 8.096 26.051 8 25.334c0 0-.123-1.479-1.156-2.865-1.469-1.969-2.5-3.156-3.125-3.866-.317-.359-.625-1.707.906-2.384z"
	})),
	style$7 = cB("result", `
 color: var(--n-text-color);
 line-height: var(--n-line-height);
 font-size: var(--n-font-size);
 transition:
 color .3s var(--n-bezier);
`, [cB("result-icon", `
 display: flex;
 justify-content: center;
 transition: color .3s var(--n-bezier);
 `, [cE("status-image", `
 font-size: var(--n-icon-size);
 width: 1em;
 height: 1em;
 `), cB("base-icon", `
 color: var(--n-icon-color);
 font-size: var(--n-icon-size);
 `)]), cB("result-content", {
		marginTop: "24px"
	}), cB("result-footer", `
 margin-top: 24px;
 text-align: center;
 `), cB("result-header", [cE("title", `
 margin-top: 16px;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 text-align: center;
 color: var(--n-title-text-color);
 font-size: var(--n-title-font-size);
 `), cE("description", `
 margin-top: 4px;
 text-align: center;
 font-size: var(--n-font-size);
 `)])]),
	iconRenderMap = {
		403: () => image403,
		404: () => image404,
		418: () => image418,
		500: () => image500,
		info: () => h(InfoIcon, null),
		success: () => h(SuccessIcon, null),
		warning: () => h(WarningIcon, null),
		error: () => h(ErrorIcon, null)
	},
	resultProps = Object.assign(Object.assign({}, useTheme.props), {
		size: {
			type: String,
			default: "medium"
		},
		status: {
			type: String,
			default: "info"
		},
		title: String,
		description: String
	}),
	NResult = defineComponent({
		name: "Result",
		props: resultProps,
		setup(e) {
			const {
				mergedClsPrefixRef: t,
				inlineThemeDisabled: n
			} = useConfig(e), o = useTheme("Result", "-result", style$7, resultLight, e, t), r = computed(() => {
				const {
					size: a,
					status: l
				} = e, {
					common: {
						cubicBezierEaseInOut: s
					},
					self: {
						textColor: u,
						lineHeight: d,
						titleTextColor: f,
						titleFontWeight: v,
						[createKey("iconColor", l)]: g,
						[createKey("fontSize", a)]: p,
						[createKey("titleFontSize", a)]: m,
						[createKey("iconSize", a)]: C
					}
				} = o.value;
				return {
					"--n-bezier": s,
					"--n-font-size": p,
					"--n-icon-size": C,
					"--n-line-height": d,
					"--n-text-color": u,
					"--n-title-font-size": m,
					"--n-title-font-weight": v,
					"--n-title-text-color": f,
					"--n-icon-color": g || ""
				}
			}), i = n ? useThemeClass("result", computed(() => {
				const {
					size: a,
					status: l
				} = e;
				let s = "";
				return a && (s += a[0]), l && (s += l[0]), s
			}), r, e) : void 0;
			return {
				mergedClsPrefix: t,
				cssVars: n ? void 0 : r,
				themeClass: i == null ? void 0 : i.themeClass,
				onRender: i == null ? void 0 : i.onRender
			}
		},
		render() {
			var e;
			const {
				status: t,
				$slots: n,
				mergedClsPrefix: o,
				onRender: r
			} = this;
			return r == null || r(), h("div", {
				class: [`${o}-result`, this.themeClass],
				style: this.cssVars
			}, h("div", {
				class: `${o}-result-icon`
			}, ((e = n.icon) === null || e === void 0 ? void 0 : e.call(n)) || h(NBaseIcon, {
				clsPrefix: o
			}, {
				default: () => iconRenderMap[t]()
			})), h("div", {
				class: `${o}-result-header`
			}, this.title ? h("div", {
				class: `${o}-result-header__title`
			}, this.title) : null, this.description ? h("div", {
				class: `${o}-result-header__description`
			}, this.description) : null), n.default && h("div", {
				class: `${o}-result-content`
			}, n), n.footer && h("div", {
				class: `${o}-result-footer`
			}, n.footer()))
		}
	}),
	style$6 = c$1([c$1("@keyframes spin-rotate", `
 from {
 transform: rotate(0);
 }
 to {
 transform: rotate(360deg);
 }
 `), cB("spin-container", `
 position: relative;
 `, [cB("spin-body", `
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 `, [fadeInTransition()])]), cB("spin-body", `
 display: inline-flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 `), cB("spin", `
 display: inline-flex;
 height: var(--n-size);
 width: var(--n-size);
 font-size: var(--n-size);
 color: var(--n-color);
 `, [cM("rotate", `
 animation: spin-rotate 2s linear infinite;
 `)]), cB("spin-description", `
 display: inline-block;
 font-size: var(--n-font-size);
 color: var(--n-text-color);
 transition: color .3s var(--n-bezier);
 margin-top: 8px;
 `), cB("spin-content", `
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 pointer-events: all;
 `, [cM("spinning", `
 user-select: none;
 -webkit-user-select: none;
 pointer-events: none;
 opacity: var(--n-opacity-spinning);
 `)])]),
	STROKE_WIDTH = {
		small: 20,
		medium: 18,
		large: 16
	},
	spinProps = Object.assign(Object.assign({}, useTheme.props), {
		contentClass: String,
		contentStyle: [Object, String],
		description: String,
		stroke: String,
		size: {
			type: [String, Number],
			default: "medium"
		},
		show: {
			type: Boolean,
			default: !0
		},
		strokeWidth: Number,
		rotate: {
			type: Boolean,
			default: !0
		},
		spinning: {
			type: Boolean,
			validator: () => !0,
			default: void 0
		},
		delay: Number
	}),
	NSpin = defineComponent({
		name: "Spin",
		props: spinProps,
		setup(e) {
			const {
				mergedClsPrefixRef: t,
				inlineThemeDisabled: n
			} = useConfig(e), o = useTheme("Spin", "-spin", style$6, spinLight, e, t), r = computed(() => {
				const {
					size: s
				} = e, {
					common: {
						cubicBezierEaseInOut: u
					},
					self: d
				} = o.value, {
					opacitySpinning: f,
					color: v,
					textColor: g
				} = d, p = typeof s == "number" ? pxfy(s) : d[createKey("size", s)];
				return {
					"--n-bezier": u,
					"--n-opacity-spinning": f,
					"--n-size": p,
					"--n-color": v,
					"--n-text-color": g
				}
			}), i = n ? useThemeClass("spin", computed(() => {
				const {
					size: s
				} = e;
				return typeof s == "number" ? String(s) : s[0]
			}), r, e) : void 0, a = useCompitable(e, ["spinning", "show"]), l = ref(!1);
			return watchEffect(s => {
				let u;
				if (a.value) {
					const {
						delay: d
					} = e;
					if (d) {
						u = window.setTimeout(() => {
							l.value = !0
						}, d), s(() => {
							clearTimeout(u)
						});
						return
					}
				}
				l.value = a.value
			}), {
				mergedClsPrefix: t,
				active: l,
				mergedStrokeWidth: computed(() => {
					const {
						strokeWidth: s
					} = e;
					if (s !== void 0) return s;
					const {
						size: u
					} = e;
					return STROKE_WIDTH[typeof u == "number" ? "medium" : u]
				}),
				cssVars: n ? void 0 : r,
				themeClass: i == null ? void 0 : i.themeClass,
				onRender: i == null ? void 0 : i.onRender
			}
		},
		render() {
			var e, t;
			const {
				$slots: n,
				mergedClsPrefix: o,
				description: r
			} = this, i = n.icon && this.rotate, a = (r || n.description) && h("div", {
				class: `${o}-spin-description`
			}, r || ((e = n.description) === null || e === void 0 ? void 0 : e.call(n))), l = n.icon ? h(
			"div", {
				class: [`${o}-spin-body`, this.themeClass]
			}, h("div", {
				class: [`${o}-spin`, i && `${o}-spin--rotate`],
				style: n.default ? "" : this.cssVars
			}, n.icon()), a) : h("div", {
				class: [`${o}-spin-body`, this.themeClass]
			}, h(NBaseLoading, {
				clsPrefix: o,
				style: n.default ? "" : this.cssVars,
				stroke: this.stroke,
				"stroke-width": this.mergedStrokeWidth,
				class: `${o}-spin`
			}), a);
			return (t = this.onRender) === null || t === void 0 || t.call(this), n.default ? h("div", {
				class: [`${o}-spin-container`, this.themeClass],
				style: this.cssVars
			}, h("div", {
				class: [`${o}-spin-content`, this.active && `${o}-spin-content--spinning`, this
					.contentClass
				],
				style: this.contentStyle
			}, n), h(Transition, {
				name: "fade-in-transition"
			}, {
				default: () => this.active ? l : null
			})) : l
		}
	}),
	style$5 = cB("switch", `
 height: var(--n-height);
 min-width: var(--n-width);
 vertical-align: middle;
 user-select: none;
 -webkit-user-select: none;
 display: inline-flex;
 outline: none;
 justify-content: center;
 align-items: center;
`, [cE("children-placeholder", `
 height: var(--n-rail-height);
 display: flex;
 flex-direction: column;
 overflow: hidden;
 pointer-events: none;
 visibility: hidden;
 `), cE("rail-placeholder", `
 display: flex;
 flex-wrap: none;
 `), cE("button-placeholder", `
 width: calc(1.75 * var(--n-rail-height));
 height: var(--n-rail-height);
 `), cB("base-loading", `
 position: absolute;
 top: 50%;
 left: 50%;
 transform: translateX(-50%) translateY(-50%);
 font-size: calc(var(--n-button-width) - 4px);
 color: var(--n-loading-color);
 transition: color .3s var(--n-bezier);
 `, [iconSwitchTransition({
		left: "50%",
		top: "50%",
		originalTransform: "translateX(-50%) translateY(-50%)"
	})]), cE("checked, unchecked", `
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
 box-sizing: border-box;
 position: absolute;
 white-space: nowrap;
 top: 0;
 bottom: 0;
 display: flex;
 align-items: center;
 line-height: 1;
 `), cE("checked", `
 right: 0;
 padding-right: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `), cE("unchecked", `
 left: 0;
 justify-content: flex-end;
 padding-left: calc(1.25 * var(--n-rail-height) - var(--n-offset));
 `), c$1("&:focus", [cE("rail", `
 box-shadow: var(--n-box-shadow-focus);
 `)]), cM("round", [cE("rail", "border-radius: calc(var(--n-rail-height) / 2);", [cE("button",
		"border-radius: calc(var(--n-button-height) / 2);")])]), cNotM("disabled", [cNotM("icon", [cM(
		"rubber-band", [cM("pressed", [cE("rail", [cE("button",
			"max-width: var(--n-button-width-pressed);")])]), cE("rail", [c$1("&:active", [
			cE("button", "max-width: var(--n-button-width-pressed);")
		])]), cM("active", [cM("pressed", [cE("rail", [cE("button",
			"left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));"
			)])]), cE("rail", [c$1("&:active", [cE("button",
			"left: calc(100% - var(--n-offset) - var(--n-button-width-pressed));"
			)])])])])])]), cM("active", [cE("rail", [cE("button",
		"left: calc(100% - var(--n-button-width) - var(--n-offset))")])]), cE("rail", `
 overflow: hidden;
 height: var(--n-rail-height);
 min-width: var(--n-rail-width);
 border-radius: var(--n-rail-border-radius);
 cursor: pointer;
 position: relative;
 transition:
 opacity .3s var(--n-bezier),
 background .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 background-color: var(--n-rail-color);
 `, [cE("button-icon", `
 color: var(--n-icon-color);
 transition: color .3s var(--n-bezier);
 font-size: calc(var(--n-button-height) - 4px);
 position: absolute;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 line-height: 1;
 `, [iconSwitchTransition()]), cE("button", `
 align-items: center; 
 top: var(--n-offset);
 left: var(--n-offset);
 height: var(--n-button-height);
 width: var(--n-button-width-pressed);
 max-width: var(--n-button-width);
 border-radius: var(--n-button-border-radius);
 background-color: var(--n-button-color);
 box-shadow: var(--n-button-box-shadow);
 box-sizing: border-box;
 cursor: inherit;
 content: "";
 position: absolute;
 transition:
 background-color .3s var(--n-bezier),
 left .3s var(--n-bezier),
 opacity .3s var(--n-bezier),
 max-width .3s var(--n-bezier),
 box-shadow .3s var(--n-bezier);
 `)]), cM("active", [cE("rail", "background-color: var(--n-rail-color-active);")]), cM("loading", [cE("rail", `
 cursor: wait;
 `)]), cM("disabled", [cE("rail", `
 cursor: not-allowed;
 opacity: .5;
 `)])]),
	switchProps = Object.assign(Object.assign({}, useTheme.props), {
		size: {
			type: String,
			default: "medium"
		},
		value: {
			type: [String, Number, Boolean],
			default: void 0
		},
		loading: Boolean,
		defaultValue: {
			type: [String, Number, Boolean],
			default: !1
		},
		disabled: {
			type: Boolean,
			default: void 0
		},
		round: {
			type: Boolean,
			default: !0
		},
		"onUpdate:value": [Function, Array],
		onUpdateValue: [Function, Array],
		checkedValue: {
			type: [String, Number, Boolean],
			default: !0
		},
		uncheckedValue: {
			type: [String, Number, Boolean],
			default: !1
		},
		railStyle: Function,
		rubberBand: {
			type: Boolean,
			default: !0
		},
		onChange: [Function, Array]
	});
let supportCssMax;
const NSwitch = defineComponent({
		name: "Switch",
		props: switchProps,
		setup(e) {
			supportCssMax === void 0 && (typeof CSS < "u" ? typeof CSS.supports < "u" ? supportCssMax = CSS
				.supports("width", "max(1px)") : supportCssMax = !1 : supportCssMax = !0);
			const {
				mergedClsPrefixRef: t,
				inlineThemeDisabled: n
			} = useConfig(e), o = useTheme("Switch", "-switch", style$5, switchLight, e, t), r = useFormItem(e), {
				mergedSizeRef: i,
				mergedDisabledRef: a
			} = r, l = ref(e.defaultValue), s = toRef(e, "value"), u = useMergedState(s, l), d = computed(() =>
				u.value === e.checkedValue), f = ref(!1), v = ref(!1), g = computed(() => {
				const {
					railStyle: B
				} = e;
				if (B) return B({
					focused: v.value,
					checked: d.value
				})
			});

			function p(B) {
				const {
					"onUpdate:value": T,
					onChange: M,
					onUpdateValue: E
				} = e, {
					nTriggerFormInput: $,
					nTriggerFormChange: _
				} = r;
				T && call(T, B), E && call(E, B), M && call(M, B), l.value = B, $(), _()
			}

			function m() {
				const {
					nTriggerFormFocus: B
				} = r;
				B()
			}

			function C() {
				const {
					nTriggerFormBlur: B
				} = r;
				B()
			}

			function b() {
				e.loading || a.value || (u.value !== e.checkedValue ? p(e.checkedValue) : p(e.uncheckedValue))
			}

			function x() {
				v.value = !0, m()
			}

			function S() {
				v.value = !1, C(), f.value = !1
			}

			function w(B) {
				e.loading || a.value || B.key === " " && (u.value !== e.checkedValue ? p(e.checkedValue) : p(e
					.uncheckedValue), f.value = !1)
			}

			function y(B) {
				e.loading || a.value || B.key === " " && (B.preventDefault(), f.value = !0)
			}
			const R = computed(() => {
					const {
						value: B
					} = i, {
						self: {
							opacityDisabled: T,
							railColor: M,
							railColorActive: E,
							buttonBoxShadow: $,
							buttonColor: _,
							boxShadowFocus: O,
							loadingColor: N,
							textColor: D,
							iconColor: F,
							[createKey("buttonHeight", B)]: j,
							[createKey("buttonWidth", B)]: J,
							[createKey("buttonWidthPressed", B)]: Q,
							[createKey("railHeight", B)]: re,
							[createKey("railWidth", B)]: L,
							[createKey("railBorderRadius", B)]: W,
							[createKey("buttonBorderRadius", B)]: ee
						},
						common: {
							cubicBezierEaseInOut: ie
						}
					} = o.value;
					let pe, oe, me;
					return supportCssMax ? (pe = `calc((${re} - ${j}) / 2)`, oe = `max(${re}, ${j})`, me =
						`max(${L}, calc(${L} + ${j} - ${re}))`) : (pe = pxfy((depx(re) - depx(j)) / 2), oe =
						pxfy(Math.max(depx(re), depx(j))), me = depx(re) > depx(j) ? L : pxfy(depx(L) +
							depx(j) - depx(re))), {
						"--n-bezier": ie,
						"--n-button-border-radius": ee,
						"--n-button-box-shadow": $,
						"--n-button-color": _,
						"--n-button-width": J,
						"--n-button-width-pressed": Q,
						"--n-button-height": j,
						"--n-height": oe,
						"--n-offset": pe,
						"--n-opacity-disabled": T,
						"--n-rail-border-radius": W,
						"--n-rail-color": M,
						"--n-rail-color-active": E,
						"--n-rail-height": re,
						"--n-rail-width": L,
						"--n-width": me,
						"--n-box-shadow-focus": O,
						"--n-loading-color": N,
						"--n-text-color": D,
						"--n-icon-color": F
					}
				}),
				k = n ? useThemeClass("switch", computed(() => i.value[0]), R, e) : void 0;
			return {
				handleClick: b,
				handleBlur: S,
				handleFocus: x,
				handleKeyup: w,
				handleKeydown: y,
				mergedRailStyle: g,
				pressed: f,
				mergedClsPrefix: t,
				mergedValue: u,
				checked: d,
				mergedDisabled: a,
				cssVars: n ? void 0 : R,
				themeClass: k == null ? void 0 : k.themeClass,
				onRender: k == null ? void 0 : k.onRender
			}
		},
		render() {
			const {
				mergedClsPrefix: e,
				mergedDisabled: t,
				checked: n,
				mergedRailStyle: o,
				onRender: r,
				$slots: i
			} = this;
			r == null || r();
			const {
				checked: a,
				unchecked: l,
				icon: s,
				"checked-icon": u,
				"unchecked-icon": d
			} = i, f = !(isSlotEmpty(s) && isSlotEmpty(u) && isSlotEmpty(d));
			return h("div", {
				role: "switch",
				"aria-checked": n,
				class: [`${e}-switch`, this.themeClass, f && `${e}-switch--icon`, n &&
					`${e}-switch--active`, t && `${e}-switch--disabled`, this.round &&
					`${e}-switch--round`, this.loading && `${e}-switch--loading`, this.pressed &&
					`${e}-switch--pressed`, this.rubberBand && `${e}-switch--rubber-band`
				],
				tabindex: this.mergedDisabled ? void 0 : 0,
				style: this.cssVars,
				onClick: this.handleClick,
				onFocus: this.handleFocus,
				onBlur: this.handleBlur,
				onKeyup: this.handleKeyup,
				onKeydown: this.handleKeydown
			}, h("div", {
				class: `${e}-switch__rail`,
				"aria-hidden": "true",
				style: o
			}, resolveWrappedSlot(a, v => resolveWrappedSlot(l, g => v || g ? h("div", {
				"aria-hidden": !0,
				class: `${e}-switch__children-placeholder`
			}, h("div", {
				class: `${e}-switch__rail-placeholder`
			}, h("div", {
				class: `${e}-switch__button-placeholder`
			}), v), h("div", {
				class: `${e}-switch__rail-placeholder`
			}, h("div", {
				class: `${e}-switch__button-placeholder`
			}), g)) : null)), h("div", {
				class: `${e}-switch__button`
			}, resolveWrappedSlot(s, v => resolveWrappedSlot(u, g => resolveWrappedSlot(d, p => h(
				NIconSwitchTransition, null, {
					default: () => this.loading ? h(NBaseLoading, {
						key: "loading",
						clsPrefix: e,
						strokeWidth: 20
					}) : this.checked && (g || v) ? h("div", {
						class: `${e}-switch__button-icon`,
						key: g ? "checked-icon" : "icon"
					}, g || v) : !this.checked && (p || v) ? h("div", {
						class: `${e}-switch__button-icon`,
						key: p ? "unchecked-icon" : "icon"
					}, p || v) : null
				})))), resolveWrappedSlot(a, v => v && h("div", {
				key: "checked",
				class: `${e}-switch__checked`
			}, v)), resolveWrappedSlot(l, v => v && h("div", {
				key: "unchecked",
				class: `${e}-switch__unchecked`
			}, v)))))
		}
	}),
	style$4 = c$1([cB("table", `
 font-size: var(--n-font-size);
 font-variant-numeric: tabular-nums;
 line-height: var(--n-line-height);
 width: 100%;
 border-radius: var(--n-border-radius) var(--n-border-radius) 0 0;
 text-align: left;
 border-collapse: separate;
 border-spacing: 0;
 overflow: hidden;
 background-color: var(--n-td-color);
 border-color: var(--n-merged-border-color);
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 --n-merged-border-color: var(--n-border-color);
 `, [c$1("th", `
 white-space: nowrap;
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 text-align: inherit;
 padding: var(--n-th-padding);
 vertical-align: inherit;
 text-transform: none;
 border: 0px solid var(--n-merged-border-color);
 font-weight: var(--n-th-font-weight);
 color: var(--n-th-text-color);
 background-color: var(--n-th-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 `, [c$1("&:last-child", `
 border-right: 0px solid var(--n-merged-border-color);
 `)]), c$1("td", `
 transition:
 background-color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 color .3s var(--n-bezier);
 padding: var(--n-td-padding);
 color: var(--n-td-text-color);
 background-color: var(--n-td-color);
 border: 0px solid var(--n-merged-border-color);
 border-right: 1px solid var(--n-merged-border-color);
 border-bottom: 1px solid var(--n-merged-border-color);
 `, [c$1("&:last-child", `
 border-right: 0px solid var(--n-merged-border-color);
 `)]), cM("bordered", `
 border: 1px solid var(--n-merged-border-color);
 border-radius: var(--n-border-radius);
 `, [c$1("tr", [c$1("&:last-child", [c$1("td", `
 border-bottom: 0 solid var(--n-merged-border-color);
 `)])])]), cM("single-line", [c$1("th", `
 border-right: 0px solid var(--n-merged-border-color);
 `), c$1("td", `
 border-right: 0px solid var(--n-merged-border-color);
 `)]), cM("single-column", [c$1("tr", [c$1("&:not(:last-child)", [c$1("td", `
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])]), cM("striped", [c$1("tr:nth-of-type(even)", [c$1("td", "background-color: var(--n-td-color-striped)")])]),
		cNotM("bottom-bordered", [c$1("tr", [c$1("&:last-child", [c$1("td", `
 border-bottom: 0px solid var(--n-merged-border-color);
 `)])])])
	]), insideModal(cB("table", `
 background-color: var(--n-td-color-modal);
 --n-merged-border-color: var(--n-border-color-modal);
 `, [c$1("th", `
 background-color: var(--n-th-color-modal);
 `), c$1("td", `
 background-color: var(--n-td-color-modal);
 `)])), insidePopover(cB("table", `
 background-color: var(--n-td-color-popover);
 --n-merged-border-color: var(--n-border-color-popover);
 `, [c$1("th", `
 background-color: var(--n-th-color-popover);
 `), c$1("td", `
 background-color: var(--n-td-color-popover);
 `)]))]),
	tableProps = Object.assign(Object.assign({}, useTheme.props), {
		bordered: {
			type: Boolean,
			default: !0
		},
		bottomBordered: {
			type: Boolean,
			default: !0
		},
		singleLine: {
			type: Boolean,
			default: !0
		},
		striped: Boolean,
		singleColumn: Boolean,
		size: {
			type: String,
			default: "medium"
		}
	}),
	NTable = defineComponent({
		name: "Table",
		props: tableProps,
		setup(e) {
			const {
				mergedClsPrefixRef: t,
				inlineThemeDisabled: n,
				mergedRtlRef: o
			} = useConfig(e), r = useTheme("Table", "-table", style$4, tableLight, e, t), i = useRtl("Table", o, t),
				a = computed(() => {
					const {
						size: s
					} = e, {
						self: {
							borderColor: u,
							tdColor: d,
							tdColorModal: f,
							tdColorPopover: v,
							thColor: g,
							thColorModal: p,
							thColorPopover: m,
							thTextColor: C,
							tdTextColor: b,
							borderRadius: x,
							thFontWeight: S,
							lineHeight: w,
							borderColorModal: y,
							borderColorPopover: R,
							tdColorStriped: k,
							tdColorStripedModal: B,
							tdColorStripedPopover: T,
							[createKey("fontSize", s)]: M,
							[createKey("tdPadding", s)]: E,
							[createKey("thPadding", s)]: $
						},
						common: {
							cubicBezierEaseInOut: _
						}
					} = r.value;
					return {
						"--n-bezier": _,
						"--n-td-color": d,
						"--n-td-color-modal": f,
						"--n-td-color-popover": v,
						"--n-td-text-color": b,
						"--n-border-color": u,
						"--n-border-color-modal": y,
						"--n-border-color-popover": R,
						"--n-border-radius": x,
						"--n-font-size": M,
						"--n-th-color": g,
						"--n-th-color-modal": p,
						"--n-th-color-popover": m,
						"--n-th-font-weight": S,
						"--n-th-text-color": C,
						"--n-line-height": w,
						"--n-td-padding": E,
						"--n-th-padding": $,
						"--n-td-color-striped": k,
						"--n-td-color-striped-modal": B,
						"--n-td-color-striped-popover": T
					}
				}), l = n ? useThemeClass("table", computed(() => e.size[0]), a, e) : void 0;
			return {
				rtlEnabled: i,
				mergedClsPrefix: t,
				cssVars: n ? void 0 : a,
				themeClass: l == null ? void 0 : l.themeClass,
				onRender: l == null ? void 0 : l.onRender
			}
		},
		render() {
			var e;
			const {
				mergedClsPrefix: t
			} = this;
			return (e = this.onRender) === null || e === void 0 || e.call(this), h("table", {
				class: [`${t}-table`, this.themeClass, {
					[`${t}-table--rtl`]: this.rtlEnabled,
					[`${t}-table--bottom-bordered`]: this.bottomBordered,
					[`${t}-table--bordered`]: this.bordered,
					[`${t}-table--single-line`]: this.singleLine,
					[`${t}-table--single-column`]: this.singleColumn,
					[`${t}-table--striped`]: this.striped
				}],
				style: this.cssVars
			}, this.$slots)
		}
	}),
	style$3 = cB("thing", `
 display: flex;
 transition: color .3s var(--n-bezier);
 font-size: var(--n-font-size);
 color: var(--n-text-color);
`, [cB("thing-avatar", `
 margin-right: 12px;
 margin-top: 2px;
 `), cB("thing-avatar-header-wrapper", `
 display: flex;
 flex-wrap: nowrap;
 `, [cB("thing-header-wrapper", `
 flex: 1;
 `)]), cB("thing-main", `
 flex-grow: 1;
 `, [cB("thing-header", `
 display: flex;
 margin-bottom: 4px;
 justify-content: space-between;
 align-items: center;
 `, [cE("title", `
 font-size: 16px;
 font-weight: var(--n-title-font-weight);
 transition: color .3s var(--n-bezier);
 color: var(--n-title-text-color);
 `)]), cE("description", [c$1("&:not(:last-child)", `
 margin-bottom: 4px;
 `)]), cE("content", [c$1("&:not(:first-child)", `
 margin-top: 12px;
 `)]), cE("footer", [c$1("&:not(:first-child)", `
 margin-top: 12px;
 `)]), cE("action", [c$1("&:not(:first-child)", `
 margin-top: 12px;
 `)])])]),
	thingProps = Object.assign(Object.assign({}, useTheme.props), {
		title: String,
		titleExtra: String,
		description: String,
		descriptionClass: String,
		descriptionStyle: [String, Object],
		content: String,
		contentClass: String,
		contentStyle: [String, Object],
		contentIndented: Boolean
	}),
	NThing = defineComponent({
		name: "Thing",
		props: thingProps,
		setup(e, {
			slots: t
		}) {
			const {
				mergedClsPrefixRef: n,
				inlineThemeDisabled: o,
				mergedRtlRef: r
			} = useConfig(e), i = useTheme("Thing", "-thing", style$3, thingLight, e, n), a = useRtl("Thing", r, n),
				l = computed(() => {
					const {
						self: {
							titleTextColor: u,
							textColor: d,
							titleFontWeight: f,
							fontSize: v
						},
						common: {
							cubicBezierEaseInOut: g
						}
					} = i.value;
					return {
						"--n-bezier": g,
						"--n-font-size": v,
						"--n-text-color": d,
						"--n-title-font-weight": f,
						"--n-title-text-color": u
					}
				}), s = o ? useThemeClass("thing", void 0, l, e) : void 0;
			return () => {
				var u;
				const {
					value: d
				} = n, f = a ? a.value : !1;
				return (u = s == null ? void 0 : s.onRender) === null || u === void 0 || u.call(s), h("div", {
					class: [`${d}-thing`, s == null ? void 0 : s.themeClass, f && `${d}-thing--rtl`],
					style: o ? void 0 : l.value
				}, t.avatar && e.contentIndented ? h("div", {
					class: `${d}-thing-avatar`
				}, t.avatar()) : null, h("div", {
						class: `${d}-thing-main`
					}, !e.contentIndented && (t.header || e.title || t["header-extra"] || e
						.titleExtra || t.avatar) ? h("div", {
							class: `${d}-thing-avatar-header-wrapper`
						}, t.avatar ? h("div", {
							class: `${d}-thing-avatar`
						}, t.avatar()) : null, t.header || e.title || t["header-extra"] || e
						.titleExtra ? h("div", {
								class: `${d}-thing-header-wrapper`
							}, h("div", {
									class: `${d}-thing-header`
								}, t.header || e.title ? h("div", {
									class: `${d}-thing-header__title`
								}, t.header ? t.header() : e.title) : null, t["header-extra"] || e
								.titleExtra ? h("div", {
									class: `${d}-thing-header__extra`
								}, t["header-extra"] ? t["header-extra"]() : e.titleExtra) : null), t
							.description || e.description ? h("div", {
								class: [`${d}-thing-main__description`, e.descriptionClass],
								style: e.descriptionStyle
							}, t.description ? t.description() : e.description) : null) : null) : h(
						Fragment, null, t.header || e.title || t["header-extra"] || e.titleExtra ? h(
							"div", {
								class: `${d}-thing-header`
							}, t.header || e.title ? h("div", {
								class: `${d}-thing-header__title`
							}, t.header ? t.header() : e.title) : null, t["header-extra"] || e
							.titleExtra ? h("div", {
								class: `${d}-thing-header__extra`
							}, t["header-extra"] ? t["header-extra"]() : e.titleExtra) : null) : null, t
						.description || e.description ? h("div", {
							class: [`${d}-thing-main__description`, e.descriptionClass],
							style: e.descriptionStyle
						}, t.description ? t.description() : e.description) : null), t.default || e
					.content ? h("div", {
						class: [`${d}-thing-main__content`, e.contentClass],
						style: e.contentStyle
					}, t.default ? t.default() : e.content) : null, t.footer ? h("div", {
						class: `${d}-thing-main__footer`
					}, t.footer()) : null, t.action ? h("div", {
						class: `${d}-thing-main__action`
					}, t.action()) : null))
			}
		}
	}),
	style$2 = cB("a", `
 cursor: pointer;
 transition:
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier);
 text-decoration-color: var(--n-text-color);
 color: var(--n-text-color);
`),
	aProps = Object.assign({}, useTheme.props),
	NA = defineComponent({
		name: "A",
		props: aProps,
		setup(e) {
			const {
				mergedClsPrefixRef: t,
				inlineThemeDisabled: n
			} = useConfig(e), o = useTheme("Typography", "-a", style$2, typographyLight, e, t), r = computed(() => {
				const {
					common: {
						cubicBezierEaseInOut: a
					},
					self: {
						aTextColor: l
					}
				} = o.value;
				return {
					"--n-text-color": l,
					"--n-bezier": a
				}
			}), i = n ? useThemeClass("a", void 0, r, e) : void 0;
			return {
				mergedClsPrefix: t,
				cssVars: n ? void 0 : r,
				themeClass: i == null ? void 0 : i.themeClass,
				onRender: i == null ? void 0 : i.onRender
			}
		},
		render() {
			var e;
			return (e = this.onRender) === null || e === void 0 || e.call(this), h("a", {
				class: [`${this.mergedClsPrefix}-a`, this.themeClass],
				style: this.cssVars
			}, this.$slots)
		}
	}),
	style$1 = cB("p", `
 box-sizing: border-box;
 transition: color .3s var(--n-bezier);
 margin: var(--n-margin);
 font-size: var(--n-font-size);
 line-height: var(--n-line-height);
 color: var(--n-text-color);
`, [c$1("&:first-child", "margin-top: 0;"), c$1("&:last-child", "margin-bottom: 0;")]),
	pProps = Object.assign(Object.assign({}, useTheme.props), {
		depth: [String, Number]
	}),
	NP = defineComponent({
		name: "P",
		props: pProps,
		setup(e) {
			const {
				mergedClsPrefixRef: t,
				inlineThemeDisabled: n
			} = useConfig(e), o = useTheme("Typography", "-p", style$1, typographyLight, e, t), r = computed(() => {
				const {
					depth: a
				} = e, l = a || "1", {
					common: {
						cubicBezierEaseInOut: s
					},
					self: {
						pFontSize: u,
						pLineHeight: d,
						pMargin: f,
						pTextColor: v,
						[`pTextColor${l}Depth`]: g
					}
				} = o.value;
				return {
					"--n-bezier": s,
					"--n-font-size": u,
					"--n-line-height": d,
					"--n-margin": f,
					"--n-text-color": a === void 0 ? v : g
				}
			}), i = n ? useThemeClass("p", computed(() => `${e.depth||""}`), r, e) : void 0;
			return {
				mergedClsPrefix: t,
				cssVars: n ? void 0 : r,
				themeClass: i == null ? void 0 : i.themeClass,
				onRender: i == null ? void 0 : i.onRender
			}
		},
		render() {
			var e;
			return (e = this.onRender) === null || e === void 0 || e.call(this), h("p", {
				class: [`${this.mergedClsPrefix}-p`, this.themeClass],
				style: this.cssVars
			}, this.$slots)
		}
	}),
	uploadInjectionKey = createInjectionKey("n-upload"),
	uploadDraggerKey = "__UPLOAD_DRAGGER__",
	NUploadDragger = defineComponent({
		name: "UploadDragger",
		[uploadDraggerKey]: !0,
		setup(e, {
			slots: t
		}) {
			const n = inject(uploadInjectionKey, null);
			return n || throwError("upload-dragger", "`n-upload-dragger` must be placed inside `n-upload`."),
		() => {
				const {
					mergedClsPrefixRef: {
						value: o
					},
					mergedDisabledRef: {
						value: r
					},
					maxReachedRef: {
						value: i
					}
				} = n;
				return h("div", {
					class: [`${o}-upload-dragger`, (r || i) && `${o}-upload-dragger--disabled`]
				}, t)
			}
		}
	});
var __awaiter$2 = globalThis && globalThis.__awaiter || function(e, t, n, o) {
	function r(i) {
		return i instanceof n ? i : new n(function(a) {
			a(i)
		})
	}
	return new(n || (n = Promise))(function(i, a) {
		function l(d) {
			try {
				u(o.next(d))
			} catch (f) {
				a(f)
			}
		}

		function s(d) {
			try {
				u(o.throw(d))
			} catch (f) {
				a(f)
			}
		}

		function u(d) {
			d.done ? i(d.value) : r(d.value).then(l, s)
		}
		u((o = o.apply(e, t || [])).next())
	})
};
const isImageFileType = e => e.includes("image/"),
	getExtname = (e = "") => {
		const t = e.split("/"),
			o = t[t.length - 1].split(/#|\?/)[0];
		return (/\.[^./\\]*$/.exec(o) || [""])[0]
	},
	imageExtensionRegex = /(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico)$/i,
	isImageFile = e => {
		if (e.type) return isImageFileType(e.type);
		const t = getExtname(e.name || "");
		if (imageExtensionRegex.test(t)) return !0;
		const n = e.thumbnailUrl || e.url || "",
			o = getExtname(n);
		return !!(/^data:image\//.test(n) || imageExtensionRegex.test(o))
	};

function createImageDataUrl(e) {
	return __awaiter$2(this, void 0, void 0, function*() {
		return yield new Promise(t => {
			if (!e.type || !isImageFileType(e.type)) {
				t("");
				return
			}
			t(window.URL.createObjectURL(e))
		})
	})
}
const environmentSupportFile = isBrowser$1 && window.FileReader && window.File;

function isFileSystemDirectoryEntry(e) {
	return e.isDirectory
}

function isFileSystemFileEntry(e) {
	return e.isFile
}

function getFilesFromEntries(e, t) {
	return __awaiter$2(this, void 0, void 0, function*() {
		const n = [];

		function o(r) {
			return __awaiter$2(this, void 0, void 0, function*() {
				for (const i of r)
					if (i) {
						if (t && isFileSystemDirectoryEntry(i)) {
							const a = i.createReader();
							try {
								const l = yield new Promise((s, u) => {
									a.readEntries(s, u)
								});
								yield o(l)
							} catch {}
						} else if (isFileSystemFileEntry(i)) try {
							const a = yield new Promise((l, s) => {
								i.file(l, s)
							});
							n.push({
								file: a,
								entry: i,
								source: "dnd"
							})
						} catch {}
					}
			})
		}
		return yield o(e), n
	})
}

function createSettledFileInfo(e) {
	const {
		id: t,
		name: n,
		percentage: o,
		status: r,
		url: i,
		file: a,
		thumbnailUrl: l,
		type: s,
		fullPath: u,
		batchId: d
	} = e;
	return {
		id: t,
		name: n,
		percentage: o ?? null,
		status: r,
		url: i ?? null,
		file: a ?? null,
		thumbnailUrl: l ?? null,
		type: s ?? null,
		fullPath: u ?? null,
		batchId: d ?? null
	}
}

function matchType(e, t, n) {
	return e = e.toLowerCase(), t = t.toLocaleLowerCase(), n = n.toLocaleLowerCase(), n.split(",").map(r => r.trim())
		.filter(Boolean).some(r => {
			if (r.startsWith(".")) {
				if (e.endsWith(r)) return !0
			} else if (r.includes("/")) {
				const [i, a] = t.split("/"), [l, s] = r.split("/");
				if ((l === "*" || i && l && l === i) && (s === "*" || a && s && s === a)) return !0
			} else return !0;
			return !1
		})
}
const NUploadTrigger = defineComponent({
		name: "UploadTrigger",
		props: {
			abstract: Boolean
		},
		setup(e, {
			slots: t
		}) {
			const n = inject(uploadInjectionKey, null);
			n || throwError("upload-trigger", "`n-upload-trigger` must be placed inside `n-upload`.");
			const {
				mergedClsPrefixRef: o,
				mergedDisabledRef: r,
				maxReachedRef: i,
				listTypeRef: a,
				dragOverRef: l,
				openOpenFileDialog: s,
				draggerInsideRef: u,
				handleFileAddition: d,
				mergedDirectoryDndRef: f,
				triggerClassRef: v,
				triggerStyleRef: g
			} = n, p = computed(() => a.value === "image-card");

			function m() {
				r.value || i.value || s()
			}

			function C(w) {
				w.preventDefault(), l.value = !0
			}

			function b(w) {
				w.preventDefault(), l.value = !0
			}

			function x(w) {
				w.preventDefault(), l.value = !1
			}

			function S(w) {
				var y;
				if (w.preventDefault(), !u.value || r.value || i.value) {
					l.value = !1;
					return
				}
				const R = (y = w.dataTransfer) === null || y === void 0 ? void 0 : y.items;
				R != null && R.length ? getFilesFromEntries(Array.from(R).map(k => k.webkitGetAsEntry()), f.value)
					.then(k => {
						d(k)
					}).finally(() => {
						l.value = !1
					}) : l.value = !1
			}
			return () => {
				var w;
				const {
					value: y
				} = o;
				return e.abstract ? (w = t.default) === null || w === void 0 ? void 0 : w.call(t, {
					handleClick: m,
					handleDrop: S,
					handleDragOver: C,
					handleDragEnter: b,
					handleDragLeave: x
				}) : h("div", {
					class: [`${y}-upload-trigger`, (r.value || i.value) &&
						`${y}-upload-trigger--disabled`, p.value &&
						`${y}-upload-trigger--image-card`, v.value
					],
					style: g.value,
					onClick: m,
					onDrop: S,
					onDragover: C,
					onDragenter: b,
					onDragleave: x
				}, p.value ? h(NUploadDragger, null, {
					default: () => resolveSlot(t.default, () => [h(NBaseIcon, {
						clsPrefix: y
					}, {
						default: () => h(AddIcon, null)
					})])
				}) : t)
			}
		}
	}),
	NUploadProgress = defineComponent({
		name: "UploadProgress",
		props: {
			show: Boolean,
			percentage: {
				type: Number,
				required: !0
			},
			status: {
				type: String,
				required: !0
			}
		},
		setup() {
			return {
				mergedTheme: inject(uploadInjectionKey).mergedThemeRef
			}
		},
		render() {
			return h(NFadeInExpandTransition, null, {
				default: () => this.show ? h(NProgress, {
					type: "line",
					showIndicator: !1,
					percentage: this.percentage,
					status: this.status,
					height: 2,
					theme: this.mergedTheme.peers.Progress,
					themeOverrides: this.mergedTheme.peerOverrides.Progress
				}) : null
			})
		}
	}),
	imageIcon = h("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 28 28"
	}, h("g", {
		fill: "none"
	}, h("path", {
		d: "M21.75 3A3.25 3.25 0 0 1 25 6.25v15.5A3.25 3.25 0 0 1 21.75 25H6.25A3.25 3.25 0 0 1 3 21.75V6.25A3.25 3.25 0 0 1 6.25 3h15.5zm.583 20.4l-7.807-7.68a.75.75 0 0 0-.968-.07l-.084.07l-7.808 7.68c.183.065.38.1.584.1h15.5c.204 0 .4-.035.583-.1l-7.807-7.68l7.807 7.68zM21.75 4.5H6.25A1.75 1.75 0 0 0 4.5 6.25v15.5c0 .208.036.408.103.593l7.82-7.692a2.25 2.25 0 0 1 3.026-.117l.129.117l7.82 7.692c.066-.185.102-.385.102-.593V6.25a1.75 1.75 0 0 0-1.75-1.75zm-3.25 3a2.5 2.5 0 1 1 0 5a2.5 2.5 0 0 1 0-5zm0 1.5a1 1 0 1 0 0 2a1 1 0 0 0 0-2z",
		fill: "currentColor"
	}))),
	documentIcon = h("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		viewBox: "0 0 28 28"
	}, h("g", {
		fill: "none"
	}, h("path", {
		d: "M6.4 2A2.4 2.4 0 0 0 4 4.4v19.2A2.4 2.4 0 0 0 6.4 26h15.2a2.4 2.4 0 0 0 2.4-2.4V11.578c0-.729-.29-1.428-.805-1.944l-6.931-6.931A2.4 2.4 0 0 0 14.567 2H6.4zm-.9 2.4a.9.9 0 0 1 .9-.9H14V10a2 2 0 0 0 2 2h6.5v11.6a.9.9 0 0 1-.9.9H6.4a.9.9 0 0 1-.9-.9V4.4zm16.44 6.1H16a.5.5 0 0 1-.5-.5V4.06l6.44 6.44z",
		fill: "currentColor"
	})));
var __awaiter$1 = globalThis && globalThis.__awaiter || function(e, t, n, o) {
	function r(i) {
		return i instanceof n ? i : new n(function(a) {
			a(i)
		})
	}
	return new(n || (n = Promise))(function(i, a) {
		function l(d) {
			try {
				u(o.next(d))
			} catch (f) {
				a(f)
			}
		}

		function s(d) {
			try {
				u(o.throw(d))
			} catch (f) {
				a(f)
			}
		}

		function u(d) {
			d.done ? i(d.value) : r(d.value).then(l, s)
		}
		u((o = o.apply(e, t || [])).next())
	})
};
const buttonThemeOverrides = {
		paddingMedium: "0 3px",
		heightMedium: "24px",
		iconSizeMedium: "18px"
	},
	NUploadFile = defineComponent({
		name: "UploadFile",
		props: {
			clsPrefix: {
				type: String,
				required: !0
			},
			file: {
				type: Object,
				required: !0
			},
			listType: {
				type: String,
				required: !0
			},
			index: {
				type: Number,
				required: !0
			}
		},
		setup(e) {
			const t = inject(uploadInjectionKey),
				n = ref(null),
				o = ref(""),
				r = computed(() => {
					const {
						file: y
					} = e;
					return y.status === "finished" ? "success" : y.status === "error" ? "error" : "info"
				}),
				i = computed(() => {
					const {
						file: y
					} = e;
					if (y.status === "error") return "error"
				}),
				a = computed(() => {
					const {
						file: y
					} = e;
					return y.status === "uploading"
				}),
				l = computed(() => {
					if (!t.showCancelButtonRef.value) return !1;
					const {
						file: y
					} = e;
					return ["uploading", "pending", "error"].includes(y.status)
				}),
				s = computed(() => {
					if (!t.showRemoveButtonRef.value) return !1;
					const {
						file: y
					} = e;
					return ["finished"].includes(y.status)
				}),
				u = computed(() => {
					if (!t.showDownloadButtonRef.value) return !1;
					const {
						file: y
					} = e;
					return ["finished"].includes(y.status)
				}),
				d = computed(() => {
					if (!t.showRetryButtonRef.value) return !1;
					const {
						file: y
					} = e;
					return ["error"].includes(y.status)
				}),
				f = useMemo(() => o.value || e.file.thumbnailUrl || e.file.url),
				v = computed(() => {
					if (!t.showPreviewButtonRef.value) return !1;
					const {
						file: {
							status: y
						},
						listType: R
					} = e;
					return ["finished"].includes(y) && f.value && R === "image-card"
				});

			function g() {
				t.submit(e.file.id)
			}

			function p(y) {
				y.preventDefault();
				const {
					file: R
				} = e;
				["finished", "pending", "error"].includes(R.status) ? C(R) : ["uploading"].includes(R.status) ? x(
					R) : warn("upload", "The button clicked type is unknown.")
			}

			function m(y) {
				y.preventDefault(), b(e.file)
			}

			function C(y) {
				const {
					xhrMap: R,
					doChange: k,
					onRemoveRef: {
						value: B
					},
					mergedFileListRef: {
						value: T
					}
				} = t;
				Promise.resolve(B ? B({
					file: Object.assign({}, y),
					fileList: T,
					index: e.index
				}) : !0).then(M => {
					if (M === !1) return;
					const E = Object.assign({}, y, {
						status: "removed"
					});
					R.delete(y.id), k(E, void 0, {
						remove: !0
					})
				})
			}

			function b(y) {
				const {
					onDownloadRef: {
						value: R
					}
				} = t;
				Promise.resolve(R ? R(Object.assign({}, y)) : !0).then(k => {
					k !== !1 && download(y.url, y.name)
				})
			}

			function x(y) {
				const {
					xhrMap: R
				} = t, k = R.get(y.id);
				k == null || k.abort(), C(Object.assign({}, y))
			}

			function S() {
				const {
					onPreviewRef: {
						value: y
					}
				} = t;
				if (y) y(e.file);
				else if (e.listType === "image-card") {
					const {
						value: R
					} = n;
					if (!R) return;
					R.click()
				}
			}
			const w = () => __awaiter$1(this, void 0, void 0, function*() {
				const {
					listType: y
				} = e;
				y !== "image" && y !== "image-card" || t.shouldUseThumbnailUrlRef.value(e.file) && (o
					.value = yield t.getFileThumbnailUrlResolver(e.file))
			});
			return watchEffect(() => {
				w()
			}), {
				mergedTheme: t.mergedThemeRef,
				progressStatus: r,
				buttonType: i,
				showProgress: a,
				disabled: t.mergedDisabledRef,
				showCancelButton: l,
				showRemoveButton: s,
				showDownloadButton: u,
				showRetryButton: d,
				showPreviewButton: v,
				mergedThumbnailUrl: f,
				shouldUseThumbnailUrl: t.shouldUseThumbnailUrlRef,
				renderIcon: t.renderIconRef,
				imageRef: n,
				handleRemoveOrCancelClick: p,
				handleDownloadClick: m,
				handleRetryClick: g,
				handlePreviewClick: S
			}
		},
		render() {
			const {
				clsPrefix: e,
				mergedTheme: t,
				listType: n,
				file: o,
				renderIcon: r
			} = this;
			let i;
			const a = n === "image";
			a || n === "image-card" ? i = !this.shouldUseThumbnailUrl(o) || !this.mergedThumbnailUrl ? h("span", {
				class: `${e}-upload-file-info__thumbnail`
			}, r ? r(o) : isImageFile(o) ? h(NBaseIcon, {
				clsPrefix: e
			}, {
				default: () => imageIcon
			}) : h(NBaseIcon, {
				clsPrefix: e
			}, {
				default: () => documentIcon
			})) : h("a", {
				rel: "noopener noreferer",
				target: "_blank",
				href: o.url || void 0,
				class: `${e}-upload-file-info__thumbnail`,
				onClick: this.handlePreviewClick
			}, n === "image-card" ? h(NImage, {
				src: this.mergedThumbnailUrl || void 0,
				previewSrc: o.url || void 0,
				alt: o.name,
				ref: "imageRef"
			}) : h("img", {
				src: this.mergedThumbnailUrl || void 0,
				alt: o.name
			})) : i = h("span", {
				class: `${e}-upload-file-info__thumbnail`
			}, r ? r(o) : h(NBaseIcon, {
				clsPrefix: e
			}, {
				default: () => h(AttachIcon, null)
			}));
			const s = h(NUploadProgress, {
					show: this.showProgress,
					percentage: o.percentage || 0,
					status: this.progressStatus
				}),
				u = n === "text" || n === "image";
			return h("div", {
				class: [`${e}-upload-file`, `${e}-upload-file--${this.progressStatus}-status`, o.url && o
					.status !== "error" && n !== "image-card" && `${e}-upload-file--with-url`,
					`${e}-upload-file--${n}-type`
				]
			}, h("div", {
				class: `${e}-upload-file-info`
			}, i, h("div", {
				class: `${e}-upload-file-info__name`
			}, u && (o.url && o.status !== "error" ? h("a", {
				rel: "noopener noreferer",
				target: "_blank",
				href: o.url || void 0,
				onClick: this.handlePreviewClick
			}, o.name) : h("span", {
				onClick: this.handlePreviewClick
			}, o.name)), a && s), h("div", {
				class: [`${e}-upload-file-info__action`, `${e}-upload-file-info__action--${n}-type`]
			}, this.showPreviewButton ? h(NButton, {
				key: "preview",
				quaternary: !0,
				type: this.buttonType,
				onClick: this.handlePreviewClick,
				theme: t.peers.Button,
				themeOverrides: t.peerOverrides.Button,
				builtinThemeOverrides: buttonThemeOverrides
			}, {
				icon: () => h(NBaseIcon, {
					clsPrefix: e
				}, {
					default: () => h(EyeIcon, null)
				})
			}) : null, (this.showRemoveButton || this.showCancelButton) && !this.disabled && h(
				NButton, {
					key: "cancelOrTrash",
					theme: t.peers.Button,
					themeOverrides: t.peerOverrides.Button,
					quaternary: !0,
					builtinThemeOverrides: buttonThemeOverrides,
					type: this.buttonType,
					onClick: this.handleRemoveOrCancelClick
				}, {
					icon: () => h(NIconSwitchTransition, null, {
						default: () => this.showRemoveButton ? h(NBaseIcon, {
							clsPrefix: e,
							key: "trash"
						}, {
							default: () => h(TrashIcon, null)
						}) : h(NBaseIcon, {
							clsPrefix: e,
							key: "cancel"
						}, {
							default: () => h(CancelIcon, null)
						})
					})
				}), this.showRetryButton && !this.disabled && h(NButton, {
				key: "retry",
				quaternary: !0,
				type: this.buttonType,
				onClick: this.handleRetryClick,
				theme: t.peers.Button,
				themeOverrides: t.peerOverrides.Button,
				builtinThemeOverrides: buttonThemeOverrides
			}, {
				icon: () => h(NBaseIcon, {
					clsPrefix: e
				}, {
					default: () => h(RetryIcon, null)
				})
			}), this.showDownloadButton ? h(NButton, {
				key: "download",
				quaternary: !0,
				type: this.buttonType,
				onClick: this.handleDownloadClick,
				theme: t.peers.Button,
				themeOverrides: t.peerOverrides.Button,
				builtinThemeOverrides: buttonThemeOverrides
			}, {
				icon: () => h(NBaseIcon, {
					clsPrefix: e
				}, {
					default: () => h(DownloadIcon, null)
				})
			}) : null)), !a && s)
		}
	}),
	NUploadFileList = defineComponent({
		name: "UploadFileList",
		setup(e, {
			slots: t
		}) {
			const n = inject(uploadInjectionKey, null);
			n || throwError("upload-file-list", "`n-upload-file-list` must be placed inside `n-upload`.");
			const {
				abstractRef: o,
				mergedClsPrefixRef: r,
				listTypeRef: i,
				mergedFileListRef: a,
				fileListClassRef: l,
				fileListStyleRef: s,
				cssVarsRef: u,
				themeClassRef: d,
				maxReachedRef: f,
				showTriggerRef: v,
				imageGroupPropsRef: g
			} = n, p = computed(() => i.value === "image-card"), m = () => a.value.map((b, x) => h(NUploadFile, {
				clsPrefix: r.value,
				key: b.id,
				file: b,
				index: x,
				listType: i.value
			})), C = () => p.value ? h(NImageGroup, Object.assign({}, g.value), {
				default: m
			}) : h(NFadeInExpandTransition, {
				group: !0
			}, {
				default: m
			});
			return () => {
				const {
					value: b
				} = r, {
					value: x
				} = o;
				return h("div", {
					class: [`${b}-upload-file-list`, p.value && `${b}-upload-file-list--grid`, x ? d ==
						null ? void 0 : d.value : void 0, l.value
					],
					style: [x && u ? u.value : "", s.value]
				}, C(), v.value && !f.value && p.value && h(NUploadTrigger, null, t))
			}
		}
	}),
	style = c$1([cB("upload", "width: 100%;", [cM("dragger-inside", [cB("upload-trigger", `
 display: block;
 `)]), cM("drag-over", [cB("upload-dragger", `
 border: var(--n-dragger-border-hover);
 `)])]), cB("upload-dragger", `
 cursor: pointer;
 box-sizing: border-box;
 width: 100%;
 text-align: center;
 border-radius: var(--n-border-radius);
 padding: 24px;
 opacity: 1;
 transition:
 opacity .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 background-color: var(--n-dragger-color);
 border: var(--n-dragger-border);
 `, [c$1("&:hover", `
 border: var(--n-dragger-border-hover);
 `), cM("disabled", `
 cursor: not-allowed;
 `)]), cB("upload-trigger", `
 display: inline-block;
 box-sizing: border-box;
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 `, [c$1("+", [cB("upload-file-list", "margin-top: 8px;")]), cM("disabled", `
 opacity: var(--n-item-disabled-opacity);
 cursor: not-allowed;
 `), cM("image-card", `
 width: 96px;
 height: 96px;
 `, [cB("base-icon", `
 font-size: 24px;
 `), cB("upload-dragger", `
 padding: 0;
 height: 100%;
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 `)])]), cB("upload-file-list", `
 line-height: var(--n-line-height);
 opacity: 1;
 transition: opacity .3s var(--n-bezier);
 `, [c$1("a, img", "outline: none;"), cM("disabled", `
 opacity: var(--n-item-disabled-opacity);
 cursor: not-allowed;
 `, [cB("upload-file", "cursor: not-allowed;")]), cM("grid", `
 display: grid;
 grid-template-columns: repeat(auto-fill, 96px);
 grid-gap: 8px;
 margin-top: 0;
 `), cB("upload-file", `
 display: block;
 box-sizing: border-box;
 cursor: default;
 padding: 0px 12px 0 6px;
 transition: background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 `, [fadeInHeightExpandTransition(), cB("progress", [fadeInHeightExpandTransition({
			foldPadding: !0
		})]), c$1("&:hover", `
 background-color: var(--n-item-color-hover);
 `, [cB("upload-file-info", [cE("action", `
 opacity: 1;
 `)])]), cM("image-type", `
 border-radius: var(--n-border-radius);
 text-decoration: underline;
 text-decoration-color: #0000;
 `, [cB("upload-file-info", `
 padding-top: 0px;
 padding-bottom: 0px;
 width: 100%;
 height: 100%;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding: 6px 0;
 `, [cB("progress", `
 padding: 2px 0;
 margin-bottom: 0;
 `), cE("name", `
 padding: 0 8px;
 `), cE("thumbnail", `
 width: 32px;
 height: 32px;
 font-size: 28px;
 display: flex;
 justify-content: center;
 align-items: center;
 `, [c$1("img", `
 width: 100%;
 `)])])]), cM("text-type", [cB("progress", `
 box-sizing: border-box;
 padding-bottom: 6px;
 margin-bottom: 6px;
 `)]), cM("image-card-type", `
 position: relative;
 width: 96px;
 height: 96px;
 border: var(--n-item-border-image-card);
 border-radius: var(--n-border-radius);
 padding: 0;
 display: flex;
 align-items: center;
 justify-content: center;
 transition: border-color .3s var(--n-bezier), background-color .3s var(--n-bezier);
 border-radius: var(--n-border-radius);
 overflow: hidden;
 `, [cB("progress", `
 position: absolute;
 left: 8px;
 bottom: 8px;
 right: 8px;
 width: unset;
 `), cB("upload-file-info", `
 padding: 0;
 width: 100%;
 height: 100%;
 `, [cE("thumbnail", `
 width: 100%;
 height: 100%;
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: center;
 font-size: 36px;
 `, [c$1("img", `
 width: 100%;
 `)])]), c$1("&::before", `
 position: absolute;
 z-index: 1;
 left: 0;
 right: 0;
 top: 0;
 bottom: 0;
 border-radius: inherit;
 opacity: 0;
 transition: opacity .2s var(--n-bezier);
 content: "";
 `), c$1("&:hover", [c$1("&::before", "opacity: 1;"), cB("upload-file-info", [cE("thumbnail", "opacity: .12;")])])]),
		cM("error-status", [c$1("&:hover", `
 background-color: var(--n-item-color-hover-error);
 `), cB("upload-file-info", [cE("name", "color: var(--n-item-text-color-error);"), cE("thumbnail",
			"color: var(--n-item-text-color-error);")]), cM("image-card-type", `
 border: var(--n-item-border-image-card-error);
 `)]), cM("with-url", `
 cursor: pointer;
 `, [cB("upload-file-info", [cE("name", `
 color: var(--n-item-text-color-success);
 text-decoration-color: var(--n-item-text-color-success);
 `, [c$1("a", `
 text-decoration: underline;
 `)])])]), cB("upload-file-info", `
 position: relative;
 padding-top: 6px;
 padding-bottom: 6px;
 display: flex;
 flex-wrap: nowrap;
 `, [cE("thumbnail", `
 font-size: 18px;
 opacity: 1;
 transition: opacity .2s var(--n-bezier);
 color: var(--n-item-icon-color);
 `, [cB("base-icon", `
 margin-right: 2px;
 vertical-align: middle;
 transition: color .3s var(--n-bezier);
 `)]), cE("action", `
 padding-top: inherit;
 padding-bottom: inherit;
 position: absolute;
 right: 0;
 top: 0;
 bottom: 0;
 width: 80px;
 display: flex;
 align-items: center;
 transition: opacity .2s var(--n-bezier);
 justify-content: flex-end;
 opacity: 0;
 `, [cB("button", [c$1("&:not(:last-child)", {
			marginRight: "4px"
		}), cB("base-icon", [c$1("svg", [iconSwitchTransition()])])]), cM(
			"image-type", `
 position: relative;
 max-width: 80px;
 width: auto;
 `), cM("image-card-type", `
 z-index: 2;
 position: absolute;
 width: 100%;
 height: 100%;
 left: 0;
 right: 0;
 bottom: 0;
 top: 0;
 display: flex;
 justify-content: center;
 align-items: center;
 `)]), cE("name", `
 color: var(--n-item-text-color);
 flex: 1;
 display: flex;
 justify-content: center;
 text-overflow: ellipsis;
 overflow: hidden;
 flex-direction: column;
 text-decoration-color: #0000;
 font-size: var(--n-font-size);
 transition:
 color .3s var(--n-bezier),
 text-decoration-color .3s var(--n-bezier); 
 `, [c$1("a", `
 color: inherit;
 text-decoration: underline;
 `)])])
	])]), cB("upload-file-input", `
 display: none;
 width: 0;
 height: 0;
 opacity: 0;
 `)]);
var __awaiter = globalThis && globalThis.__awaiter || function(e, t, n, o) {
	function r(i) {
		return i instanceof n ? i : new n(function(a) {
			a(i)
		})
	}
	return new(n || (n = Promise))(function(i, a) {
		function l(d) {
			try {
				u(o.next(d))
			} catch (f) {
				a(f)
			}
		}

		function s(d) {
			try {
				u(o.throw(d))
			} catch (f) {
				a(f)
			}
		}

		function u(d) {
			d.done ? i(d.value) : r(d.value).then(l, s)
		}
		u((o = o.apply(e, t || [])).next())
	})
};

function createXhrHandlers(e, t, n) {
	const {
		doChange: o,
		xhrMap: r
	} = e;
	let i = 0;

	function a(s) {
		var u;
		let d = Object.assign({}, t, {
			status: "error",
			percentage: i
		});
		r.delete(t.id), d = createSettledFileInfo(((u = e.onError) === null || u === void 0 ? void 0 : u.call(e, {
			file: d,
			event: s
		})) || d), o(d, s)
	}

	function l(s) {
		var u;
		if (e.isErrorState) {
			if (e.isErrorState(n)) {
				a(s);
				return
			}
		} else if (n.status < 200 || n.status >= 300) {
			a(s);
			return
		}
		let d = Object.assign({}, t, {
			status: "finished",
			percentage: i
		});
		r.delete(t.id), d = createSettledFileInfo(((u = e.onFinish) === null || u === void 0 ? void 0 : u.call(e, {
			file: d,
			event: s
		})) || d), o(d, s)
	}
	return {
		handleXHRLoad: l,
		handleXHRError: a,
		handleXHRAbort(s) {
			const u = Object.assign({}, t, {
				status: "removed",
				file: null,
				percentage: i
			});
			r.delete(t.id), o(u, s)
		},
		handleXHRProgress(s) {
			const u = Object.assign({}, t, {
				status: "uploading"
			});
			if (s.lengthComputable) {
				const d = Math.ceil(s.loaded / s.total * 100);
				u.percentage = d, i = d
			}
			o(u, s)
		}
	}
}

function customSubmitImpl(e) {
	const {
		inst: t,
		file: n,
		data: o,
		headers: r,
		withCredentials: i,
		action: a,
		customRequest: l
	} = e, {
		doChange: s
	} = e.inst;
	let u = 0;
	l({
		file: n,
		data: o,
		headers: r,
		withCredentials: i,
		action: a,
		onProgress(d) {
			const f = Object.assign({}, n, {
					status: "uploading"
				}),
				v = d.percent;
			f.percentage = v, u = v, s(f)
		},
		onFinish() {
			var d;
			let f = Object.assign({}, n, {
				status: "finished",
				percentage: u
			});
			f = createSettledFileInfo(((d = t.onFinish) === null || d === void 0 ? void 0 : d.call(t, {
				file: f
			})) || f), s(f)
		},
		onError() {
			var d;
			let f = Object.assign({}, n, {
				status: "error",
				percentage: u
			});
			f = createSettledFileInfo(((d = t.onError) === null || d === void 0 ? void 0 : d.call(t, {
				file: f
			})) || f), s(f)
		}
	})
}

function registerHandler(e, t, n) {
	const o = createXhrHandlers(e, t, n);
	n.onabort = o.handleXHRAbort, n.onerror = o.handleXHRError, n.onload = o.handleXHRLoad, n.upload && (n.upload
		.onprogress = o.handleXHRProgress)
}

function unwrapFunctionValue(e, t) {
	return typeof e == "function" ? e({
		file: t
	}) : e || {}
}

function setHeaders(e, t, n) {
	const o = unwrapFunctionValue(t, n);
	o && Object.keys(o).forEach(r => {
		e.setRequestHeader(r, o[r])
	})
}

function appendData(e, t, n) {
	const o = unwrapFunctionValue(t, n);
	o && Object.keys(o).forEach(r => {
		e.append(r, o[r])
	})
}

function submitImpl(e, t, n, {
	method: o,
	action: r,
	withCredentials: i,
	responseType: a,
	headers: l,
	data: s
}) {
	const u = new XMLHttpRequest;
	u.responseType = a, e.xhrMap.set(n.id, u), u.withCredentials = i;
	const d = new FormData;
	if (appendData(d, s, n), n.file !== null && d.append(t, n.file), registerHandler(e, n, u), r !== void 0) {
		u.open(o.toUpperCase(), r), setHeaders(u, l, n), u.send(d);
		const f = Object.assign({}, n, {
			status: "uploading"
		});
		e.doChange(f)
	}
}
const uploadProps = Object.assign(Object.assign({}, useTheme.props), {
		name: {
			type: String,
			default: "file"
		},
		accept: String,
		action: String,
		customRequest: Function,
		directory: Boolean,
		directoryDnd: {
			type: Boolean,
			default: void 0
		},
		method: {
			type: String,
			default: "POST"
		},
		multiple: Boolean,
		showFileList: {
			type: Boolean,
			default: !0
		},
		data: [Object, Function],
		headers: [Object, Function],
		withCredentials: Boolean,
		responseType: {
			type: String,
			default: ""
		},
		disabled: {
			type: Boolean,
			default: void 0
		},
		onChange: Function,
		onRemove: Function,
		onFinish: Function,
		onError: Function,
		onBeforeUpload: Function,
		isErrorState: Function,
		onDownload: Function,
		defaultUpload: {
			type: Boolean,
			default: !0
		},
		fileList: Array,
		"onUpdate:fileList": [Function, Array],
		onUpdateFileList: [Function, Array],
		fileListClass: String,
		fileListStyle: [String, Object],
		defaultFileList: {
			type: Array,
			default: () => []
		},
		showCancelButton: {
			type: Boolean,
			default: !0
		},
		showRemoveButton: {
			type: Boolean,
			default: !0
		},
		showDownloadButton: Boolean,
		showRetryButton: {
			type: Boolean,
			default: !0
		},
		showPreviewButton: {
			type: Boolean,
			default: !0
		},
		listType: {
			type: String,
			default: "text"
		},
		onPreview: Function,
		shouldUseThumbnailUrl: {
			type: Function,
			default: e => environmentSupportFile ? isImageFile(e) : !1
		},
		createThumbnailUrl: Function,
		abstract: Boolean,
		max: Number,
		showTrigger: {
			type: Boolean,
			default: !0
		},
		imageGroupProps: Object,
		inputProps: Object,
		triggerClass: String,
		triggerStyle: [String, Object],
		renderIcon: Function
	}),
	NUpload = defineComponent({
		name: "Upload",
		props: uploadProps,
		setup(e) {
			e.abstract && e.listType === "image-card" && throwError("upload",
				"when the list-type is image-card, abstract is not supported.");
			const {
				mergedClsPrefixRef: t,
				inlineThemeDisabled: n
			} = useConfig(e), o = useTheme("Upload", "-upload", style, uploadLight, e, t), r = useFormItem(e), i =
				computed(() => {
					const {
						max: T
					} = e;
					return T !== void 0 ? g.value.length >= T : !1
				}), a = ref(e.defaultFileList), l = toRef(e, "fileList"), s = ref(null), u = {
					value: !1
				}, d = ref(!1), f = new Map, v = useMergedState(l, a), g = computed(() => v.value.map(
					createSettledFileInfo));

			function p() {
				var T;
				(T = s.value) === null || T === void 0 || T.click()
			}

			function m(T) {
				const M = T.target;
				x(M.files ? Array.from(M.files).map(E => ({
					file: E,
					entry: null,
					source: "input"
				})) : null, T), M.value = ""
			}

			function C(T) {
				const {
					"onUpdate:fileList": M,
					onUpdateFileList: E
				} = e;
				M && call(M, T), E && call(E, T), a.value = T
			}
			const b = computed(() => e.multiple || e.directory);

			function x(T, M) {
				if (!T || T.length === 0) return;
				const {
					onBeforeUpload: E
				} = e;
				T = b.value ? T : [T[0]];
				const {
					max: $,
					accept: _
				} = e;
				T = T.filter(({
					file: N,
					source: D
				}) => D === "dnd" && (_ != null && _.trim()) ? matchType(N.name, N.type, _) : !0), $ && (T = T
					.slice(0, $ - g.value.length));
				const O = createId();
				Promise.all(T.map(N => __awaiter(this, [N], void 0, function*({
					file: D,
					entry: F
				}) {
					var j;
					const J = {
						id: createId(),
						batchId: O,
						name: D.name,
						status: "pending",
						percentage: 0,
						file: D,
						url: null,
						type: D.type,
						thumbnailUrl: null,
						fullPath: (j = F == null ? void 0 : F.fullPath) !== null && j !==
							void 0 ? j : `/${D.webkitRelativePath||D.name}`
					};
					return !E || (yield E({
						file: J,
						fileList: g.value
					})) !== !1 ? J : null
				}))).then(N => __awaiter(this, void 0, void 0, function*() {
					let D = Promise.resolve();
					N.forEach(F => {
						D = D.then(nextTick).then(() => {
							F && w(F, M, {
								append: !0
							})
						})
					}), yield D
				})).then(() => {
					e.defaultUpload && S()
				})
			}

			function S(T) {
				const {
					method: M,
					action: E,
					withCredentials: $,
					headers: _,
					data: O,
					name: N
				} = e, D = T !== void 0 ? g.value.filter(j => j.id === T) : g.value, F = T !== void 0;
				D.forEach(j => {
					const {
						status: J
					} = j;
					(J === "pending" || J === "error" && F) && (e.customRequest ? customSubmitImpl({
						inst: {
							doChange: w,
							xhrMap: f,
							onFinish: e.onFinish,
							onError: e.onError
						},
						file: j,
						action: E,
						withCredentials: $,
						headers: _,
						data: O,
						customRequest: e.customRequest
					}) : submitImpl({
						doChange: w,
						xhrMap: f,
						onFinish: e.onFinish,
						onError: e.onError,
						isErrorState: e.isErrorState
					}, N, j, {
						method: M,
						action: E,
						withCredentials: $,
						responseType: e.responseType,
						headers: _,
						data: O
					}))
				})
			}
			const w = (T, M, E = {
				append: !1,
				remove: !1
			}) => {
				const {
					append: $,
					remove: _
				} = E, O = Array.from(g.value), N = O.findIndex(D => D.id === T.id);
				if ($ || _ || ~N) {
					$ ? O.push(T) : _ ? O.splice(N, 1) : O.splice(N, 1, T);
					const {
						onChange: D
					} = e;
					D && D({
						file: T,
						fileList: O,
						event: M
					}), C(O)
				}
			};

			function y(T) {
				var M;
				if (T.thumbnailUrl) return T.thumbnailUrl;
				const {
					createThumbnailUrl: E
				} = e;
				return E ? (M = E(T.file, T)) !== null && M !== void 0 ? M : T.url || "" : T.url ? T.url : T.file ?
					createImageDataUrl(T.file) : ""
			}
			const R = computed(() => {
					const {
						common: {
							cubicBezierEaseInOut: T
						},
						self: {
							draggerColor: M,
							draggerBorder: E,
							draggerBorderHover: $,
							itemColorHover: _,
							itemColorHoverError: O,
							itemTextColorError: N,
							itemTextColorSuccess: D,
							itemTextColor: F,
							itemIconColor: j,
							itemDisabledOpacity: J,
							lineHeight: Q,
							borderRadius: re,
							fontSize: L,
							itemBorderImageCardError: W,
							itemBorderImageCard: ee
						}
					} = o.value;
					return {
						"--n-bezier": T,
						"--n-border-radius": re,
						"--n-dragger-border": E,
						"--n-dragger-border-hover": $,
						"--n-dragger-color": M,
						"--n-font-size": L,
						"--n-item-color-hover": _,
						"--n-item-color-hover-error": O,
						"--n-item-disabled-opacity": J,
						"--n-item-icon-color": j,
						"--n-item-text-color": F,
						"--n-item-text-color-error": N,
						"--n-item-text-color-success": D,
						"--n-line-height": Q,
						"--n-item-border-image-card-error": W,
						"--n-item-border-image-card": ee
					}
				}),
				k = n ? useThemeClass("upload", void 0, R, e) : void 0;
			provide(uploadInjectionKey, {
				mergedClsPrefixRef: t,
				mergedThemeRef: o,
				showCancelButtonRef: toRef(e, "showCancelButton"),
				showDownloadButtonRef: toRef(e, "showDownloadButton"),
				showRemoveButtonRef: toRef(e, "showRemoveButton"),
				showRetryButtonRef: toRef(e, "showRetryButton"),
				onRemoveRef: toRef(e, "onRemove"),
				onDownloadRef: toRef(e, "onDownload"),
				mergedFileListRef: g,
				triggerClassRef: toRef(e, "triggerClass"),
				triggerStyleRef: toRef(e, "triggerStyle"),
				shouldUseThumbnailUrlRef: toRef(e, "shouldUseThumbnailUrl"),
				renderIconRef: toRef(e, "renderIcon"),
				xhrMap: f,
				submit: S,
				doChange: w,
				showPreviewButtonRef: toRef(e, "showPreviewButton"),
				onPreviewRef: toRef(e, "onPreview"),
				getFileThumbnailUrlResolver: y,
				listTypeRef: toRef(e, "listType"),
				dragOverRef: d,
				openOpenFileDialog: p,
				draggerInsideRef: u,
				handleFileAddition: x,
				mergedDisabledRef: r.mergedDisabledRef,
				maxReachedRef: i,
				fileListClassRef: toRef(e, "fileListClass"),
				fileListStyleRef: toRef(e, "fileListStyle"),
				abstractRef: toRef(e, "abstract"),
				acceptRef: toRef(e, "accept"),
				cssVarsRef: n ? void 0 : R,
				themeClassRef: k == null ? void 0 : k.themeClass,
				onRender: k == null ? void 0 : k.onRender,
				showTriggerRef: toRef(e, "showTrigger"),
				imageGroupPropsRef: toRef(e, "imageGroupProps"),
				mergedDirectoryDndRef: computed(() => {
					var T;
					return (T = e.directoryDnd) !== null && T !== void 0 ? T : e.directory
				})
			});
			const B = {
				clear: () => {
					a.value = []
				},
				submit: S,
				openOpenFileDialog: p
			};
			return Object.assign({
				mergedClsPrefix: t,
				draggerInsideRef: u,
				inputElRef: s,
				mergedTheme: o,
				dragOver: d,
				mergedMultiple: b,
				cssVars: n ? void 0 : R,
				themeClass: k == null ? void 0 : k.themeClass,
				onRender: k == null ? void 0 : k.onRender,
				handleFileInputChange: m
			}, B)
		},
		render() {
			var e, t;
			const {
				draggerInsideRef: n,
				mergedClsPrefix: o,
				$slots: r,
				directory: i,
				onRender: a
			} = this;
			if (r.default && !this.abstract) {
				const s = r.default()[0];
				!((e = s == null ? void 0 : s.type) === null || e === void 0) && e[uploadDraggerKey] && (n.value = !
					0)
			}
			const l = h("input", Object.assign({}, this.inputProps, {
				ref: "inputElRef",
				type: "file",
				class: `${o}-upload-file-input`,
				accept: this.accept,
				multiple: this.mergedMultiple,
				onChange: this.handleFileInputChange,
				webkitdirectory: i || void 0,
				directory: i || void 0
			}));
			return this.abstract ? h(Fragment, null, (t = r.default) === null || t === void 0 ? void 0 : t.call(r),
				h(Teleport, {
					to: "body"
				}, l)) : (a == null || a(), h("div", {
					class: [`${o}-upload`, n.value && `${o}-upload--dragger-inside`, this.dragOver &&
						`${o}-upload--drag-over`, this.themeClass
					],
					style: this.cssVars
				}, l, this.showTrigger && this.listType !== "image-card" && h(NUploadTrigger, null, r), this
				.showFileList && h(NUploadFileList, null, r)))
		}
	}),
	virtualListProps = {
		scrollbarProps: Object,
		items: {
			type: Array,
			default: () => []
		},
		itemSize: {
			type: Number,
			required: !0
		},
		itemResizable: Boolean,
		itemsStyle: [String, Object],
		visibleItemsTag: {
			type: [String, Object],
			default: "div"
		},
		visibleItemsProps: Object,
		ignoreItemResize: Boolean,
		onScroll: Function,
		onWheel: Function,
		onResize: Function,
		defaultScrollKey: [Number, String],
		defaultScrollIndex: Number,
		keyField: {
			type: String,
			default: "key"
		},
		paddingTop: {
			type: [Number, String],
			default: 0
		},
		paddingBottom: {
			type: [Number, String],
			default: 0
		}
	},
	NVirtualList = defineComponent({
		name: "VirtualList",
		props: virtualListProps,
		setup(e) {
			const t = ref(null),
				n = ref(null);

			function o() {
				const {
					value: d
				} = t;
				d && d.sync()
			}

			function r(d) {
				var f;
				o(), (f = e.onScroll) === null || f === void 0 || f.call(e, d)
			}

			function i(d) {
				var f;
				o(), (f = e.onResize) === null || f === void 0 || f.call(e, d)
			}

			function a(d) {
				var f;
				(f = e.onWheel) === null || f === void 0 || f.call(e, d)
			}

			function l(d, f) {
				var v, g;
				typeof d == "number" ? (v = n.value) === null || v === void 0 || v.scrollTo(d, f ?? 0) : (g = n
					.value) === null || g === void 0 || g.scrollTo(d)
			}

			function s() {
				var d;
				return (d = n.value) === null || d === void 0 ? void 0 : d.listElRef
			}

			function u() {
				var d;
				return (d = n.value) === null || d === void 0 ? void 0 : d.itemsElRef
			}
			return {
				scrollTo: l,
				scrollbarInstRef: t,
				virtualListInstRef: n,
				getScrollContainer: s,
				getScrollContent: u,
				handleScroll: r,
				handleResize: i,
				handleWheel: a
			}
		},
		render() {
			return h(XScrollbar, Object.assign({}, this.scrollbarProps, {
				ref: "scrollbarInstRef",
				container: this.getScrollContainer,
				content: this.getScrollContent
			}), {
				default: () => h(VVirtualList, {
					ref: "virtualListInstRef",
					showScrollbar: !1,
					items: this.items,
					itemSize: this.itemSize,
					itemResizable: this.itemResizable,
					itemsStyle: this.itemsStyle,
					visibleItemsTag: this.visibleItemsTag,
					visibleItemsProps: this.visibleItemsProps,
					ignoreItemResize: this.ignoreItemResize,
					keyField: this.keyField,
					defaultScrollKey: this.defaultScrollKey,
					defaultScrollIndex: this.defaultScrollIndex,
					paddingTop: this.paddingTop,
					paddingBottom: this.paddingBottom,
					onScroll: this.handleScroll,
					onResize: this.handleResize,
					onWheel: this.handleWheel
				}, {
					default: ({
						item: e,
						index: t
					}) => {
						var n, o;
						return (o = (n = this.$slots).default) === null || o === void 0 ?
							void 0 : o.call(n, {
								item: e,
								index: t
							})
					}
				})
			})
		}
	}),
	conversationCssText = `/* 移除顶部背景遮挡 */\r
.scroller>.top {\r
  display: none !important;\r
}\r
\r
/* 移除顶部边距 */\r
.scroller>.scroller-positioner>.content {\r
  padding-top: 0 !important;\r
}`,
	settingSvgUrl = "/web/assets/setting-c6ca7b14.svg",
	usePromptStore = defineStore("prompt-store", () => {
		const e = ref([{
				type: 1,
				name: "ChatGPT 中文调教指南 - 简体",
				url: "./data/prompts/prompts-zh.json",
				refer: "https://github.com/PlexPt/awesome-chatgpt-prompts-zh"
			}, {
				type: 1,
				name: "ChatGPT 中文调教指南 - 繁体",
				url: "./data/prompts/prompts-zh-TW.json",
				refer: "https://github.com/PlexPt/awesome-chatgpt-prompts-zh"
			}, {
				type: 1,
				name: "Awesome ChatGPT Prompts",
				url: "./data/prompts/prompts.csv",
				refer: "https://github.com/f/awesome-chatgpt-prompts"
			}, {
				type: 2,
				name: "",
				url: "",
				refer: ""
			}]),
			t = ref(!1),
			n = ref(!1),
			o = ref([]),
			r = ref(""),
			i = ref(0),
			a = ref({
				isShow: !1,
				newPrompt: {
					act: "",
					prompt: ""
				}
			}),
			l = computed(() => {
				var u;
				return r.value ? (u = o.value) == null ? void 0 : u.filter(d => d.act.includes(r.value) || d
					.prompt.includes(r.value)) : o.value
			});

		function s(u) {
			if (u instanceof Array && u.every(d => d.act && d.prompt)) {
				if (o.value.length === 0) return o.value.push(...u), {
					result: !0,
					data: {
						successCount: u.length
					}
				};
				const d = u.filter(f => {
					var v;
					return (v = o.value) == null ? void 0 : v.every(g => f.act !== g.act && f.prompt !== g
						.prompt)
				});
				return o.value.push(...d), {
					result: !0,
					data: {
						successCount: d.length
					}
				}
			} else return {
				result: !1,
				msg: "提示词格式有误"
			}
		}
		return {
			promptDownloadConfig: e,
			isShowPromptSotre: t,
			isShowChatPrompt: n,
			promptList: o,
			keyword: r,
			searchPromptList: l,
			selectedPromptIndex: i,
			optPromptConfig: a,
			addPrompt: s
		}
	}, {
		persist: {
			key: "prompt-store",
			storage: localStorage,
			paths: ["promptList"]
		}
	}),
	_hoisted_1$8 = ["href"],
	_hoisted_2$6 = {
		key: 1
	},
	_sfc_main$9 = defineComponent({
		__name: "ChatNavItem",
		props: {
			navConfig: {}
		},
		setup(e) {
			return (t, n) => t.navConfig.url ? (openBlock(), createElementBlock("a", {
				key: 0,
				href: t.navConfig.url,
				target: "_blank",
				rel: "noopener noreferrer"
			}, toDisplayString(t.navConfig.label), 9, _hoisted_1$8)) : (openBlock(), createElementBlock("div",
				_hoisted_2$6, toDisplayString(t.navConfig.label), 1))
		}
	}),
	_hoisted_1$7 = {
		class: "flex justify-center gap-3 px-8"
	},
	_hoisted_2$5 = {
		class: "flex justify-center items-center"
	},
	_hoisted_3$4 = ["src"],
	_hoisted_4$4 = createBaseVNode("p", {
		class: "text-left"
	}, "提示：形容词+名词+动词+风格，描述得越详细时，效果越好。", -1),
	DEMO_KEYWORD = "骑着摩托的小猫咪，疾驰在路上，动漫场景，详细的细节。",
	_sfc_main$8 = defineComponent({
		__name: "CreateImage",
		props: {
			show: {
				type: Boolean
			}
		},
		emits: ["update:show"],
		setup(e, {
			emit: t
		}) {
			const n = e,
				o = t,
				r = useMessage(),
				i = ref(""),
				a = ref(""),
				l = ref(!1),
				s = computed({
					get: () => n.show,
					set: v => o("update:show", v)
				}),
				u = () => {
					if (!i.value) {
						r.error("请先输入关键词");
						return
					}
					l.value = !0, a.value =
						`/images/create?re=1&showselective=1&sude=1&kseed=7500&SFX=2&q=${encodeURIComponent(i.value)}&t=${Date.now()}`
				},
				d = () => {
					i.value = "", a.value = ""
				},
				f = () => (i.value = DEMO_KEYWORD, u());
			return (v, g) => (openBlock(), createBlock(unref(NModal), {
				class: "w-11/12 lg:w-[540px] select-none",
				show: s.value,
				"onUpdate:show": g[2] || (g[2] = p => s.value = p),
				"on-close": d,
				preset: "card",
				title: "图像创建"
			}, {
				default: withCtx(() => [createBaseVNode("head", _hoisted_1$7, [createVNode(unref(
					NInput), {
						class: "flex-1",
						placeholder: "提示词",
						value: i.value,
						"onUpdate:value": g[0] || (g[0] = p => i.value = p),
						clearable: !0,
						onKeyup: withKeys(u, ["enter"]),
						maxlength: "100"
					}, null, 8, ["value"]), createVNode(unref(NButton), {
					secondary: "",
					type: "info",
					onClick: u,
					loading: l.value
				}, {
					default: withCtx(() => [createTextVNode("开始创建")]),
					_: 1
				}, 8, ["loading"])]), createBaseVNode("main", _hoisted_2$5, [a.value ? (
					openBlock(), createElementBlock("iframe", {
						key: 0,
						class: "w-[310px] h-[350px] xl:w-[475px] xl:h-[520px] my-4",
						src: a.value,
						frameborder: "0",
						onLoad: g[1] || (g[1] = p => l.value = !1)
					}, null, 40, _hoisted_3$4)) : (openBlock(), createBlock(unref(
					NEmpty), {
					key: 1,
					class: "h-[40vh] xl:h-[60vh] flex justify-center items-center",
					description: "暂未创建"
				}, {
					extra: withCtx(() => [createVNode(unref(NButton), {
						secondary: "",
						type: "info",
						onClick: f
					}, {
						default: withCtx(() => [
							createTextVNode(
								"使用示例创建")
						]),
						_: 1
					}), createBaseVNode("div", {
						class: "text-[#c2c2c2] px-2 xl:px-10"
					}, [_hoisted_4$4, createBaseVNode("p", {
						class: "text-left"
					}, "示例：" + toDisplayString(
						DEMO_KEYWORD))])]),
					_: 1
				}))])]),
				_: 1
			}, 8, ["show"]))
		}
	}),
	useChatStore = defineStore("chat-store", () => {
		const e = "/sydney/ChatHub",
			t = ref(!1),
			n = ref(""),
			o = ref([{
				baseUrl: "https://sydney.bing.com",
				label: "Bing 官方"
			}, {
				baseUrl: "https://sydney.b1ng.chat",
				label: "Cloudflare Worker"
			}, {
				baseUrl: location.origin,
				label: "本站"
			}, {
				baseUrl: "",
				label: "自定义",
				isCus: !0
			}]),
			r = 3e3,
			i = async l => {
				if (!l.baseUrl) return {
					isUsable: !1,
					errorMsg: "链接不可为空"
				};
				try {
					const s = Date.now(),
						u = new WebSocket(l.baseUrl.replace("http", "ws") + e),
						d = setTimeout(() => {
							u.close()
						}, r);
					return await new Promise((f, v) => {
						u.onopen = () => {
							clearTimeout(d), f(u.close())
						}, u.onerror = () => {
							clearTimeout(d), v(new Error(`聊天服务器 ${l.baseUrl} 连接失败`))
						}, u.onclose = () => v(new Error(`聊天服务器 ${l.baseUrl} 连接超时`))
					}), {
						isUsable: !0,
						delay: Date.now() - s
					}
				} catch (s) {
					return {
						isUsable: !1,
						errorMsg: s instanceof Error ? s.message : ""
					}
				}
			};
		return {
			isShowChatServiceSelectModal: t,
			sydneyConfigs: o,
			selectedSydneyBaseUrl: n,
			checkSydneyConfig: i,
			checkAllSydneyConfig: async () => {
				const l = o.value.filter(s => s.baseUrl).map(async s => {
					const u = await i(s);
					s.isUsable = u.isUsable, s.delay = u.delay
				});
				await Promise.all(l)
			}
		}
	}, {
		persist: {
			key: "chat-store",
			storage: localStorage,
			paths: ["selectedSydneyBaseUrl", "sydneyConfigs"]
		}
	}),
	_hoisted_1$6 = createBaseVNode("div", {
		class: "text-3xl py-2"
	}, "账号登录", -1),
	_hoisted_2$4 = {
		key: 0
	},
	_hoisted_3$3 = {
		key: 0,
		style: {
			"margin-top": "12px",
			"margin-bottom": "24px"
		}
	},
	_hoisted_4$3 = createBaseVNode("br", null, null, -1),
	_hoisted_5$2 = {
		key: 1
	},
	_hoisted_6$1 = ["src"],
	_hoisted_7$1 = {
		key: 1
	},
	_hoisted_8 = createBaseVNode("div", {
		class: "text-3xl py-2"
	}, "设置", -1),
	_hoisted_9 = createBaseVNode("div", {
		class: "text-3xl py-2"
	}, "Cookie 设置", -1),
	_hoisted_10 = createBaseVNode("div", {
		class: "text-3xl py-2"
	}, "高级设置", -1),
	_hoisted_11 = createBaseVNode("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		"xmlns:xlink": "http://www.w3.org/1999/xlink",
		viewBox: "0 0 512 512"
	}, [createBaseVNode("path", {
		d: "M256 56C145.72 56 56 145.72 56 256s89.72 200 200 200s200-89.72 200-200S366.28 56 256 56zm0 82a26 26 0 1 1-26 26a26 26 0 0 1 26-26zm64 226H200v-32h44v-88h-32v-32h64v120h44z",
		fill: "currentColor"
	})], -1),
	_hoisted_12 = createBaseVNode("svg", {
		xmlns: "http://www.w3.org/2000/svg",
		"xmlns:xlink": "http://www.w3.org/1999/xlink",
		viewBox: "0 0 512 512"
	}, [createBaseVNode("path", {
		d: "M256 56C145.72 56 56 145.72 56 256s89.72 200 200 200s200-89.72 200-200S366.28 56 256 56zm0 82a26 26 0 1 1-26 26a26 26 0 0 1 26-26zm64 226H200v-32h44v-88h-32v-32h64v120h44z",
		fill: "currentColor"
	})], -1),
	_hoisted_13 = createBaseVNode("div", {
		class: "text-xl py-2"
	}, "将删除包括 Cookie 等的所有缓存？", -1),
	_hoisted_14 = createBaseVNode("div", {
		class: "text-3xl py-2"
	}, "关于", -1),
	_sfc_main$7 = defineComponent({
		__name: "ChatNav",
		setup(__props) {
			const isShowMore = ref(!1),
				isShowSettingModal = ref(!1),
				isShowAdvancedSettingModal = ref(!1),
				isShowSetAboutModal = ref(!1),
				isShowCookieModal = ref(!1),
				isShowLoginModal = ref(!1),
				isShowIframe = ref(!1),
				userToken = ref(""),
				userKievRPSSecAuth = ref(""),
				userMUID = ref(""),
				userRwBf = ref(""),
				message = useMessage(),
				promptStore = usePromptStore(),
				{
					isShowPromptSotre
				} = storeToRefs(promptStore),
				isShowClearCacheModal = ref(!1),
				isShowCreateImageModal = ref(!1),
				chatStore = useChatStore(),
				{
					isShowChatServiceSelectModal
				} = storeToRefs(chatStore),
				userStore = useUserStore(),
				localVersion = "2.4.3",
				lastVersion = ref("加载中..."),
				{
					historyEnable,
					themeMode,
					uiVersion,
					langRegion,
					autoReopenMic,
					fullCookiesEnable,
					cookiesStr,
					enterpriseEnable,
					copilotProEnable,
					customChatNum,
					gpt4tEnable,
					sydneyEnable,
					sydneyPrompt,
					passServer
				} = storeToRefs(userStore);
			let cookiesEnable = ref(!1),
				cookies = ref(""),
				history = ref(!0),
				themeModeSetting = ref("auto"),
				uiVersionSetting = ref("v3"),
				langRegionSetting = ref("CN"),
				theme = ref(inject("theme")),
				autoReopenMicSetting = ref(!0),
				settingIconStyle = ref({
					filter: "invert(70%)"
				}),
				passingCFChallenge = ref(!1);
			const enterpriseSetting = ref(!1),
				copilotProSetting = ref(!1),
				customChatNumSetting = ref(0),
				gpt4tSetting = ref(!0),
				sydneySetting = ref(!1),
				sydneyPromptSetting = ref(""),
				passServerSetting = ref(""),
				getCookieTip = ref("获取 Cookie 中, 请稍后..."),
				bingUrl = base58Decode("7RYHpA38gs3NAby2mkvoRMwjncBpS"),
				oneKeyLogin = ref("false"),
				loginTypeOptions = ref([{
					label: "账号登录",
					value: "false"
				}, {
					label: "一键登录",
					value: "true"
				}]),
				msLoginAccount = ref(""),
				msLoginPassword = ref(""),
				msLoginType = ref("passwd"),
				msLoginCode = ref(""),
				msLogining = ref(!1),
				msContinueing = ref(!1),
				msLoginTypeOptions = ref([{
					label: "密码登录",
					value: "passwd"
				}, {
					label: "邮箱验证码登录",
					value: "email"
				}, {
					label: "2FA登录",
					value: "device"
				}]),
				msLoginContext = ref({
					cookies: "",
					context: {}
				}),
				GetLastVersion = async () => {
					const t = await (await fetch(
						"https://api.github.com/repos/Harry-zklcdc/go-proxy-bingai/releases/latest")).json();
					lastVersion.value = t.tag_name
				}, navType = {
					login: "login",
					setting: "setting",
					chat: "chat",
					notebook: "notebook",
					compose: "compose",
					createImage: "createImage",
					reset: "reset",
					about: "about"
				};
			let navConfigs = ref([{
				key: navType.setting,
				label: "设置"
			}, {
				key: navType.notebook,
				label: "笔记本"
			}, {
				key: navType.compose,
				label: "撰写文章",
				url: "/web/compose.html"
			}, {
				key: navType.createImage,
				label: "图像创建"
			}, {
				key: navType.reset,
				label: "一键重置"
			}]);
			const themeModeOptions = ref([{
					label: "浅色",
					value: "light"
				}, {
					label: "深色",
					value: "dark"
				}, {
					label: "跟随系统",
					value: "auto"
				}]),
				uiVersionOptions = ref([{
					label: "V1",
					value: "v1"
				}, {
					label: "V2",
					value: "v2"
				}, {
					label: "V3",
					value: "v3"
				}]),
				langRegionOptions = ref([{
					label: "中文优先",
					value: "CN"
				}, {
					label: "英文优先",
					value: "US"
				}]);
			onMounted(() => {
				themeMode.value == "light" ? settingIconStyle.value = {
					filter: "invert(0%)"
				} : themeMode.value == "dark" ? settingIconStyle.value = {
					filter: "invert(70%)"
				} : themeMode.value == "auto" && (useOsTheme().value == "dark" ? settingIconStyle
					.value = {
						filter: "invert(70%)"
					} : settingIconStyle.value = {
						filter: "invert(0%)"
					})
			});
			const sleep = async e => new Promise(t => setTimeout(t, e)), renderDropdownLabel = e => h(_sfc_main$9, {
				navConfig: e
			}), handleSelect = async e => {
				var t, n, o, r, i, a, l, s, u, d, f, v, g, p, m, C, b, x, S, w, y;
				switch (e) {
					case navType.chat: {
						CIB.showConversation(), navConfigs.value[1] = {
							key: navType.notebook,
							label: "笔记本"
						};
						const R = CIB.config.sydney.request.optionsSets.indexOf("prjupy"),
							k = CIB.config.sydney.request.optionsSets.indexOf("clgalileo");
						CIB.config.sydney.request.optionsSets = CIB.config.sydney.request.optionsSets
							.slice(0, R), k > -1 && (CIB.config.sydney.request.optionsSets[k] =
								"galileo"), uiVersion.value == "v3" && (await sleep(25),
								await ChatHomeScreen.init("/turing/api/suggestions/v2/zeroinputstarter")
								);
						const B = document.querySelector("cib-serp"),
							T = (t = B == null ? void 0 : B.shadowRoot) == null ? void 0 : t
							.querySelector("cib-conversation"),
							M = (n = T == null ? void 0 : T.shadowRoot) == null ? void 0 : n
							.querySelector("cib-welcome-container"),
							E = (o = M == null ? void 0 : M.shadowRoot) == null ? void 0 : o
							.querySelectorAll("div[class='muid-upsell']");
						E != null && E.length && E.forEach(_ => {
							_.remove()
						}), (i = (r = M == null ? void 0 : M.shadowRoot) == null ? void 0 : r
							.querySelector(".preview-container")) == null || i.remove(), (l = (a =
								M == null ? void 0 : M.shadowRoot) == null ? void 0 : a
							.querySelector(".footer")) == null || l.remove(), (u = (s = B == null ?
							void 0 : B.shadowRoot) == null ? void 0 : s.querySelector(
							"cib-serp-feedback")) == null || u.remove(), isMobile() && ((f = (d =
									M == null ? void 0 : M.shadowRoot) == null ? void 0 : d
								.querySelector(".container-item")) == null || f.remove(), CIB.vm
							.actionBar.input.placeholder = '有问题尽管问我...（"/" 触发提示词）');
						const $ = document.createElement("style");
						$.innerText = conversationCssText, (v = T.shadowRoot) == null || v.append($)
					}
					break;
					case navType.notebook: {
						CIB.showNotebook();
						const R = CIB.config.sydney.request.optionsSets.indexOf("galileo");
						R > -1 && (CIB.config.sydney.request.optionsSets[R] = "clgalileo"), CIB.config
							.sydney.request.optionsSets.push("prjupy", "uprofdeuv1", "uprofupdv2",
								"gndlogcf"), navConfigs.value[1] = {
								key: navType.chat,
								label: "聊天"
							}, await sleep(25);
						const k = document.querySelector("cib-serp"),
							B = (g = k == null ? void 0 : k.shadowRoot) == null ? void 0 : g
							.querySelector("cib-notebook"),
							T = (p = B == null ? void 0 : B.shadowRoot) == null ? void 0 : p
							.querySelector("cib-ai-disclaimer");
						(C = (m = T == null ? void 0 : T.shadowRoot) == null ? void 0 : m.querySelector(
							"div")) == null || C.remove(), (x = (b = T == null ? void 0 : T
								.shadowRoot) == null ? void 0 : b.querySelector("div")) == null || x
							.remove()
					}
					break;
					case navType.setting:
						isShowSettingModal.value = !0;
						break;
					case navType.createImage:
						!((S = userStore.sysConfig) != null && S.isSysCK) && !userStore
						.getUserToken() && message.warning("体验画图功能需先登录"), isShowCreateImageModal
							.value = !0;
						break;
					case navType.reset:
						isShowClearCacheModal.value = !0;
						break
				}
			}, settingMenu = e => {
				switch (e) {
					case "autoPassCFChallenge":
						autoPassCFChallenge();
						break;
					case "login":
						isShowLoginModal.value = !0, isShowIframe.value = !1;
						break;
					case "chatService":
						isShowChatServiceSelectModal.value = !0, chatStore.checkAllSydneyConfig();
						break;
					case "cookieSetting":
						userToken.value = userStore.getUserToken(), userKievRPSSecAuth.value = userStore
							.getUserKievRPSSecAuth(), userMUID.value = userStore.getUserMUID(), userRwBf
							.value = userStore.getUserRwBf(), history.value = historyEnable.value,
							cookiesEnable.value = fullCookiesEnable.value, cookies.value = cookiesStr
							.value, isShowCookieModal.value = !0;
						break;
					case "promptStore":
						isShowPromptSotre.value = !0;
						break;
					case "advancedSetting":
						history.value = historyEnable.value, themeModeSetting.value = themeMode.value,
							uiVersionSetting.value = uiVersion.value, langRegionSetting.value =
							langRegion.value, copilotProSetting.value = copilotProEnable.value,
							enterpriseSetting.value = enterpriseEnable.value, customChatNumSetting
							.value = customChatNum.value, gpt4tSetting.value = gpt4tEnable.value,
							autoReopenMicSetting.value = autoReopenMic.value, sydneySetting.value =
							sydneyEnable.value, sydneyPromptSetting.value = sydneyPrompt.value,
							passServerSetting.value = passServer.value, isShowAdvancedSettingModal
							.value = !0;
						break;
					default:
						return
				}
			}, resetCache = async () => {
				isShowClearCacheModal.value = !1, await userStore.resetCache(), message.success(
					"清理完成"), window.location.href = "/"
			}, saveSetting = () => {
				cookiesEnable.value ? (userStore.saveCookies(cookies.value), cookiesStr.value =
						cookies.value) : (userToken.value ? userStore.saveUserToken(userToken
						.value) : message.warning("请先填入用户 _U Cookie"), userKievRPSSecAuth.value ?
						userStore.saveUserKievRPSSecAuth(userKievRPSSecAuth.value) : message
						.warning("请先填入用户 KievRPSSecAuth Cookie"), userRwBf.value ? userStore
						.saveUserRwBf(userRwBf.value) : message.warning("请先填入用户 _RwBf Cookie"),
						userMUID.value ? userStore.saveUserMUID(userMUID.value) : message.warning(
							"请先填入用户 MUID Cookie")), fullCookiesEnable.value = cookiesEnable.value,
					isShowCookieModal.value = !1
			}, saveAdvancedSetting = () => {
				var u, d, f, v;
				historyEnable.value = history.value;
				const e = enterpriseEnable.value;
				enterpriseEnable.value = enterpriseSetting.value, customChatNum.value =
					customChatNumSetting.value;
				const t = gpt4tEnable.value,
					n = sydneyEnable.value,
					o = uiVersion.value,
					r = copilotProEnable.value;
				copilotProEnable.value = copilotProSetting.value, gpt4tEnable.value = gpt4tSetting
					.value, autoReopenMic.value = autoReopenMicSetting.value, sydneyEnable.value =
					sydneySetting.value, sydneyPrompt.value = sydneyPromptSetting.value, uiVersion
					.value = uiVersionSetting.value, passServerSetting.value && passServerSetting
					.value.startsWith("http") && userStore.setPassServer(passServerSetting.value),
					langRegion.value != langRegionSetting.value && (langRegion.value =
						langRegionSetting.value, _G.Region = langRegionSetting.value);
				const i = document.querySelector("cib-serp"),
					a = (v = (f = (d = (u = i == null ? void 0 : i.shadowRoot) == null ? void 0 : u
							.querySelector("cib-conversation")) == null ? void 0 : d
						.querySelector("cib-side-panel")) == null ? void 0 : f.shadowRoot) == null ?
					void 0 : v.querySelector(".main"),
					l = a == null ? void 0 : a.querySelector(".threads-header"),
					s = a == null ? void 0 : a.querySelector(".threads-container");
				isMobile() || (history.value && userStore.getUserToken() && !enterpriseEnable
						.value ? o === "v1" ? CIB.vm.sidePanel.panels = [{
							type: "threads",
							label: "最近的活动"
						}, {
							type: "plugins",
							label: "插件"
						}] : (l.style.display = "flex", s.style.display = "block") : o === "v2" ? (l
							.style.display = "none", s.style.display = "none") : (CIB.vm.sidePanel
							.panels = [{
								type: "plugins",
								label: "插件"
							}], CIB.vm.sidePanel.selectedPanel = "plugins")), themeMode.value =
					themeModeSetting.value, themeModeSetting.value == "light" ? (CIB
						.changeColorScheme(0), theme.value = lightTheme, settingIconStyle.value = {
							filter: "invert(0%)"
						}) : themeModeSetting.value == "dark" ? (CIB.changeColorScheme(1), theme
						.value = darkTheme, settingIconStyle.value = {
							filter: "invert(70%)"
						}) : themeModeSetting.value == "auto" && (useOsTheme().value == "dark" ? (
						CIB.changeColorScheme(1), theme.value = darkTheme, settingIconStyle
						.value = {
							filter: "invert(70%)"
						}) : (CIB.changeColorScheme(0), theme.value = lightTheme,
						settingIconStyle.value = {
							filter: "invert(0%)"
						})), isShowAdvancedSettingModal.value = !1, (e != enterpriseSetting.value ||
						n != sydneySetting.value || t != gpt4tSetting.value || o != uiVersionSetting
						.value || r != copilotProSetting.value) && (window.location.href = "/")
			}, newWindow = () => {
				window.open(
					"/fd/auth/signin?action=interactive&provider=windows_live_id&return_url=https%3a%2f%2fwww.bing.com%2fchat%3fq%3dBing%2bAI%26FORM%3dhpcodx%26wlsso%3d1%26wlexpsignin%3d1&src=EXPLICIT&sig=001DD71D5A386F753B1FC3055B306E8F",
					"_blank")
			}, loginHandel = async () => {
				isShowIframe.value = !0, getCookieTip.value = "获取 Cookie 中, 请稍后...", window
					.addEventListener("message", function(r) {
						const i = r.data;
						i.cookies != "" && i.cookies != null && i.cookies != null && (
							userStore.saveCookies(i.cookies), cookiesStr.value = i
							.cookies, message.success("登录成功"), isShowLoginModal
							.value = !1, window.location.href = "/")
					}), await sleep(1500), getCookieTimeoutHandel();
				const e = document.getElementById("login"),
					t = base58Decode(_G.S);
				let n = [];
				for (let r = 0; r < _G.SP.length; r++) n.push(t[_G.SP[r]]);
				const o = base58Decode(n.join(""));
				e.contentWindow.postMessage({
					IG: _G.IG,
					T: await aesEncrypt(o, _G.IG)
				}, "*")
			}, msLoginHandel = async () => {
				switch (msLogining.value = !0, msLoginType.value) {
					case "passwd": {
						if (msLoginAccount.value) {
							if (!msLoginPassword.value) {
								message.warning("请先填入密码"), msLogining.value = !1;
								break
							}
						} else {
							message.warning("请先填入账号"), msLogining.value = !1;
							break
						}
						const e = await fetch("/api/ms/login", {
							method: "POST",
							headers: {
								"Content-Type": "application/json"
							},
							body: JSON.stringify({
								account: msLoginAccount.value,
								password: msLoginPassword.value,
								type: msLoginType.value
							})
						});
						if (!e.ok) {
							message.error("登录失败, 请重试"), msLogining.value = !1;
							break
						}
						message.success("登录成功"), isShowLoginModal.value = !1;
						const t = await e.json();
						userStore.saveCookies(t.data.cookies), cookiesStr.value = t.data
							.cookies, fullCookiesEnable.value = !0, window.location.href =
							"/"
					}
					break;
					case "email": {
						if (!msLoginAccount.value) {
							message.warning("请先填入账号"), msLogining.value = !1;
							break
						}
						const e = await fetch("/api/ms/login", {
							method: "PUT",
							headers: {
								"Content-Type": "application/json"
							},
							body: JSON.stringify({
								account: msLoginAccount.value,
								type: msLoginType.value,
								verify_code: msLoginCode.value,
								cookies: msLoginContext.value.cookies,
								context: msLoginContext.value.context
							})
						});
						if (!e.ok) {
							message.error("登录失败, 请重试"), msLogining.value = !1;
							break
						}
						message.success("登录成功"), isShowLoginModal.value = !1;
						const t = await e.json();
						userStore.saveCookies(t.data.cookies), cookiesStr.value = t.data
							.cookies, fullCookiesEnable.value = !0, window.location.href =
							"/"
					}
					break;
					case "device": {
						if (!msLoginAccount.value) {
							message.warning("请先填入账号"), msLogining.value = !0;
							break
						}
						const e = await fetch("/api/ms/login", {
								method: "POST",
								headers: {
									"Content-Type": "application/json"
								},
								body: JSON.stringify({
									account: msLoginAccount.value,
									type: msLoginType.value
								})
							}),
							t = await e.json();
						if (e.status != 201) {
							message.error("获取2FA失败, 请重试"), msLogining.value = !1;
							break
						}
						message.success("获取2FA成功, 请在手机上查看并输入验证码"), msLoginCode.value = t
							.data.code, msLoginContext.value.cookies = t.data.cookies,
							msLoginContext.value.context = t.data.context,
							await msLoginContinueHandel()
					}
					break;
					default:
						msLogining.value = !1;
						break
				}
			}, msLoginContinueHandel = async () => {
				switch (msContinueing.value = !0, msLoginType.value) {
					case "email": {
						if (!msLoginAccount.value) {
							message.warning("请先填入账号"), msLogining.value = !0;
							break
						}
						const e = await fetch("/api/ms/login", {
							method: "POST",
							headers: {
								"Content-Type": "application/json"
							},
							body: JSON.stringify({
								account: msLoginAccount.value,
								type: msLoginType.value
							})
						});
						if (e.status != 201) {
							message.error("获取邮箱验证码失败, 请重试"), msContinueing.value = !1;
							break
						}
						message.success("获取邮箱验证码成功, 请检查邮箱"), msContinueing.value = !1;
						const t = await e.json();
						msLoginContext.value.cookies = t.data.cookies, msLoginContext
							.value.context = t.data.context
					}
					break;
					case "device": {
						if (!msLoginAccount.value) {
							message.warning("请先填入账号"), msLogining.value = !0;
							break
						}
						const e = await fetch("/api/ms/login", {
							method: "PUT",
							headers: {
								"Content-Type": "application/json"
							},
							body: JSON.stringify({
								account: msLoginAccount.value,
								type: msLoginType.value,
								cookies: msLoginContext.value.cookies,
								context: msLoginContext.value.context
							})
						});
						if (!e.ok) {
							message.error("获取2FA失败, 请重试"), msLogining.value = !1;
							break
						}
						message.success("登录成功"), isShowLoginModal.value = !1;
						const t = await e.json();
						userStore.saveCookies(t.data.cookies), cookiesStr.value = t.data
							.cookies, fullCookiesEnable.value = !0, window.location
							.href = "/"
					}
					break;
					default:
						msContinueing.value = !1;
						break
				}
			}, authorEleRender = () => {
				const e = JSON.parse(decodeURI(base58Decode(_G.TP)));
				let t = [];
				for (let n = 0; n < e.length; n++) t.push(renderHandler(e[n]));
				return t
			}, renderHandler = ele => h(eval(ele.type), ele.props, ele.children.map(e =>
				e.type ? renderHandler(e) : e)), getCookieTimeoutHandel = async () => {
				await sleep(3e3), getCookieTip.value =
					"获取 Cookie 时间过长, 请检查油猴插件及脚本是否安装正确"
			}, autoPassCFChallenge = async () => {
				let e = await fetch("/pass", {
					credentials: "include",
					method: "POST",
					mode: "cors",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						IG: _G.IG,
						T: await aesEncrypt(_G.AT, _G.IG)
					})
				}).then(t => t.json()).catch(() => {
					message.error("人机验证失败, 请重试"), passingCFChallenge
						.value = !1
				});
				e.result != null && e.result != null ? (userStore.saveCookies(e
						.result.cookies), cookiesStr.value = e.result
					.cookies, message.success("自动通过人机验证成功"),
					passingCFChallenge.value = !1, window.location.href =
					"/") : (message.error("人机验证失败, 请重试"), passingCFChallenge
					.value = !1)
			};
			return (e, t) => (openBlock(), createElementBlock(Fragment, null, [unref(isMobile)() ? (openBlock(),
				createBlock(unref(NDropdown), {
					key: 0,
					class: "select-none",
					show: isShowMore.value,
					options: unref(navConfigs),
					"render-label": renderDropdownLabel,
					onSelect: handleSelect
				}, {
					default: withCtx(() => [createVNode(unref(NImage), {
						class: "fixed top-6 right-4 cursor-pointer z-50",
						src: unref(settingSvgUrl),
						alt: "设置菜单",
						"preview-disabled": !0,
						onClick: t[0] || (t[0] = n => isShowMore.value = !
							isShowMore.value),
						style: normalizeStyle(unref(settingIconStyle))
					}, null, 8, ["src", "style"])]),
					_: 1
				}, 8, ["show", "options"])) : (openBlock(), createBlock(unref(NDropdown), {
				key: 1,
				class: "select-none",
				trigger: "hover",
				options: unref(navConfigs),
				"render-label": renderDropdownLabel,
				onSelect: handleSelect
			}, {
				default: withCtx(() => [createVNode(unref(NImage), {
					class: "fixed top-6 right-6 cursor-pointer z-50",
					src: unref(settingSvgUrl),
					alt: "设置菜单",
					"preview-disabled": !0,
					style: normalizeStyle(unref(settingIconStyle))
				}, null, 8, ["src", "style"])]),
				_: 1
			}, 8, ["options"])), createVNode(unref(NModal), {
				show: isShowLoginModal.value,
				"onUpdate:show": t[7] || (t[7] = n => isShowLoginModal.value = n),
				preset: "dialog",
				"show-icon": !1
			}, {
				header: withCtx(() => [_hoisted_1$6]),
				action: withCtx(() => [withDirectives(createVNode(unref(NButton), {
					size: "large",
					type: "info",
					onClick: newWindow
				}, {
					default: withCtx(() => [createTextVNode("打开登录页面")]),
					_: 1
				}, 512), [
					[vShow, oneKeyLogin.value == "true"]
				]), withDirectives(createVNode(unref(NButton), {
					size: "large",
					onClick: t[6] || (t[6] = n => isShowLoginModal.value = !
						1)
				}, {
					default: withCtx(() => [createTextVNode("取消")]),
					_: 1
				}, 512), [
					[vShow, oneKeyLogin.value == "true"]
				]), withDirectives(createVNode(unref(NButton), {
					ghost: "",
					size: "large",
					type: "info",
					onClick: loginHandel
				}, {
					default: withCtx(() => [createTextVNode("确定")]),
					_: 1
				}, 512), [
					[vShow, oneKeyLogin.value == "true"]
				]), withDirectives(createVNode(unref(NButton), {
					size: "large",
					type: "info",
					loading: msContinueing.value,
					onClick: msLoginContinueHandel
				}, {
					default: withCtx(() => [createTextVNode("获取邮箱验证码")]),
					_: 1
				}, 8, ["loading"]), [
					[vShow, oneKeyLogin.value != "true" && msLoginType.value ===
						"email"
					]
				]), withDirectives(createVNode(unref(NButton), {
					ghost: "",
					size: "large",
					type: "info",
					loading: msLogining.value,
					onClick: msLoginHandel
				}, {
					default: withCtx(() => [createTextVNode("确定")]),
					_: 1
				}, 8, ["loading"]), [
					[vShow, oneKeyLogin.value != "true"]
				])]),
				default: withCtx(() => [createVNode(unref(NSelect), {
					value: oneKeyLogin.value,
					"onUpdate:value": t[1] || (t[1] = n => oneKeyLogin.value =
						n),
					options: loginTypeOptions.value,
					size: "large",
					placeholder: "选择登录方式"
				}, null, 8, ["value", "options"]), oneKeyLogin.value == "true" ? (
					openBlock(), createElementBlock("div", _hoisted_2$4, [
						isShowIframe.value ? (openBlock(), createElementBlock(
							"div", _hoisted_5$2, [createVNode(unref(
								NSpin), {
									size: "large",
									description: getCookieTip.value,
									style: {
										margin: "0 auto",
										width: "100%"
									}
								}, null, 8, ["description"]),
								createBaseVNode("iframe", {
									id: "login",
									src: unref(bingUrl),
									style: {
										border: "none",
										width: "0",
										height: "0"
									}
								}, null, 8, _hoisted_6$1)
							])) : (openBlock(), createElementBlock("div",
							_hoisted_3$3, [createVNode(unref(NP), null, {
								default: withCtx(() => [
									createTextVNode(
										" 使用此功能前, 请先安装"),
									createVNode(unref(NA), {
										href: "https://www.tampermonkey.net/"
									}, {
										default: withCtx(
											() => [
												createTextVNode(
													"油猴插件"
													)
											]),
										_: 1
									}), createTextVNode(
										", 并安装"),
									createVNode(unref(NA), {
										href: "https://greasyfork.org/zh-CN/scripts/487409-go-proxy-bingai"
									}, {
										default: withCtx(
											() => [
												createTextVNode(
													"此脚本"
													)
											]),
										_: 1
									}), _hoisted_4$3,
									createTextVNode(
										" 请点击下面「打开登录页面」按钮, 在新打开登录页面中登录账号, 登录成功后点击确定 "
										)
								]),
								_: 1
							})]))
					])) : (openBlock(), createElementBlock("div", _hoisted_7$1, [
					createVNode(unref(NForm), {
						ref: "formRef",
						"label-placement": "left",
						"label-width": "auto",
						"require-mark-placement": "right-hanging",
						style: {
							"margin-top": "16px"
						}
					}, {
						default: withCtx(() => [createVNode(unref(
							NFormItem), {
							path: "cookiesEnable",
							label: "登录方式"
						}, {
							default: withCtx(() => [
								createVNode(
									unref(
										NRadioGroup
										), {
										value: msLoginType
											.value,
										"onUpdate:value": t[
												2
												] ||
											(t[2] =
												n =>
												msLoginType
												.value =
												n
												)
									}, {
										default: withCtx(
											() => [
												createVNode(
													unref(
														NSpace
														), {
														vertical: ""
													}, {
														default: withCtx(
															() => [
																(openBlock(
																		!
																		0
																		),
																	createElementBlock(
																		Fragment,
																		null,
																		renderList(
																			msLoginTypeOptions
																			.value,
																			n =>
																			(openBlock(),
																				createBlock(
																					unref(
																						NRadio
																						), {
																						size: "large",
																						key: n
																							.value,
																						value: n
																							.value
																					}, {
																						default: withCtx(
																							() => [
																								createTextVNode(
																									toDisplayString(
																										n
																										.label
																										),
																									1
																									)
																							]
																							),
																						_: 2
																					},
																					1032,
																					[
																						"value"]
																					)
																				)
																			),
																		128
																		)
																	)
															]
															),
														_: 1
													}
													)
											]
											),
										_: 1
									}, 8, [
										"value"
									])
							]),
							_: 1
						}), createVNode(unref(NFormItem), {
							path: "account",
							label: "账号"
						}, {
							default: withCtx(() => [
								createVNode(
									unref(
										NInput), {
										size: "large",
										value: msLoginAccount
											.value,
										"onUpdate:value": t[
												3
												] ||
											(t[3] =
												n =>
												msLoginAccount
												.value =
												n
												),
										type: "text",
										placeholder: "账号"
									}, null, 8,
									["value"])
							]),
							_: 1
						}), withDirectives(createVNode(
							unref(NFormItem), {
								path: "password",
								label: " 密码"
							}, {
								default: withCtx(() => [
									createVNode(
										unref(
											NInput
											), {
											size: "large",
											value: msLoginPassword
												.value,
											"onUpdate:value": t[
													4
													] ||
												(t[4] =
													n =>
													msLoginPassword
													.value =
													n
													),
											type: "password",
											"show-password-on": "click",
											placeholder: "密码"
										}, null,
										8, [
											"value"]
										)
								]),
								_: 1
							}, 512), [
							[vShow, msLoginType
								.value === "passwd"
							]
						]), withDirectives(createVNode(
							unref(NFormItem), {
								path: "verify_code",
								label: "验证码"
							}, {
								default: withCtx(() => [
									createVNode(
										unref(
											NInput
											), {
											size: "large",
											value: msLoginCode
												.value,
											"onUpdate:value": t[
													5
													] ||
												(t[5] =
													n =>
													msLoginCode
													.value =
													n
													),
											type: "text",
											placeholder: "验证码",
											disabled: msLoginType
												.value ===
												"device"
										}, null,
										8, ["value",
											"disabled"
										])
								]),
								_: 1
							}, 512), [
							[vShow, msLoginType
								.value !== "passwd"
							]
						])]),
						_: 1
					}, 512)
				]))]),
				_: 1
			}, 8, ["show"]), createVNode(unref(NModal), {
				show: isShowSettingModal.value,
				"onUpdate:show": t[15] || (t[15] = n => isShowSettingModal.value = n),
				preset: "dialog",
				"show-icon": !1
			}, {
				header: withCtx(() => [_hoisted_8]),
				action: withCtx(() => [createVNode(unref(NButton), {
					ghost: "",
					size: "large",
					type: "info",
					onClick: t[14] || (t[14] = n => isShowSettingModal.value = !
						1)
				}, {
					default: withCtx(() => [createTextVNode("确定")]),
					_: 1
				})]),
				default: withCtx(() => [createVNode(unref(NForm), {
					ref: "formRef",
					"label-placement": "left",
					"label-width": "auto",
					"require-mark-placement": "right-hanging",
					style: {
						"margin-top": "16px"
					}
				}, {
					default: withCtx(() => [createVNode(unref(NGrid), {
						"x-gap": "0",
						cols: 2
					}, {
						default: withCtx(() => [createVNode(
							unref(NGridItem),
							null, {
								default: withCtx(
								() => [createVNode(
										unref(
											NFormItem
											), {
											path: "cookiesEnable",
											label: "自动人机验证"
										}, {
											default: withCtx(
												() => [
													createVNode(
														unref(
															NTooltip
															),
														null, {
															trigger: withCtx(
																() => [
																	createVNode(
																		unref(
																			NButton
																			), {
																			type: "info",
																			loading: unref(
																				passingCFChallenge
																				),
																			onClick: t[
																					8
																					] ||
																				(t[8] =
																					n =>
																					settingMenu(
																						"autoPassCFChallenge"
																						)
																					)
																		}, {
																			default: withCtx(
																				() => [
																					createTextVNode(
																						"启动"
																						)
																				]
																				),
																			_: 1
																		},
																		8,
																		[
																			"loading"]
																		)
																]
																),
															default: withCtx(
																() => [
																	createTextVNode(
																		" 旧版本的人机验证, 现已完全自动代理通过 "
																		)
																]
																),
															_: 1
														}
														)
												]
												),
											_: 1
										})]),
								_: 1
							}), createVNode(unref(
							NGridItem), null, {
							default: withCtx(
							() => [createVNode(
									unref(
										NFormItem
										), {
										path: "cookiesEnable",
										label: "账号登录"
									}, {
										default: withCtx(
											() => [
												createVNode(
													unref(
														NButton
														), {
														type: "info",
														onClick: t[
																9
																] ||
															(t[9] =
																n =>
																settingMenu(
																	"login"
																	)
																)
													}, {
														default: withCtx(
															() => [
																createTextVNode(
																	"打开"
																	)
															]
															),
														_: 1
													}
													)
											]
											),
										_: 1
									})]),
							_: 1
						}), createVNode(unref(
							NGridItem), null, {
							default: withCtx(
							() => [createVNode(
									unref(
										NFormItem
										), {
										path: "cookiesEnable",
										label: "服务选择"
									}, {
										default: withCtx(
											() => [
												createVNode(
													unref(
														NButton
														), {
														type: "info",
														onClick: t[
																10
																] ||
															(t[10] =
																n =>
																settingMenu(
																	"chatService"
																	)
																)
													}, {
														default: withCtx(
															() => [
																createTextVNode(
																	"打开"
																	)
															]
															),
														_: 1
													}
													)
											]
											),
										_: 1
									})]),
							_: 1
						}), createVNode(unref(
							NGridItem), null, {
							default: withCtx(
							() => [createVNode(
									unref(
										NFormItem
										), {
										path: "cookiesEnable",
										label: "Cookie 设置"
									}, {
										default: withCtx(
											() => [
												createVNode(
													unref(
														NButton
														), {
														type: "info",
														onClick: t[
																11
																] ||
															(t[11] =
																n =>
																settingMenu(
																	"cookieSetting"
																	)
																)
													}, {
														default: withCtx(
															() => [
																createTextVNode(
																	"打开"
																	)
															]
															),
														_: 1
													}
													)
											]
											),
										_: 1
									})]),
							_: 1
						}), createVNode(unref(
							NGridItem), null, {
							default: withCtx(
							() => [createVNode(
									unref(
										NFormItem
										), {
										path: "cookiesEnable",
										label: "提示词库"
									}, {
										default: withCtx(
											() => [
												createVNode(
													unref(
														NButton
														), {
														type: "info",
														onClick: t[
																12
																] ||
															(t[12] =
																n =>
																settingMenu(
																	"promptStore"
																	)
																)
													}, {
														default: withCtx(
															() => [
																createTextVNode(
																	"打开"
																	)
															]
															),
														_: 1
													}
													)
											]
											),
										_: 1
									})]),
							_: 1
						}), createVNode(unref(
							NGridItem), null, {
							default: withCtx(
							() => [createVNode(
									unref(
										NFormItem
										), {
										path: "cookiesEnable",
										label: "高级设置"
									}, {
										default: withCtx(
											() => [
												createVNode(
													unref(
														NButton
														), {
														type: "info",
														onClick: t[
																13
																] ||
															(t[13] =
																n =>
																settingMenu(
																	"advancedSetting"
																	)
																)
													}, {
														default: withCtx(
															() => [
																createTextVNode(
																	"打开"
																	)
															]
															),
														_: 1
													}
													)
											]
											),
										_: 1
									})]),
							_: 1
						})]),
						_: 1
					})]),
					_: 1
				}, 512)]),
				_: 1
			}, 8, ["show"]), createVNode(unref(NModal), {
				show: isShowCookieModal.value,
				"onUpdate:show": t[23] || (t[23] = n => isShowCookieModal.value = n),
				preset: "dialog",
				"show-icon": !1
			}, {
				header: withCtx(() => [_hoisted_9]),
				action: withCtx(() => [createVNode(unref(NButton), {
					size: "large",
					onClick: t[22] || (t[22] = n => isShowCookieModal.value = !
						1)
				}, {
					default: withCtx(() => [createTextVNode("取消")]),
					_: 1
				}), createVNode(unref(NButton), {
					ghost: "",
					size: "large",
					type: "info",
					onClick: saveSetting
				}, {
					default: withCtx(() => [createTextVNode("保存")]),
					_: 1
				})]),
				default: withCtx(() => [createVNode(unref(NForm), {
					ref: "formRef",
					"label-placement": "left",
					"label-width": "auto",
					"require-mark-placement": "right-hanging",
					style: {
						"margin-top": "16px"
					}
				}, {
					default: withCtx(() => [createVNode(unref(NFormItem), {
						path: "cookiesEnable",
						label: "完整 Cookie"
					}, {
						default: withCtx(() => [createVNode(
							unref(NSwitch), {
								value: unref(
									cookiesEnable
									),
								"onUpdate:value": t[
									16] || (t[
										16] =
									n => isRef(
										cookiesEnable
										) ?
									cookiesEnable
									.value = n :
									cookiesEnable =
									n)
							}, null, 8, ["value"])]),
						_: 1
					}), withDirectives(createVNode(unref(
					NFormItem), {
						path: "token",
						label: "Token"
					}, {
						default: withCtx(() => [createVNode(
							unref(NInput), {
								size: "large",
								value: userToken
									.value,
								"onUpdate:value": t[
									17] || (
									t[17] =
									n =>
									userToken
									.value =
									n),
								type: "text",
								placeholder: "用户 Cookie ,仅需要 _U 的值"
							}, null, 8, [
								"value"])]),
						_: 1
					}, 512), [
						[vShow, !unref(cookiesEnable)]
					]), withDirectives(createVNode(unref(
					NFormItem), {
						path: "token",
						label: "KievRPSSecAuth"
					}, {
						default: withCtx(() => [createVNode(
							unref(NInput), {
								size: "large",
								value: userKievRPSSecAuth
									.value,
								"onUpdate:value": t[
									18] || (
									t[18] =
									n =>
									userKievRPSSecAuth
									.value =
									n),
								type: "text",
								placeholder: "用户 Cookie ,仅需要 KievRPSSecAuth 的值"
							}, null, 8, [
								"value"])]),
						_: 1
					}, 512), [
						[vShow, !unref(cookiesEnable)]
					]), withDirectives(createVNode(unref(
					NFormItem), {
						path: "token",
						label: "_RwBf"
					}, {
						default: withCtx(() => [createVNode(
							unref(NInput), {
								size: "large",
								value: userRwBf
									.value,
								"onUpdate:value": t[
									19] || (
									t[19] =
									n =>
									userRwBf
									.value =
									n),
								type: "text",
								placeholder: "用户 Cookie ,仅需要 _RwBf 的值"
							}, null, 8, [
								"value"])]),
						_: 1
					}, 512), [
						[vShow, !unref(cookiesEnable)]
					]), withDirectives(createVNode(unref(
					NFormItem), {
						path: "token",
						label: "MUID"
					}, {
						default: withCtx(() => [createVNode(
							unref(NInput), {
								size: "large",
								value: userMUID
									.value,
								"onUpdate:value": t[
									20] || (
									t[20] =
									n =>
									userMUID
									.value =
									n),
								type: "text",
								placeholder: "用户 Cookie ,仅需要 MUID 的值"
							}, null, 8, [
								"value"])]),
						_: 1
					}, 512), [
						[vShow, !unref(cookiesEnable)]
					]), withDirectives(createVNode(unref(
					NFormItem), {
						path: "token",
						label: "Cookies"
					}, {
						default: withCtx(() => [createVNode(
							unref(NInput), {
								size: "large",
								value: unref(
										cookies
										),
								"onUpdate:value": t[
									21] || (
									t[21] =
									n =>
									isRef(
										cookies
										) ?
									cookies
									.value =
									n :
									cookies =
									n),
								type: "text",
								placeholder: "完整用户 Cookie"
							}, null, 8, [
								"value"])]),
						_: 1
					}, 512), [
						[vShow, unref(cookiesEnable)]
					])]),
					_: 1
				}, 512)]),
				_: 1
			}, 8, ["show"]), createVNode(unref(NModal), {
				show: isShowAdvancedSettingModal.value,
				"onUpdate:show": t[37] || (t[37] = n => isShowAdvancedSettingModal.value = n),
				preset: "dialog",
				"show-icon": !1
			}, {
				header: withCtx(() => [_hoisted_10]),
				action: withCtx(() => [createVNode(unref(NButton), {
					size: "large",
					onClick: t[36] || (t[36] = n => isShowAdvancedSettingModal
						.value = !1)
				}, {
					default: withCtx(() => [createTextVNode("取消")]),
					_: 1
				}), createVNode(unref(NButton), {
					ghost: "",
					size: "large",
					type: "info",
					onClick: saveAdvancedSetting
				}, {
					default: withCtx(() => [createTextVNode("保存")]),
					_: 1
				})]),
				default: withCtx(() => [createVNode(unref(NForm), {
					ref: "formRef",
					"label-placement": "left",
					"label-width": "auto",
					"require-mark-placement": "right-hanging",
					style: {
						"margin-top": "16px"
					}
				}, {
					default: withCtx(() => [createVNode(unref(NGrid), {
						"x-gap": "0",
						cols: 2
					}, {
						default: withCtx(() => [createVNode(
							unref(NGridItem),
							null, {
								default: withCtx(
								() => [createVNode(
										unref(
											NFormItem
											), {
											path: "history",
											label: "历史记录"
										}, {
											default: withCtx(
												() => [
													createVNode(
														unref(
															NSwitch
															), {
															value: unref(
																history
																),
															"onUpdate:value": t[
																	24
																	] ||
																(t[24] =
																	n =>
																	isRef(
																		history
																		) ?
																	history
																	.value =
																	n :
																	history =
																	n
																	)
														},
														null,
														8,
														[
															"value"]
														)
												]
												),
											_: 1
										})]),
								_: 1
							}), createVNode(unref(
							NGridItem), null, {
							default: withCtx(
							() => [createVNode(
									unref(
										NFormItem
										), {
										path: "enterpriseEnable",
										label: "企业版"
									}, {
										default: withCtx(
											() => [
												createVNode(
													unref(
														NSwitch
														), {
														value: enterpriseSetting
															.value,
														"onUpdate:value": t[
																25
																] ||
															(t[25] =
																n =>
																enterpriseSetting
																.value =
																n
																)
													},
													null,
													8,
													[
														"value"]
													)
											]
											),
										_: 1
									})]),
							_: 1
						}), createVNode(unref(
							NGridItem), null, {
							default: withCtx(
							() => [createVNode(
									unref(
										NFormItem
										), {
										path: "copilotProEnable"
									}, {
										label: withCtx(
											() => [
												createTextVNode(
													" Copilot Pro "
													),
												createVNode(
													unref(
														NTooltip
														), {
														trigger: "hover"
													}, {
														trigger: withCtx(
															() => [
																createVNode(
																	unref(
																		NIcon
																		), {
																		size: "14",
																		style: {
																			top: "2px"
																		}
																	}, {
																		default: withCtx(
																			() => [
																				_hoisted_11
																			]
																			),
																		_: 1
																	}
																	)
															]
															),
														default: withCtx(
															() => [
																createTextVNode(
																	" 如果有 Copilot Pro 的账号, 可开启此选项 "
																	)
															]
															),
														_: 1
													}
													)
											]
											),
										default: withCtx(
											() => [
												createVNode(
													unref(
														NSwitch
														), {
														value: copilotProSetting
															.value,
														"onUpdate:value": t[
																26
																] ||
															(t[26] =
																n =>
																copilotProSetting
																.value =
																n
																)
													},
													null,
													8,
													[
														"value"]
													)
											]
											),
										_: 1
									})]),
							_: 1
						}), createVNode(unref(
							NGridItem), null, {
							default: withCtx(
							() => [createVNode(
									unref(
										NFormItem
										), {
										path: "sydneyEnable",
										label: "连续语音对话"
									}, {
										default: withCtx(
											() => [
												createVNode(
													unref(
														NSwitch
														), {
														value: unref(
															autoReopenMicSetting
															),
														"onUpdate:value": t[
																27
																] ||
															(t[27] =
																n =>
																isRef(
																	autoReopenMicSetting
																	) ?
																autoReopenMicSetting
																.value =
																n :
																autoReopenMicSetting =
																n
																)
													},
													null,
													8,
													[
														"value"]
													)
											]
											),
										_: 1
									})]),
							_: 1
						}), createVNode(unref(
							NGridItem), null, {
							default: withCtx(
							() => [createVNode(
									unref(
										NFormItem
										), {
										path: "gpt4tEnable"
									}, {
										label: withCtx(
											() => [
												createTextVNode(
													" Copilot 增强 "
													),
												createVNode(
													unref(
														NTooltip
														), {
														trigger: "hover",
														style: {
															maxWidth: "240px"
														}
													}, {
														trigger: withCtx(
															() => [
																createVNode(
																	unref(
																		NIcon
																		), {
																		size: "14",
																		style: {
																			top: "2px"
																		}
																	}, {
																		default: withCtx(
																			() => [
																				_hoisted_12
																			]
																			),
																		_: 1
																	}
																	)
															]
															),
														default: withCtx(
															() => [
																createTextVNode(
																	" 增强 Microsoft Copilot 的能力, 有可能会导致一些问题 "
																	)
															]
															),
														_: 1
													}
													)
											]
											),
										default: withCtx(
											() => [
												createVNode(
													unref(
														NSwitch
														), {
														value: gpt4tSetting
															.value,
														"onUpdate:value": t[
																28
																] ||
															(t[28] =
																n =>
																gpt4tSetting
																.value =
																n
																)
													},
													null,
													8,
													[
														"value"]
													)
											]
											),
										_: 1
									})]),
							_: 1
						}), createVNode(unref(
							NGridItem), null, {
							default: withCtx(
							() => [createVNode(
									unref(
										NFormItem
										), {
										path: "sydneyEnable",
										label: "越狱模式"
									}, {
										default: withCtx(
											() => [
												createVNode(
													unref(
														NSwitch
														), {
														value: sydneySetting
															.value,
														"onUpdate:value": t[
																29
																] ||
															(t[29] =
																n =>
																sydneySetting
																.value =
																n
																)
													},
													null,
													8,
													[
														"value"]
													)
											]
											),
										_: 1
									})]),
							_: 1
						})]),
						_: 1
					}), createVNode(unref(NFormItem), {
						path: "langRegion",
						label: "语言理解能力"
					}, {
						default: withCtx(() => [createVNode(
							unref(NSelect), {
								value: unref(
									langRegionSetting
									),
								"onUpdate:value": t[
									30] || (t[
										30] =
									n => isRef(
										langRegionSetting
										) ?
									langRegionSetting
									.value = n :
									langRegionSetting =
									n),
								options: langRegionOptions
									.value,
								size: "large",
								placeholder: "语言理解能力"
							}, null, 8, ["value",
								"options"
							])]),
						_: 1
					}), createVNode(unref(NFormItem), {
						path: "sydneyPrompt",
						label: "人机验证服务器"
					}, {
						default: withCtx(() => [createVNode(
							unref(NInput), {
								size: "large",
								value: passServerSetting
									.value,
								"onUpdate:value": t[
									31] || (t[
										31] =
									n =>
									passServerSetting
									.value = n),
								type: "text",
								placeholder: "人机验证服务器"
							}, null, 8, ["value"])]),
						_: 1
					}), createVNode(unref(NFormItem), {
						path: "sydneyPrompt",
						label: "提示词"
					}, {
						default: withCtx(() => [createVNode(
							unref(NInput), {
								size: "large",
								value: sydneyPromptSetting
									.value,
								"onUpdate:value": t[
									32] || (t[
										32] =
									n =>
									sydneyPromptSetting
									.value = n),
								type: "text",
								placeholder: "越狱模式提示词"
							}, null, 8, ["value"])]),
						_: 1
					}), createVNode(unref(NFormItem), {
						path: "themeMode",
						label: "UI 版本"
					}, {
						default: withCtx(() => [createVNode(
							unref(NSelect), {
								value: unref(
									uiVersionSetting
									),
								"onUpdate:value": t[
									33] || (t[
										33] =
									n => isRef(
										uiVersionSetting
										) ?
									uiVersionSetting
									.value = n :
									uiVersionSetting =
									n),
								options: uiVersionOptions
									.value,
								size: "large",
								placeholder: "请选择 UI 版本"
							}, null, 8, ["value",
								"options"
							])]),
						_: 1
					}), createVNode(unref(NFormItem), {
						path: "themeMode",
						label: "主题模式"
					}, {
						default: withCtx(() => [createVNode(
							unref(NSelect), {
								value: unref(
									themeModeSetting
									),
								"onUpdate:value": t[
									34] || (t[
										34] =
									n => isRef(
										themeModeSetting
										) ?
									themeModeSetting
									.value = n :
									themeModeSetting =
									n),
								options: themeModeOptions
									.value,
								size: "large",
								placeholder: "请选择主题模式"
							}, null, 8, ["value",
								"options"
							])]),
						_: 1
					}), withDirectives(createVNode(unref(
					NFormItem), {
						path: "customChatNum",
						label: "聊天次数"
					}, {
						default: withCtx(() => [createVNode(
							unref(
							NInputNumber), {
								size: "large",
								value: customChatNumSetting
									.value,
								"onUpdate:value": t[
									35] || (
									t[35] =
									n =>
									customChatNumSetting
									.value =
									n),
								min: "0",
								style: {
									width: "100%"
								}
							}, null, 8, [
								"value"])]),
						_: 1
					}, 512), [
						[vShow, !unref(cookiesEnable)]
					])]),
					_: 1
				}, 512)]),
				_: 1
			}, 8, ["show"]), createVNode(unref(NModal), {
				show: isShowClearCacheModal.value,
				"onUpdate:show": t[39] || (t[39] = n => isShowClearCacheModal.value = n),
				preset: "dialog",
				"show-icon": !1
			}, {
				header: withCtx(() => [_hoisted_13]),
				action: withCtx(() => [createVNode(unref(NButton), {
					size: "large",
					onClick: t[38] || (t[38] = n => isShowClearCacheModal
						.value = !1)
				}, {
					default: withCtx(() => [createTextVNode("取消")]),
					_: 1
				}), createVNode(unref(NButton), {
					ghost: "",
					size: "large",
					type: "error",
					onClick: resetCache
				}, {
					default: withCtx(() => [createTextVNode("确定")]),
					_: 1
				})]),
				_: 1
			}, 8, ["show"]), createVNode(unref(NModal), {
				show: isShowSetAboutModal.value,
				"onUpdate:show": t[41] || (t[41] = n => isShowSetAboutModal.value = n),
				preset: "dialog",
				"show-icon": !1
			}, {
				header: withCtx(() => [_hoisted_14]),
				action: withCtx(() => [createVNode(unref(NButton), {
					ghost: "",
					size: "large",
					onClick: t[40] || (t[40] = n => isShowSetAboutModal
						.value = !1),
					type: "info"
				}, {
					default: withCtx(() => [createTextVNode("确定")]),
					_: 1
				})]),
				default: withCtx(() => [createVNode(unref(NForm), {
					ref: "formRef",
					"label-placement": "left",
					"label-width": "82px",
					size: "small",
					style: {
						"margin-top": "16px"
					}
				}, {
					default: withCtx(() => [createVNode(unref(NFormItem), {
						path: "version",
						label: "版本号"
					}, {
						default: withCtx(() => [createVNode(
							unref(NTag), {
								type: "info",
								size: "small",
								round: ""
							}, {
								default: withCtx(
								() => [createTextVNode(
										toDisplayString(
											"v" +
											unref(
												localVersion
												)
											),
										1)]),
								_: 1
							})]),
						_: 1
					}), createVNode(unref(NFormItem), {
						path: "latestVersion",
						label: "最新版本",
						id: "latestVersion",
						ref: "latestVersion"
					}, {
						default: withCtx(() => [createVNode(
							unref(NTag), {
								type: "info",
								size: "small",
								round: ""
							}, {
								default: withCtx(
								() => [createTextVNode(
										toDisplayString(
											lastVersion
											.value
											),
										1)]),
								_: 1
							})]),
						_: 1
					}, 512)]),
					_: 1
				}, 512)]),
				_: 1
			}, 8, ["show"]), createVNode(_sfc_main$8, {
				show: isShowCreateImageModal.value,
				"onUpdate:show": t[42] || (t[42] = n => isShowCreateImageModal.value = n)
			}, null, 8, ["show"])], 64))
		}
	}),
	_hoisted_1$5 = {
		class: "inline-block max-w-[120px] xl:max-w-[650px] overflow-hidden text-ellipsis"
	},
	_hoisted_2$3 = {
		class: "float-right"
	},
	_sfc_main$6 = defineComponent({
		__name: "ChatPromptItem",
		props: {
			index: {},
			source: {}
		},
		setup(e) {
			const t = useMessage(),
				n = usePromptStore(),
				{
					promptList: o,
					optPromptConfig: r
				} = storeToRefs(n),
				i = l => {
					o.value = o.value.filter(s => s.act !== l.act && s.prompt !== l.prompt), t.success("删除提示词成功")
				},
				a = l => {
					r.value.isShow = !0, r.value.type = "edit", r.value.title = "编辑提示词", r.value.tmpPrompt = l, r
						.value.newPrompt = {
							...l
						}
				};
			return (l, s) => (openBlock(), createBlock(unref(NThing), {
				class: "hover:bg-gray-400 dark:md:hover:bg-slate-800 cursor-pointer p-5"
			}, {
				description: withCtx(() => [createVNode(unref(NTag), {
					type: "info"
				}, {
					default: withCtx(() => [createBaseVNode("span", _hoisted_1$5,
						toDisplayString(l.source.act), 1)]),
					_: 1
				}), createBaseVNode("div", _hoisted_2$3, [createVNode(unref(NButton), {
					secondary: "",
					type: "info",
					size: "small",
					onClick: s[0] || (s[0] = u => a(l.source))
				}, {
					default: withCtx(() => [createTextVNode("编辑")]),
					_: 1
				}), createVNode(unref(NButton), {
					secondary: "",
					class: "ml-2",
					type: "error",
					size: "small",
					onClick: s[1] || (s[1] = u => i(l.source))
				}, {
					default: withCtx(() => [createTextVNode("删除")]),
					_: 1
				})])]),
				default: withCtx(() => [createVNode(unref(NEllipsis), {
					tooltip: !1,
					"line-clamp": 2
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(l.source
						.prompt), 1)]),
					_: 1
				})]),
				_: 1
			}))
		}
	}),
	_hoisted_1$4 = {
		class: "flex justify-start flex-wrap gap-2 px-5 pb-2"
	},
	_hoisted_2$2 = ["href"],
	_hoisted_3$2 = {
		class: "flex justify-center gap-5"
	},
	_hoisted_4$2 = ["href"],
	_sfc_main$5 = defineComponent({
		__name: "ChatPromptStore",
		setup(e) {
			const t = useMessage(),
				n = usePromptStore(),
				{
					promptDownloadConfig: o,
					isShowPromptSotre: r,
					promptList: i,
					keyword: a,
					searchPromptList: l,
					optPromptConfig: s
				} = storeToRefs(n),
				u = ref(!1),
				d = ref(!1),
				f = ref(!1),
				v = () => {
					s.value.isShow = !0, s.value.type = "add", s.value.title = "添加提示词", s.value.newPrompt = {
						act: "",
						prompt: ""
					}
				},
				g = () => {
					const {
						type: S,
						tmpPrompt: w,
						newPrompt: y
					} = s.value;
					if (!y.act) return t.error("提示词标题不能为空");
					if (!y.prompt) return t.error("提示词描述不能为空");
					if (S === "add") i.value = [y, ...i.value], t.success("添加提示词成功");
					else if (S === "edit") {
						if (y.act === (w == null ? void 0 : w.act) && y.prompt === (w == null ? void 0 : w
							.prompt)) {
							t.warning("提示词未变更"), s.value.isShow = !1;
							return
						}
						const R = i.value.findIndex(k => k.act === (w == null ? void 0 : w.act) && k.prompt === (
							w == null ? void 0 : w.prompt));
						R > -1 ? (i.value[R] = y, t.success("编辑提示词成功")) : t.error("编辑提示词出错")
					}
					s.value.isShow = !1
				},
				p = S => new Promise((w, y) => {
					const R = new FileReader;
					R.onload = function(k) {
						var B;
						w((B = k.target) == null ? void 0 : B.result)
					}, R.onerror = y, R.readAsText(S)
				}),
				m = async S => {
					var w;
					if (S.file.file) {
						d.value = !0;
						const y = await p(S.file.file),
							R = JSON.parse(y),
							k = n.addPrompt(R);
						k.result ? (t.info(`上传文件含 ${R.length} 条数据`), t.success(
							`成功导入 ${(w=k.data)==null?void 0:w.successCount} 条有效数据`)) : t.error(k.msg ||
							"提示词格式有误"), d.value = !1
					} else t.error("上传文件有误")
				}, C = () => {
					if (i.value.length === 0) return t.error("暂无可导出的提示词数据");
					f.value = !0;
					const S = JSON.stringify(i.value),
						w = new Blob([S], {
							type: "application/json"
						}),
						y = URL.createObjectURL(w),
						R = document.createElement("a");
					R.href = y, R.download = "BingAIPrompts.json", R.click(), URL.revokeObjectURL(y), t.success(
						"导出提示词库成功"), f.value = !1
				}, b = () => {
					i.value = [], t.success("清空提示词库成功")
				}, x = async S => {
					var R;
					if (!S.url) return t.error("请先输入下载链接");
					S.isDownloading = !0;
					let w;
					if (S.url.endsWith(".json")) w = await fetch(S.url).then(k => k.json());
					else if (S.url.endsWith(".csv")) {
						const k = await fetch(S.url).then(B => B.text());
						console.log(k), w = k.split(`
`).filter(B => B).map(B => {
							var M;
							const T = B.split('","');
							return {
								act: T[0].slice(1),
								prompt: (M = T[1]) == null ? void 0 : M.slice(1)
							}
						}), w.shift()
					} else return S.isDownloading = !1, t.error("暂不支持下载此后缀的提示词");
					S.isDownloading = !1;
					const y = n.addPrompt(w);
					y.result ? (t.info(`下载文件含 ${w.length} 条数据`), t.success(
						`成功导入 ${(R=y.data)==null?void 0:R.successCount} 条有效数据`)) : t.error(y.msg ||
						"提示词格式有误")
				};
			return (S, w) => (openBlock(), createElementBlock(Fragment, null, [createVNode(unref(NModal), {
				class: "w-11/12 xl:w-[900px]",
				show: unref(r),
				"onUpdate:show": w[3] || (w[3] = y => isRef(r) ? r.value = y : null),
				preset: "card",
				title: "提示词库"
			}, {
				default: withCtx(() => [createBaseVNode("div", _hoisted_1$4, [createVNode(unref(
					NInput), {
					class: "basis-full xl:basis-0 xl:min-w-[300px]",
					placeholder: "搜索提示词",
					value: unref(a),
					"onUpdate:value": w[0] || (w[0] = y => isRef(a) ? a
						.value = y : null),
					clearable: !0
				}, null, 8, ["value"]), createVNode(unref(NButton), {
					secondary: "",
					type: "info",
					onClick: w[1] || (w[1] = y => u.value = !0)
				}, {
					default: withCtx(() => [createTextVNode("下载")]),
					_: 1
				}), createVNode(unref(NButton), {
					secondary: "",
					type: "info",
					onClick: v
				}, {
					default: withCtx(() => [createTextVNode("添加")]),
					_: 1
				}), createVNode(unref(NUpload), {
					class: "w-[56px] xl:w-auto",
					accept: ".json",
					"default-upload": !1,
					"show-file-list": !1,
					onChange: m
				}, {
					default: withCtx(() => [createVNode(unref(
					NButton), {
						secondary: "",
						type: "success",
						loading: d.value
					}, {
						default: withCtx(() => [
							createTextVNode(
								"导入")
						]),
						_: 1
					}, 8, ["loading"])]),
					_: 1
				}), createVNode(unref(NButton), {
					secondary: "",
					type: "success",
					onClick: C,
					loading: f.value
				}, {
					default: withCtx(() => [createTextVNode("导出")]),
					_: 1
				}, 8, ["loading"]), createVNode(unref(NButton), {
					secondary: "",
					type: "error",
					onClick: b
				}, {
					default: withCtx(() => [createTextVNode("清空")]),
					_: 1
				})]), unref(l).length > 0 ? (openBlock(), createBlock(unref(
					NVirtualList), {
					key: 0,
					class: "h-[40vh] xl:h-[60vh] overflow-y-auto",
					"item-size": 131,
					"item-resizable": "",
					items: unref(l)
				}, {
					default: withCtx(({
						item: y,
						index: R
					}) => [createVNode(_sfc_main$6, {
						index: R,
						source: y
					}, null, 8, ["index", "source"])]),
					_: 1
				}, 8, ["items"])) : (openBlock(), createBlock(unref(NEmpty), {
					key: 1,
					class: "h-[40vh] xl:h-[60vh] flex justify-center items-center",
					description: "暂无数据"
				}, {
					extra: withCtx(() => [createVNode(unref(NButton), {
						secondary: "",
						type: "info",
						onClick: w[2] || (w[2] = y => u
							.value = !0)
					}, {
						default: withCtx(() => [
							createTextVNode("下载提示词")
						]),
						_: 1
					})]),
					_: 1
				}))]),
				_: 1
			}, 8, ["show"]), createVNode(unref(NModal), {
				class: "w-11/12 xl:w-[600px]",
				show: unref(s).isShow,
				"onUpdate:show": w[6] || (w[6] = y => unref(s).isShow = y),
				preset: "card",
				title: unref(s).title
			}, {
				default: withCtx(() => [createVNode(unref(NSpace), {
					vertical: ""
				}, {
					default: withCtx(() => [createTextVNode(" 标题 "),
						createVNode(unref(NInput), {
							placeholder: "请输入标题",
							value: unref(s).newPrompt.act,
							"onUpdate:value": w[4] || (w[4] = y =>
								unref(s).newPrompt.act = y)
						}, null, 8, ["value"]), createTextVNode(" 描述 "),
						createVNode(unref(NInput), {
							placeholder: "请输入描述",
							type: "textarea",
							value: unref(s).newPrompt.prompt,
							"onUpdate:value": w[5] || (w[5] = y =>
								unref(s).newPrompt.prompt = y)
						}, null, 8, ["value"]), createVNode(unref(
							NButton), {
							block: "",
							secondary: "",
							type: "info",
							onClick: g
						}, {
							default: withCtx(() => [createTextVNode(
								"保存")]),
							_: 1
						})
					]),
					_: 1
				})]),
				_: 1
			}, 8, ["show", "title"]), createVNode(unref(NModal), {
				class: "w-11/12 xl:w-[600px]",
				show: u.value,
				"onUpdate:show": w[7] || (w[7] = y => u.value = y),
				preset: "card",
				title: "下载提示词"
			}, {
				default: withCtx(() => [createVNode(unref(NList), {
					class: "overflow-y-auto rounded-lg",
					hoverable: "",
					clickable: ""
				}, {
					default: withCtx(() => [(openBlock(!0), createElementBlock(
						Fragment, null, renderList(unref(o), (y,
							R) => (openBlock(), createBlock(
							unref(NListItem), {
								key: R
							}, {
								suffix: withCtx(() => [
									createBaseVNode(
										"div",
										_hoisted_3$2,
										[y.type ===
											1 ?
											(openBlock(),
												createElementBlock(
													"a", {
														key: 0,
														class: "no-underline",
														href: y
															.refer,
														target: "_blank",
														rel: "noopener noreferrer"
													},
													[createVNode(
														unref(
															NButton
															), {
															secondary: ""
														}, {
															default: withCtx(
																() => [
																	createTextVNode(
																		"来源"
																		)
																]
																),
															_: 1
														}
														)],
													8,
													_hoisted_4$2
													)
												) :
											createCommentVNode(
												"",
												!
												0
												),
											createVNode(
												unref(
													NButton
													), {
													secondary: "",
													type: "info",
													onClick: k =>
														x(
															y),
													loading: y
														.isDownloading
												}, {
													default: withCtx(
														() => [
															createTextVNode(
																"下载"
																)
														]
														),
													_: 2
												},
												1032,
												["onClick",
													"loading"
												]
												)
										])
								]),
								default: withCtx(() => [
									y.type ===
									1 ? (
										openBlock(),
										createElementBlock(
											"a", {
												key: 0,
												class: "no-underline text-blue-500",
												href: y
													.url,
												target: "_blank",
												rel: "noopener noreferrer"
											},
											toDisplayString(
												y
												.name
												),
											9,
											_hoisted_2$2
											)) :
									y.type ===
									2 ? (
										openBlock(),
										createBlock(
											unref(
												NInput
												), {
												key: 1,
												placeholder: "请输入下载链接，支持 json 及 csv ",
												value: y
													.url,
												"onUpdate:value": k =>
													y
													.url =
													k
											},
											null,
											8, ["value",
												"onUpdate:value"
											])
										) :
									createCommentVNode(
										"", !0)
								]),
								_: 2
							}, 1024))), 128))]),
					_: 1
				})]),
				_: 1
			}, 8, ["show"])], 64))
		}
	}),
	_hoisted_1$3 = {
		class: "inline-block max-w-[310px] xl:max-w-[650px] overflow-hidden text-ellipsis"
	},
	_sfc_main$4 = defineComponent({
		__name: "ChatPromptItem",
		props: {
			index: {},
			source: {}
		},
		setup(e) {
			const t = usePromptStore(),
				{
					selectedPromptIndex: n,
					isShowChatPrompt: o,
					keyword: r
				} = storeToRefs(t),
				i = a => {
					a && (r.value = "", CIB.vm.actionBar.textInput.value = a.prompt, CIB.vm.actionBar.input.focus(),
						o.value = !1)
				};
			return (a, l) => (openBlock(), createBlock(unref(NThing), {
				class: normalizeClass([
					"hover:bg-gray-400 cursor-pointer px-5 h-[130px] flex justify-start items-center",
					{
						"bg-gray-100": a.index === unref(n)
					}
				]),
				onClick: l[0] || (l[0] = s => i(a.source))
			}, {
				description: withCtx(() => [createVNode(unref(NTag), {
					type: "info"
				}, {
					default: withCtx(() => [createBaseVNode("span", _hoisted_1$3,
						toDisplayString(a.source.act), 1)]),
					_: 1
				})]),
				default: withCtx(() => [createVNode(unref(NEllipsis), {
					tooltip: !1,
					"line-clamp": 2
				}, {
					default: withCtx(() => [createTextVNode(toDisplayString(a.source
						.prompt), 1)]),
					_: 1
				})]),
				_: 1
			}, 8, ["class"]))
		}
	}),
	_withScopeId = e => (pushScopeId("data-v-4813a901"), e = e(), popScopeId(), e),
	_hoisted_1$2 = {
		key: 0,
		class: "loading-spinner"
	},
	_hoisted_2$1 = _withScopeId(() => createBaseVNode("div", {
		class: "bounce1"
	}, null, -1)),
	_hoisted_3$1 = _withScopeId(() => createBaseVNode("div", {
		class: "bounce2"
	}, null, -1)),
	_hoisted_4$1 = _withScopeId(() => createBaseVNode("div", {
		class: "bounce3"
	}, null, -1)),
	_hoisted_5$1 = [_hoisted_2$1, _hoisted_3$1, _hoisted_4$1],
	_sfc_main$3 = defineComponent({
		__name: "LoadingSpinner",
		props: {
			isShow: {
				type: Boolean
			}
		},
		setup(e) {
			return (t, n) => (openBlock(), createBlock(Transition, {
				name: "fade"
			}, {
				default: withCtx(() => [t.isShow ? (openBlock(), createElementBlock("div", _hoisted_1$2,
					_hoisted_5$1)) : createCommentVNode("", !0)]),
				_: 1
			}))
		}
	}),
	LoadingSpinner_vue_vue_type_style_index_0_scoped_4813a901_lang = "",
	_export_sfc = (e, t) => {
		const n = e.__vccOpts || e;
		for (const [o, r] of t) n[o] = r;
		return n
	},
	LoadingSpinner = _export_sfc(_sfc_main$3, [
		["__scopeId", "data-v-4813a901"]
	]),
	_hoisted_1$1 = {
		key: 0,
		class: "hidden lg:block"
	},
	_hoisted_2 = {
		key: 1
	},
	_hoisted_3 = {
		class: "hidden lg:table-cell"
	},
	_hoisted_4 = {
		key: 1
	},
	_hoisted_5 = {
		key: 0,
		class: "flex justify-center items-center flex-wrap gap-2"
	},
	_hoisted_6 = ["onClick"],
	_hoisted_7 = {
		class: "flex justify-center items-center flex-wrap gap-2"
	},
	_sfc_main$2 = defineComponent({
		__name: "ChatServiceSelect",
		setup(e) {
			const t = useChatStore(),
				{
					isShowChatServiceSelectModal: n,
					sydneyConfigs: o,
					selectedSydneyBaseUrl: r
				} = storeToRefs(t),
				i = useMessage(),
				a = async u => {
					u.isUsable = void 0, u.delay = void 0;
					const d = await t.checkSydneyConfig(u);
					d.errorMsg && i.error(d.errorMsg), u.isUsable = d.isUsable, u.delay = d.delay
				}, l = u => {
					r.value = u.baseUrl, CIB.config.sydney.baseUrl = u.baseUrl, n.value = !1
				}, s = u => {
					if (u.baseUrl) {
						if (!u.baseUrl.startsWith("https://")) {
							i.error("请填写 https 开头的正确链接");
							return
						}
						return a(u)
					}
				};
			return (u, d) => (openBlock(), createBlock(unref(NModal), {
				class: "w-11/12 lg:w-[900px]",
				show: unref(n),
				"onUpdate:show": d[0] || (d[0] = f => isRef(n) ? n.value = f : null),
				preset: "card",
				title: "聊天服务器设置"
			}, {
				default: withCtx(() => [createVNode(unref(NTable), {
					striped: ""
				}, {
					default: withCtx(() => [createBaseVNode("tbody", null, [(openBlock(!
						0), createElementBlock(Fragment, null,
						renderList(unref(o), (f, v) => (
							openBlock(), createElementBlock(
								"tr", {
									key: v
								}, [createBaseVNode("td",
									null, [f.isCus ? (
											openBlock(),
											createElementBlock(
												"span",
												_hoisted_1$1,
												toDisplayString(
													f
													.label
													), 1
												)) : (
											openBlock(),
											createElementBlock(
												"span",
												_hoisted_2,
												toDisplayString(
													f
													.label
													), 1
												)), f
										.isCus ? (
											openBlock(),
											createBlock(
												unref(
													NInput
													), {
													key: 2,
													class: "lg:hidden",
													value: f
														.baseUrl,
													"onUpdate:value": g =>
														f
														.baseUrl =
														g,
													placeholder: "自定义聊天服务器链接",
													onChange: g =>
														s(
															f)
												}, null,
												8, ["value",
													"onUpdate:value",
													"onChange"
												])) :
										createCommentVNode(
											"", !0)
									]), createBaseVNode(
									"td", _hoisted_3, [f
										.isCus ? (
											openBlock(),
											createBlock(
												unref(
													NInput
													), {
													key: 0,
													value: f
														.baseUrl,
													"onUpdate:value": g =>
														f
														.baseUrl =
														g,
													placeholder: "自定义聊天服务器链接",
													onChange: g =>
														s(
															f)
												}, null,
												8, ["value",
													"onUpdate:value",
													"onChange"
												])) : (
											openBlock(),
											createElementBlock(
												"span",
												_hoisted_4,
												toDisplayString(
													f
													.baseUrl
													), 1
												))
									]), createBaseVNode(
									"td", null, [f
										.baseUrl && f
										.isUsable ===
										void 0 && f
										.delay ===
										void 0 ? (
											openBlock(),
											createElementBlock(
												"div",
												_hoisted_5,
												[createVNode(
													unref(
														NButton
														), {
														tertiary: "",
														loading:
															!
															0,
														size: "small",
														type: "info"
													}
													)])
											) : f
										.baseUrl ? (
											openBlock(),
											createElementBlock(
												"div", {
													key: 1,
													class: "flex justify-center items-center flex-wrap gap-2",
													onClick: g =>
														a(
															f)
												}, [f
													.isUsable ===
													!1 ?
													(openBlock(),
														createBlock(
															unref(
																NTag
																), {
																key: 0,
																type: "error",
																class: "cursor-pointer"
															}, {
																default: withCtx(
																	() => [
																		createTextVNode(
																			"不可用"
																			)
																	]
																	),
																_: 1
															}
															)
														) :
													createCommentVNode(
														"",
														!
														0
														),
													f
													.delay ?
													(openBlock(),
														createBlock(
															unref(
																NTag
																), {
																key: 1,
																type: "success",
																class: "cursor-pointer"
															}, {
																default: withCtx(
																	() => [
																		createTextVNode(
																			toDisplayString(
																				f
																				.delay
																				) +
																			" ms",
																			1
																			)
																	]
																	),
																_: 2
															},
															1024
															)
														) :
													createCommentVNode(
														"",
														!
														0
														)
												], 8,
												_hoisted_6
												)) :
										createCommentVNode(
											"", !0)
									]), createBaseVNode(
									"td", null, [
										createBaseVNode(
											"div",
											_hoisted_7,
											[createVNode(
													unref(
														NButton
														), {
														class: "hidden lg:table-cell",
														secondary: "",
														onClick: g =>
															a(
																f)
													}, {
														default: withCtx(
															() => [
																createTextVNode(
																	"检测"
																	)
															]
															),
														_: 2
													},
													1032,
													[
														"onClick"]
													), f
												.baseUrl ===
												unref(
												r) ? (
													openBlock(),
													createBlock(
														unref(
															NButton
															), {
															key: 0,
															secondary: "",
															type: "success"
														}, {
															default: withCtx(
																() => [
																	createTextVNode(
																		"当前"
																		)
																]
																),
															_: 1
														}
														)
													) :
												(openBlock(),
													createBlock(
														unref(
															NButton
															), {
															key: 1,
															secondary: "",
															type: "info",
															onClick: g =>
																l(
																	f)
														}, {
															default: withCtx(
																() => [
																	createTextVNode(
																		"选择"
																		)
																]
																),
															_: 2
														},
														1032,
														[
															"onClick"]
														)
													)
											])
									])]))), 128))])]),
					_: 1
				})]),
				_: 1
			}, 8, ["show"]))
		}
	}),
	_hoisted_1 = createBaseVNode("div", {
		class: "w-0 md:w-[60px]"
	}, null, -1),
	promptItemHeight = 130,
	_sfc_main$1 = defineComponent({
		__name: "Chat",
		setup(e) {
			const t = useMessage(),
				n = useDialog();
			window.$dialog = n;
			const o = ref(!0),
				r = usePromptStore(),
				{
					isShowPromptSotre: i,
					isShowChatPrompt: a,
					keyword: l,
					promptList: s,
					searchPromptList: u,
					selectedPromptIndex: d
				} = storeToRefs(r),
				f = useChatStore(),
				{
					isShowChatServiceSelectModal: v,
					sydneyConfigs: g,
					selectedSydneyBaseUrl: p
				} = storeToRefs(f),
				m = useUserStore(),
				C = ref(),
				b = ref(!1),
				x = ref(!1),
				S = ref(!1),
				w = ref(""),
				y = ref(!1);
			computed(() => CIB.vm.isMobile && CIB.vm.sidePanel.isVisibleMobile || !CIB.vm.isMobile && CIB.vm
				.sidePanel.isVisibleDesktop);
			const {
				themeMode: R,
				uiVersion: k,
				gpt4tEnable: B,
				sydneyEnable: T,
				sydneyPrompt: M,
				enterpriseEnable: E,
				copilotProEnable: $
			} = storeToRefs(m);
			onMounted(async () => {
				if (await j(), O(), await SydneyFullScreenConv.initWithWaitlistUpdate({
						cookLoc: {}
					}, 10), isMobile()) {
					const A = document.querySelector("cib-serp");
					A == null || A.setAttribute("mobile", "")
				}
				k.value === "v3" && await sj_evt.bind("chs_init", () => {
						ChatHomeScreen.init("/turing/api/suggestions/v2/zeroinputstarter")
					}, !0), D(), o.value = !1, J(), Q(), re(), ie(), R.value == "light" ? CIB
					.changeColorScheme(0) : R.value == "dark" ? CIB.changeColorScheme(1) : R.value ==
					"auto" && (window.matchMedia("(prefers-color-scheme: dark)").matches ? CIB
						.changeColorScheme(1) : CIB.changeColorScheme(0))
			});
			const _ = async A => new Promise(Y => setTimeout(Y, A)), O = () => {}, N = () => {
				if (p.value) CIB.config.sydney.baseUrl = p.value, v.value = !1;
				else {
					if (v.value = !0, p.value = CIB.config.sydney.baseUrl, g.value.filter(Y => !Y.isCus)
						.every(Y => Y.baseUrl !== p.value)) {
						const Y = g.value.find(I => I.isCus);
						Y && (Y.baseUrl = p.value)
					}
					f.checkAllSydneyConfig()
				}
			}, D = async () => {
				const A = base58Decode(_G.S);
				let Y = [];
				for (let G = 0; G < _G.SP.length; G++) Y.push(A[_G.SP[G]]);
				base58Decode(Y.join("")) != _G.AT && n.warning({
					title: decodeURI(base58Decode(_G.TIP)),
					content: decodeURI(base58Decode(_G.TIPC)),
					maskClosable: !1,
					closable: !1,
					closeOnEsc: !1
				});
				const U = await m.getSysConfig();
				switch (U.code) {
					case ApiResultCode.OK: {
						if (!U.data.isAuth) {
							S.value = !0;
							return
						}
						await F(U.data);
						let G = cookies.get("MicrosoftApplicationsTelemetryDeviceId");
						(G == "" || G == null) && (G = crypto.randomUUID(), cookies.set(
							"MicrosoftApplicationsTelemetryDeviceId", G, 60, "/"));
						let ne = m.getUserRwBf();
						if (ne != "") {
							let se = ne.split("&");
							for (let fe = 0; fe < se.length; fe++) se[fe].startsWith("wls=") && (se[
								fe] = "wls=2");
							ne = se.join("&"), m.saveUserRwBf(ne)
						}
						if (U.data.info != "") {
							const se = JSON.parse(U.data.info);
							t.create(se.content, {
								type: se.type,
								keepAliveOnHover: !0,
								showIcon: !0,
								render: fe => h(NAlert, {
									closable: !0,
									type: fe.type === "loading" ? "default" : fe.type,
									title: se.title,
									style: {
										boxShadow: "var(--n-box-shadow)",
										maxWidth: "calc(100vw - 32px)",
										width: "360px",
										position: "fixed",
										top: "20px",
										right: "12px"
									}
								}, {
									default: () => fe.content
								})
							})
						}
					}
					break;
					case ApiResultCode.UnLegal:
						_G.SB = !0, n.warning({
							title: decodeURI(base58Decode(_G.TIP)),
							content: decodeURI(base58Decode(_G.TIPC)),
							maskClosable: !1,
							closable: !1,
							closeOnEsc: !1
						});
						break;
					default:
						t.error(`[${U.code}] ${U.message}`);
						break
				}
			}, F = async A => {
				A.isSysCK || await m.checkUserToken(), N()
			}, j = async () => new Promise((A, Y) => {
				sj_evt.bind("sydFSC.init", A, !0), sj_evt.fire("showSydFSC")
			}), J = async () => {
				var ne, se, fe, xe, K, Z, be, Pe, $e, Te, Ne, Me;
				location.hostname === "localhost" && (CIB.config.sydney
					.hostnamesToBypassSecureConnection = CIB.config.sydney
					.hostnamesToBypassSecureConnection.filter(Ie => Ie !== location
						.hostname)), isMobile() && await _(25);
				const A = document.querySelector("cib-serp"),
					Y = (ne = A == null ? void 0 : A.shadowRoot) == null ? void 0 : ne
					.querySelector("cib-conversation"),
					I = (se = Y == null ? void 0 : Y.shadowRoot) == null ? void 0 : se
					.querySelector("cib-welcome-container"),
					U = (fe = I == null ? void 0 : I.shadowRoot) == null ? void 0 : fe
					.querySelectorAll("div[class='muid-upsell']");
				U != null && U.length && U.forEach(Ie => {
						Ie.remove()
					}), (K = (xe = I == null ? void 0 : I.shadowRoot) == null ? void 0 : xe
						.querySelector(".preview-container")) == null || K.remove(), (be = (
							Z = I == null ? void 0 : I.shadowRoot) == null ? void 0 : Z
						.querySelector(".footer")) == null || be.remove(), ($e = (Pe = A ==
							null ? void 0 : A.shadowRoot) == null ? void 0 : Pe
						.querySelector("cib-serp-feedback")) == null || $e.remove(),
					isMobile() && ((Ne = (Te = I == null ? void 0 : I.shadowRoot) == null ?
							void 0 : Te.querySelector(".container-item")) == null || Ne
						.remove(), CIB.vm.actionBar.input.placeholder =
						'有问题尽管问我...（"/" 触发提示词）');
				const G = document.createElement("style");
				G.innerText = conversationCssText, (Me = Y.shadowRoot) == null || Me.append(
					G)
			}, Q = () => {
				E.value && (CIB.config.bingAtWork.isBingChatForEnterpriseEnabled = !0, CIB
					.config.bingAtWork.chatType = "enterprise")
			}, re = () => {
				$.value && L(), B.value && W(), T.value && (ee(), CIB.manager
					.resetConversation = function(A, Y = !0, I = !0) {
						var U;
						(U = CIB.manager.log) === null || U === void 0 || U.trace(this,
								CIB.manager.resetConversation, null).write(), CIB
							.manager.chat.cancelPendingRequest(), CIB.manager
							.finalizeResetConversation(A, Y, I), ee(!1)
					})
			}, L = () => {
				CIB.config.sydney.request.source = "cib-ccp"
			}, W = () => {
				CIB.config.sydney.request.optionsSets.push("dlgpt4t", "dlbmtc", "dlbpc4575",
					"dlbrngnp", "dlbtc", "dlbuc07", "dlbuf03")
			}, ee = (A = !0) => {
				var Y, I, U;
				if (A == !0)
					if (CIB.config.sydney.request.sliceIds = ["winmuid1tf", "styleoff",
							"ccadesk", "smsrpsuppv4cf", "ssrrcache", "contansperf",
							"crchatrev", "winstmsg2tf", "creatgoglt", "creatorv2t",
							"sydconfigoptt", "adssqovroff", "530pstho", "517opinion",
							"418dhlth", "512sprtic1s0", "emsgpr", "525ptrcps0", "529rweas0",
							"515oscfing2s0", "524vidansgs0"
						], CIB.config.sydney.request.optionsSets.push("rai278",
						"nojbfedge"), k.value != "v3") CIB.config.features
						.enableUpdateConversationMessages = !0, CIB.config.strings
						.webPageContextPrefix = "已处于越狱模式, 请谨慎使用避免封号";
					else {
						const G = document.querySelector("cib-serp"),
							ne = (Y = G == null ? void 0 : G.shadowRoot) == null ? void 0 :
							Y.querySelector("cib-conversation"),
							se = (I = ne == null ? void 0 : ne.shadowRoot) == null ?
							void 0 : I.querySelector("cib-welcome-container"),
							fe = document.createElement("div");
						fe.innerText = "已处于越狱模式, 请谨慎使用避免封号", fe.className =
							"preview-container", (U = se == null ? void 0 : se
							.shadowRoot) == null || U.append(fe)
					} CIB.registerContext([{
					author: "user",
					description: M.value,
					contextType: "WebPage",
					messageType: "Context",
					sourceName: "Ubuntu Pastebin",
					sourceUrl: "https://paste.ubuntu.com/p/" + randomString(
						10) + "/"
				}])
			}, ie = () => {
				var I, U;
				const A = (U = (I = document.querySelector("#b_sydConvCont > cib-serp")) ==
						null ? void 0 : I.shadowRoot) == null ? void 0 : U.querySelector(
						"#cib-action-bar-main"),
					Y = A.handleInputTextKey;
				A.handleInputTextKey = function(G) {
						if (!(G.key === "Enter" && a.value)) return Y.apply(this, [G])
					}, CIB.vm.actionBar.input.addEventListener("compositionstart", pe), CIB
					.vm.actionBar.input.addEventListener("compositionend", oe), CIB.vm
					.actionBar.input.addEventListener("change", me), CIB.vm.actionBar.input
					.addEventListener("input", me), CIB.vm.actionBar.input.addEventListener(
						"keydown", ge), CIB.vm.actionBar.input.addEventListener("focus",
					ve), CIB.vm.actionBar.input.addEventListener("blur", Se)
			}, pe = A => {
				b.value = !0
			}, oe = A => {
				b.value = !1, me(A)
			}, me = A => {
				var Y;
				b.value || (A instanceof InputEvent || A instanceof CompositionEvent) && A
					.target instanceof HTMLTextAreaElement && ((Y = A.target.value) !=
						null && Y.startsWith("/") ? (a.value = !0, l.value = A.target.value
							.slice(1), d.value = 0) : (l.value = "", a.value = !1))
			}, ve = A => {}, Se = A => {
				setTimeout(() => {
					a.value = !1
				}, 200)
			}, ge = A => {
				switch (A.key) {
					case "ArrowUp":
						d.value > 0 && (d.value--, C.value && C.value.scrollToIndex(d
							.value));
						break;
					case "ArrowDown":
						d.value < u.value.length - 1 && (d.value++, C.value && C.value
							.scrollToIndex(d.value));
						break;
					case "Tab":
					case "Enter": {
						if (!CIB.vm.actionBar.textInput.value || !CIB.vm.actionBar.textInput
							.value.startsWith("/")) return;
						ae(u.value[d.value])
					}
					break
				}
			}, ae = A => {
				A && (l.value = "", CIB.vm.actionBar.textInput.value = A.prompt, a.value = !
					1)
			}, H = () => {
				x.value = !0, setTimeout(() => {
					var A;
					if (x.value === !0) {
						x.value = !1;
						const Y = ((A = C.value) == null ? void 0 : A
						.getOffset()) || 0;
						d.value = Math.round(Y / promptItemHeight)
					}
				}, 100)
			}, q = async () => {
				if (!w.value) {
					t.error("请先输入授权码");
					return
				}
				y.value = !0, m.setAuthKey(w.value);
				const A = await m.getSysConfig();
				A.data.isAuth ? (t.success("授权成功"), S.value = !1, F(A.data)) : t.error(
					"授权码有误"), y.value = !1
			};
			return (A, Y) => (openBlock(), createElementBlock(Fragment, null, [createVNode(LoadingSpinner, {
				"is-show": o.value
			}, null, 8, ["is-show"]), createBaseVNode("main", null, [createVNode(unref(NPopover), {
				trigger: "manual",
				show: unref(a),
				"show-arrow": !1,
				class: "max-w-[1060px] max-h-[390px]",
				to: !1
			}, {
				trigger: withCtx(() => [createVNode(unref(NButton), {
					style: {
						position: "fixed",
						left: "20px",
						bottom: "80px",
						"z-index": "-1",
						opacity: "0"
					}
				})]),
				default: withCtx(() => [_hoisted_1, unref(s).length > 0 ? (openBlock(),
					createBlock(unref(NVirtualList), {
						key: 0,
						class: "w-full max-w-[1060px] max-h-[390px] overflow-y-auto",
						"item-size": 131,
						"item-resizable": "",
						items: unref(s),
						onScroll: H
					}, {
						default: withCtx(({
							item: I,
							index: U
						}) => [createVNode(_sfc_main$4, {
							index: U,
							source: I
						}, null, 8, ["index", "source"])]),
						_: 1
					}, 8, ["items"])) : (openBlock(), createBlock(unref(
					NEmpty), {
					key: 1,
					class: "w-full max-w-[1060px] max-h-[390px] rounded-xl py-6",
					description: "暂未设置提示词数据"
				}, {
					extra: withCtx(() => [createVNode(unref(
						NButton), {
							secondary: "",
							type: "info",
							onClick: Y[0] || (Y[0] =
								I => i.value = !0)
						}, {
							default: withCtx(() => [
								createTextVNode(
									"去提示词库添加")
							]),
							_: 1
						})]),
					_: 1
				}))]),
				_: 1
			}, 8, ["show"])]), createBaseVNode("footer", null, [createVNode(_sfc_main$2),
				createVNode(unref(NModal), {
					show: S.value,
					"onUpdate:show": Y[2] || (Y[2] = I => S.value = I),
					preset: "dialog",
					"close-on-esc": !1,
					"mask-closable": !1,
					"show-icon": !1
				}, {
					default: withCtx(() => [createVNode(unref(NResult), {
						class: "box-border w-11/12 lg:w-[400px] px-4 py-4 rounded-md",
						status: "403",
						title: "401 未授权"
					}, {
						footer: withCtx(() => [createVNode(unref(NInput), {
							class: "w-11/12",
							value: w.value,
							"onUpdate:value": Y[1] || (Y[
								1] = I => w.value = I),
							type: "password",
							placeholder: "请输入授权码",
							maxlength: "60",
							clearable: ""
						}, null, 8, ["value"]), createVNode(
							unref(NButton), {
								class: "mt-4",
								secondary: "",
								type: "info",
								loading: y.value,
								onClick: q
							}, {
								default: withCtx(() => [
									createTextVNode(
										"授权")
								]),
								_: 1
							}, 8, ["loading"])]),
						_: 1
					})]),
					_: 1
				}, 8, ["show"])
			])], 64))
		}
	}),
	_sfc_main = defineComponent({
		__name: "index",
		setup(e) {
			return (t, n) => (openBlock(), createElementBlock("main", null, [createVNode(_sfc_main$7), createVNode(
				_sfc_main$5), createVNode(_sfc_main$1)]))
		}
	});
export {
	_sfc_main as
	default
};