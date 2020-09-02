import $Time from "@/common/js/time.js"
export default {
	filters: {
		formatTime(value) {
			return $Time.gettime(value);
		}
	},
}